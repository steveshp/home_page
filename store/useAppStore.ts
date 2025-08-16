import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  // UI 상태
  isMobileMenuOpen: boolean
  isScrolled: boolean
  
  // 테마
  theme: 'light' | 'dark'
  
  // 액션
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setScrolled: (value: boolean) => void
  toggleTheme: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 초기 상태
      isMobileMenuOpen: false,
      isScrolled: false,
      theme: 'light',
      
      // 액션 구현
      toggleMobileMenu: () => set((state) => ({ 
        isMobileMenuOpen: !state.isMobileMenuOpen 
      })),
      
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
      
      setScrolled: (value) => set({ isScrolled: value }),
      
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
    }),
    {
      name: 'sv-soft-storage', // 로컬 스토리지 키
      partialize: (state) => ({ theme: state.theme }), // 테마만 저장
    }
  )
)