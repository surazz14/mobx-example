import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// modular scale initial value
const msInit = {
  units: 'rem',
  base: 1,
  ratio: 1.3
}

/*
 * This function makes a set of
 * numbers called a modular scale,
 * which we use like a ruler.
 * http://www.modularscale.com
 */
function ms(v) {
  let value = v
  const ratio = msInit.ratio
  const base = msInit.base
  const units = msInit.units

  value = Math.pow(ratio, value) * base
  value = parseFloat(value).toFixed(2)
  value = String(value) + units

  return value
}

// Color library
export const color = {
  dl_white: '#ffffff',
  dl_ash: '#f2f2f2',
  dl_slate: '#e5e5e5',
  dl_lightgrey: '#cccccc',
  dl_grey: '#aaabaa',
  dl_dirtgrey: '#535962',
  dl_black: '#414751',

  dl_lighteal: '#ebf7f8',
  dl_teal: '#4cbac0',
  dl_lightruby: '#fdedf0',
  dl_ruby: '#de5b6b',

  dl_seashell: '#fef8ec',
  dl_canary: '#e6ae45',
  dl_khaki: '#f7cf80',
  dl_skyblue: '#82b5e3',

  /*is a way of writing your CSS that’s scoped to a single component, and not leak to any other element in the p
	  Appointed brand colors

	  Note: Please change brand colors here and in
	  'src/styles/settings/variables.scss' as well.
	*/

  get primary() {
    return this.dl_teal
  },
  get primaryLight() {
    return this.dl_lighteal
  },

  get secondary() {
    return this.dl_lightgrey
  },
  get secondaryLight() {
    return this.dl_ash
  },
  get secondaryDark() {
    return this.dl_grey
  },

  get danger() {
    return this.dl_ruby
  },
  get dangerLight() {
    return this.dl_lightruby
  },

  get warning() {
    return this.dl_canary
  },
  get warningLight() {
    return this.dl_seashell
  }
}

const font = {
  xxLarge: '2.125rem',
  xLarge: '1.6rem',
  // font sizes frequentily used
  large: '1.2rem',
  medium: '1rem',
  regular: '.875rem',
  small: '.75rem',
  tiny: '.675rem',
  light: 300,
  semiBold: 600,
  bold: 700
}

// theme object
const theme = createMuiTheme({
  // color object
  color,

  // font object
  font,

  // modular scale function
  ms,

  // Color setting
  palette: {
    primary: {
      light: color.primaryLight,
      main: color.primary,
      dark: color.primary,
      contrastText: '#fff'
    },

    secondary: {
      light: color.secondaryLight,
      main: color.secondary,
      dark: color.secondaryDark,
      contrastText: '#fff'
    },

    text: {
      primary: color.dl_black,
      secondary: color.secondaryDark,
      disabled: color.secondary,
      hint: color.secondary
    },

    background: {
      default: color.secondaryLight
    }
  },

  // Brand Color (shortcut keys)
  primary_color: color.primary,
  primaryLight_color: color.primaryLight,
  secondary_color: color.secondary,
  secondaryLight_color: color.secondaryLight,
  secondaryDark_color: color.secondaryDark,
  danger_color: color.danger,
  dangerLight_color: color.dangerLight,
  warning_color: color.warning,
  warningLight_color: color.warningLight,

  // Typography setting
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    useNextVariants: true,

    h1: {
      fontSize: '6rem',
      fontWeight: font.light
    },

    h2: {
      fontSize: '3.75rem',
      fontWeight: font.light
    },

    h3: {
      fontSize: font.xxLarge,
      fontWeight: font.semiBold
    },

    h4: {
      fontSize: font.xxLarge,
      fontWeight: font.light
    },

    // variant used frequentily
    h5: {
      fontSize: font.xLarge,
      fontWeight: font.light
    },

    h6: {
      fontSize: font.large,
      fontWeight: font.bold
    },

    subtitle1: {
      fontSize: font.medium,
      fontWeight: font.bold,
      lineHeight: 1.3
    },

    subtitle2: {
      fontSize: font.regular,
      fontWeight: font.bold
    },

    body2: {
      fontSize: font.regular
    },

    body1: {
      fontSize: font.small
    },

    caption: {
      fontSize: font.small,
      lineHeight: 1.3
    }
  },

  // Breakpoints
  // breakpoints: {
  //   keys: {
  //     0: 'xs',
  //     1: 'sm',
  //     2: 'md',
  //     3: 'lg',
  //     4: 'xl'
  //   },

  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 1024,
  //     lg: 1280,
  //     xl: 1920
  //   }
  // },

  // ratios
  ratio: {
    // layout volume
    size: {
      // Header
      header: '56px',
      headerLargeScreen: '64px',

      // Sidebar
      sidebar: '240px',
      sidebarLargeScreen: '310px'
    },

    // margin and padding in 'rem'
    space: {
      topBottom: ms(1),
      rightLeft: ms(0)
    }
  },

  // distributed rules
  scrollBar: {
    sidebar: {
      // Scrollbar design for sidebar
      '&::-webkit-scrollbar': {
        width: '.4rem'
      },

      '&::-webkit-scrollbar-thumb': {
        borderRadius: '.4rem',
        backgroundColor: color.secondary
      },

      '&::-webkit-scrollbar-track': {
        margin: '.2rem 0',
        backgroundColor: 'transparent'
      }
    }
  }
})

export default responsiveFontSizes(theme)
