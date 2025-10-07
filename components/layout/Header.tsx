"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/useAppStore"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navItems = [
  { href: "/", label: "홈" },
  { href: "#services", label: "서비스" },
  { href: "#projects", label: "프로젝트" },
  { href: "#about", label: "회사소개" },
  { href: "#contact", label: "문의하기" },
]

export function Header() {
  const { isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu, setScrolled } = useAppStore()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrolled])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 로고 */}
          <Link 
            href="/" 
            className="flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo.png"
              alt="Faithful"
              className="h-10 w-auto"
            />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-foreground drop-shadow-lg'
            }`}>
              페이스펄
            </span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink 
                      asChild
                      className={`${navigationMenuTriggerStyle()} font-medium transition-all ${
                        isScrolled 
                          ? 'text-muted-foreground hover:text-primary' 
                          : 'text-foreground hover:bg-white/10 drop-shadow-lg'
                      }`}
                    >
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>


          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-all ${
              isScrolled 
                ? 'text-muted-foreground hover:bg-muted' 
                : 'text-foreground hover:bg-white/10 drop-shadow-lg'
            }`}
            aria-label="메뉴 토글"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 glass rounded-b-2xl">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}