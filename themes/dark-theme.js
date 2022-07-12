import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // background colors
      background: 'black',
      foreground: 'white',
      backgroundContrast: 'black',

      //blue
      blue50: '#10253E',
      blue100: '#102C4C',
      blue200: '#0F3158',
      blue300: '#0D3868',
      blue400: '#0A4281',
      blue500: '#0952A5',
      blue600: '#0072F5',
      blue700: '#3694FF',
      blue800: '#3694FF',
      blue900: '#EAF4FF',

      //purple
      purple50: '#1F0A33',
      purple100: '#240C3C',
      purple200: '#2E0F4D',
      purple300: '#3B1362',
      purple400: '#451773',
      purple500: '#571D91',
      purple600: '#7828C8',
      purple700: '#9750DD',
      purple800: '#B583E7',
      purple900: '#F7ECFC',

      //cyan
      cyan50: '#012A32',
      cyan100: '#023A46',
      cyan200: '#024B5A',
      cyan300: '#036072',
      cyan400: '#037086',
      cyan500: '#048EA9',
      cyan600: '#06B7DB',
      cyan700: '#33D9FA',
      cyan800: '#6FE4FB',
      cyan900: '#EBFBFE',

      //yellow
      yellow50: '#3A2503',
      yellow100: '#442B03',
      yellow200: '#583804',
      yellow300: '#704705',
      yellow400: '#845306',
      yellow500: '#A66908',
      yellow600: '#F5A524',
      yellow700: '#F6AD37',
      yellow800: '#F8C572',
      yellow900: '#FEF7EC',

      //red
      red50: '#300313',
      red100: '#300313',
      red200: '#44041A',
      red300: '#5C0523',
      red400: '#6F062B',
      red500: '#910838',
      red600: '#F31260',
      red700: '#F4256D',
      red800: '#F75F94',
      red900: '#FDD8E5',

      //pink
      pink50: '#330025',
      pink100: '#470033',
      pink200: '#5C0042',
      pink300: '#750054',
      pink400: '#8A0063',
      pink500: '#AD007C',
      pink600: '#FF4ECD',
      pink700: '#FF2EC4',
      pink800: '#FF6BD5',
      pink900: '#FFEBF9',

      //gray
      gray50: '#16181A',
      gray100: '#26292B',
      gray200: '#2B2F31',
      gray300: '#313538',
      gray400: '#3A3F42',
      gray500: '#4C5155',
      gray600: '#697177',
      gray700: '#787F85',
      gray800: '#9BA1A6',
      gray900: '#ECEDEE',

      //green
      green50: '#042F14',
      green100: '#06381B',
      green200: '#074A24',
      green300: '#0A6130',
      green400: '#0B7439',
      green500: '#0F9549',
      green600: '#17C964',
      green700: '#41EC8B',
      green800: '#78F2AD',
      green900: '#ECFDF4',

      //primary colors
      primaryLight: '$blue50',
      primaryLightHover: '$blue100',
      primaryLightActive: '$blue200',
      primaryLightContrast: '$blue600',

      //secondary colors
      secondaryLight: '$purple50',
      secondaryLightHover: '$purple100',
      secondaryLightActive: '$purple200',
      secondaryLightContrast: '$purple800',
      secondary: '$purple700',
      secondaryBorder: '$purple500',
      secondaryBorderHover: '$purple600',
      secondarySolidHover: '$purple700',
      secondaryShadow: '$purple500',

      //succes colors
      successLight: '$green50',
      successLightHover: '$green100',
      successLightActive: '$green200',

      //warning colors
      warningLight: '$yellow50',
      warningLightHover: '$yellow100',
      warningLightActive: '$yellow200',

      //error colors
      errorLight: '$red50',
      errorLightHover: '$red100',
      errorLightActive: '$red200',
      errorLightContrast: '$red700',

      //neutral colors
      neutralLight: '$gray200',
      neutralLightHover: '$gray300',
      neutralLightActive: '$gray400',
      neutralSolidContrast: '$white',

      // others colors
      text: '$gray900',
      link: '$blue700',
      codeLight: '$cyan50',
      code: '$cyan600',
      selection: '$pink800'
    },
    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '1000px',
      lg: '1200px',
      xl: '1920px'
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"
    }
  }
});

export default darkTheme;
