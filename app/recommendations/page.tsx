"use client"

import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { ref, push, onValue, remove } from "firebase/database"
import { auth, database } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { LogOut, Plus, Trash2, User } from "lucide-react"

interface Referral {
  id: string
  name: string
  createdAt: number
}

export default function RecommendationsPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userId, setUserId] = useState<string>("")

  // 추천인 관련 상태
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [newReferralName, setNewReferralName] = useState("")
  const [addingReferral, setAddingReferral] = useState(false)

  useEffect(() => {
    // 인증 상태 감지
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true)
        setUserId(user.uid)
        // 기존 추천인 목록 실시간 구독
        loadReferrals(user.uid)
      } else {
        setIsAuthenticated(false)
        setUserId("")
        setReferrals([])
      }
    })

    return () => unsubscribe()
  }, [])

  // 추천인 목록 실시간 구독
  const loadReferrals = (uid: string) => {
    const referralsRef = ref(database, 'referrals')

    onValue(referralsRef, (snapshot) => {
      const data = snapshot.val()
      const loadedReferrals: Referral[] = []

      if (data) {
        Object.keys(data).forEach((key) => {
          if (data[key].userId === uid) {
            loadedReferrals.push({
              id: key,
              name: data[key].name,
              createdAt: data[key].createdAt || Date.now()
            })
          }
        })
      }

      // 최신순으로 정렬
      loadedReferrals.sort((a, b) => b.createdAt - a.createdAt)
      setReferrals(loadedReferrals)
    })
  }

  // 추천인 추가
  const handleAddReferral = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReferralName.trim() || !userId) return

    setAddingReferral(true)
    try {
      const referralsRef = ref(database, 'referrals')
      await push(referralsRef, {
        userId: userId,
        name: newReferralName.trim(),
        createdAt: Date.now()
      })

      setNewReferralName("")
    } catch (err) {
      console.error("Error adding referral:", err)
      alert("추천인 추가에 실패했습니다.")
    } finally {
      setAddingReferral(false)
    }
  }

  // 추천인 삭제
  const handleDeleteReferral = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return

    try {
      const referralRef = ref(database, `referrals/${id}`)
      await remove(referralRef)
    } catch (err) {
      console.error("Error deleting referral:", err)
      alert("삭제에 실패했습니다.")
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // 로그인 성공 - onAuthStateChanged에서 처리됨
    } catch (err) {
      console.error("Login error:", err)
      setError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setEmail("")
      setPassword("")
      setReferrals([])
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  // 로그인된 상태 - 추천인 관리 화면
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-[oklch(0.98_0.01_250)] to-background py-8 px-4">
        {/* 배경 장식 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 gradient-primary rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">추천인 관리</h1>
              <p className="text-muted-foreground">등록된 추천인을 관리하세요</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </Button>
          </div>

          {/* 추천인 추가 폼 */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 mb-6 glass">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              새 추천인 추가
            </h2>
            <form onSubmit={handleAddReferral} className="flex gap-3">
              <input
                type="text"
                value={newReferralName}
                onChange={(e) => setNewReferralName(e.target.value)}
                placeholder="추천인 이름을 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                disabled={addingReferral}
                required
              />
              <Button
                type="submit"
                disabled={addingReferral || !newReferralName.trim()}
                className="bg-gradient-to-r from-[oklch(0.55_0.25_235)] to-[oklch(0.65_0.20_280)] text-white px-8"
              >
                {addingReferral ? "추가 중..." : "추가"}
              </Button>
            </form>
          </div>

          {/* 추천인 목록 */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 glass">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              등록된 추천인 ({referrals.length}명)
            </h2>

            {referrals.length === 0 ? (
              <div className="text-center py-12">
                <User className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">
                  아직 등록된 추천인이 없습니다.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  위 폼에서 추천인을 추가해보세요.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {referrals.map((referral) => (
                  <div
                    key={referral.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background/30 hover:bg-background/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.55_0.25_235)] to-[oklch(0.65_0.20_280)] flex items-center justify-center text-white font-semibold">
                        {referral.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold">{referral.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(referral.createdAt).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleDeleteReferral(referral.id)}
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // 로그인 화면
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-[oklch(0.98_0.01_250)] to-background">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 gradient-primary rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-lg glass relative z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gradient mb-2">추천등록</h1>
          <p className="text-muted-foreground">
            로그인하여 추천인을 관리하세요
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="your@email.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[oklch(0.55_0.25_235)] to-[oklch(0.65_0.20_280)] text-white font-semibold py-6 text-lg"
            disabled={loading}
            size="lg"
          >
            {loading ? "로그인 중..." : "로그인"}
          </Button>
        </form>

        {/* <div className="text-center text-sm text-muted-foreground">
          <p>Firebase Authentication을 사용합니다</p>
        </div> */}
      </div>
    </div>
  )
}
