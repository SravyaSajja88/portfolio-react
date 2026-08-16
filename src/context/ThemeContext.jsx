import { createContext, useContext } from 'react'

// Context object used to share the theme state (and toggle function) that
// lives in App.jsx, without prop drilling it through every route.
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}
