"use client"

import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function RecommendationsPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")

  useEffect(() => {
    // 인증 상태 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
        // 로그인 성공 시 외부 링크 생성
        const baseUrl = process.env.NEXT_PUBLIC_REDIRECT_URL || ""
        const finalUrl = baseUrl
          .replace("{login}", encodeURIComponent(user.email || ""))
          .replace("{passwd}", encodeURIComponent(password || ""))

        setRedirectUrl(finalUrl)
      } else {
        setIsAuthenticated(false)
      }
    })

    return () => unsubscribe()
  }, [password])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // 로그인 성공 - onAuthStateChanged에서 처리됨
    } catch (err: any) {
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
      setRedirectUrl("")
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  const handleRedirect = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl
    }
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-[oklch(0.98_0.01_250)] to-background">
        <div className="w-full max-w-md p-8 space-y-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-lg glass">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gradient mb-2">로그인 성공!</h1>
            <p className="text-muted-foreground mb-6">
              추천등록 시스템으로 이동할 준비가 완료되었습니다.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleRedirect}
              className="w-full bg-gradient-to-r from-[oklch(0.55_0.25_235)] to-[oklch(0.65_0.20_280)] text-white font-semibold py-6 text-lg"
              size="lg"
            >
              추천등록 시스템으로 이동
            </Button>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>

          {redirectUrl && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground break-all">
                이동할 URL: {redirectUrl}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }

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
            로그인하여 추천등록 시스템에 접속하세요
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

        <div className="text-center text-sm text-muted-foreground">
          <p>Firebase Authentication을 사용합니다</p>
        </div>
      </div>
    </div>
  )
}
