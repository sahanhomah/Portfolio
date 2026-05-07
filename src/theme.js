export const THEME_STORAGE_KEY = 'portfolio-theme'

export const THEMES = [
  {
    id: 'default-light',
    label: 'Default Light',
    colors: {
      50: '#2a2a4a',
      100: '#3a3a5a',
      200: '#4a4a7a',
      300: '#5a5a9a',
      400: '#7b7baf',
      500: '#9d9dc7',
      600: '#d4cfe8',
      700: '#e8e5f5',
      800: '#f8f7fc',
      900: '#ffffff',
    },
  },
  {
    id: 'neon',
    label: 'Neon',
    colors: {
      50: '#ffffff',
      100: '#ffff00',
      200: '#ff8d00',
      300: '#ff1b60',
      400: '#ff5b92',
      500: '#02e1ea',
      600: '#00b1ba',
      700: '#00858c',
      800: '#005b60',
      900: '#032426',
    },
  },
  {
    id: 'teal-orange',
    label: 'Teal Orange',
    colors: {
      50: '#eaf4eb',
      100: '#85ccce',
      200: '#09acc7',
      300: '#e33e18',
      400: '#c53a1f',
      500: '#9f311a',
      600: '#7d2817',
      700: '#5a2116',
      800: '#3d1a13',
      900: '#1f120f',
    },
  },
  {
    id: 'brown-rose',
    label: 'Brown Rose',
    colors: {
      50: '#e8d7d1',
      100: '#e7c1bd',
      200: '#d38f78',
      300: '#b8654f',
      400: '#a95949',
      500: '#925441',
      600: '#7e4838',
      700: '#653c31',
      800: '#4b2f27',
      900: '#2f1e1a',
    },
  },
  {
    id: 'orange',
    label: 'Orange',
    colors: {
      50: '#fde3cd',
      100: '#fac89c',
      200: '#f8ac6a',
      300: '#f59139',
      400: '#f47f1f',
      500: '#f37507',
      600: '#d86505',
      700: '#a94f04',
      800: '#6e3304',
      900: '#2d1707',
    },
  },
  {
    id: 'pastel-pop',
    label: 'Pastel Pop',
    colors: {
      50: '#d3b9f6',
      100: '#abd0fe',
      200: '#fea8c1',
      300: '#ff849c',
      400: '#ff9fb0',
      500: '#fcad68',
      600: '#e69552',
      700: '#bc7942',
      800: '#845439',
      900: '#3b2431',
    },
  },
  {
    id: 'sunset',
    label: 'Sunset',
    colors: {
      50: '#b9b8bd',
      100: '#fcdc8b',
      200: '#ea7134',
      300: '#bd431e',
      400: '#a83b1a',
      500: '#8f3216',
      600: '#75280f',
      700: '#5b1f0b',
      800: '#401609',
      900: '#0d0f12',
    },
  },
]

export const DEFAULT_THEME_ID = 'default-light'

export function hexToRgbTriplet(hex) {
  const normalizedHex = hex.replace('#', '')
  const red = Number.parseInt(normalizedHex.slice(0, 2), 16)
  const green = Number.parseInt(normalizedHex.slice(2, 4), 16)
  const blue = Number.parseInt(normalizedHex.slice(4, 6), 16)

  return `${red} ${green} ${blue}`
}

export function getTheme(themeId) {
  return THEMES.find((theme) => theme.id === themeId) ?? THEMES[0]
}

export function getStoredTheme() {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME_ID
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) ?? DEFAULT_THEME_ID
}

export function applyTheme(themeId) {
  if (typeof document === 'undefined') {
    return
  }

  const theme = getTheme(themeId)
  const root = document.documentElement

  Object.entries(theme.colors).forEach(([step, hex]) => {
    root.style.setProperty(`--brand-${step}`, hexToRgbTriplet(hex))
  })

  root.dataset.theme = theme.id

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme.id)
  }
}