export const THEME_STORAGE_KEY = 'portfolio-theme'

/**
 * Each theme exposes two token groups:
 *
 * `colors` -> the 50..900 "brand" ramp. It is intentionally INVERTED compared to
 *   a normal Tailwind scale: 50 is the primary text colour and 900 is the page
 *   surface. Components therefore read `bg-brand-900 text-brand-50`.
 *   Step 300 is always the interactive/accent colour (links, buttons, focus).
 *
 * `accents` -> the decorative tokens used by the Folio layout: the page backdrop
 *   the floating card sits on, plus the four illustration colours.
 */
export const THEMES = [
  {
    id: 'folio',
    label: 'Folio',
    colors: {
      50: '#0e1231',
      100: '#3a3f5c',
      200: '#6e7391',
      300: '#4b32e0',
      400: '#6c55e8',
      500: '#8b78ef',
      600: '#b4a8f6',
      700: '#e2ddfb',
      800: '#f4f2fe',
      900: '#ffffff',
    },
    accents: {
      page: '#fbe3d6',
      yellow: '#ffd500',
      orange: '#ff7a00',
      pink: '#f5b8cb',
      lavender: '#c9c2f7',
    },
  },
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
    accents: {
      page: '#e8e6f2',
      yellow: '#f0c674',
      orange: '#e08a5a',
      pink: '#e5b3c6',
      lavender: '#c3bde0',
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
    accents: {
      page: '#021517',
      yellow: '#ffff00',
      orange: '#ff8d00',
      pink: '#ff5b92',
      lavender: '#02e1ea',
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
    accents: {
      page: '#150c0a',
      yellow: '#85ccce',
      orange: '#e33e18',
      pink: '#c53a1f',
      lavender: '#09acc7',
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
    accents: {
      page: '#241713',
      yellow: '#e7c1bd',
      orange: '#d38f78',
      pink: '#e8d7d1',
      lavender: '#b8654f',
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
    accents: {
      page: '#1e0f04',
      yellow: '#fac89c',
      orange: '#f37507',
      pink: '#fde3cd',
      lavender: '#f8ac6a',
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
    accents: {
      page: '#2b1a24',
      yellow: '#fcad68',
      orange: '#ff849c',
      pink: '#fea8c1',
      lavender: '#d3b9f6',
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
    accents: {
      page: '#08090b',
      yellow: '#fcdc8b',
      orange: '#ea7134',
      pink: '#bd431e',
      lavender: '#b9b8bd',
    },
  },
]

export const DEFAULT_THEME_ID = 'folio'

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

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)

  // Guard against a stale id from a previous build that no longer exists.
  return THEMES.some((theme) => theme.id === stored) ? stored : DEFAULT_THEME_ID
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

  Object.entries(theme.accents).forEach(([name, hex]) => {
    root.style.setProperty(`--accent-${name}`, hexToRgbTriplet(hex))
  })

  root.dataset.theme = theme.id

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme.id)
  }
}
