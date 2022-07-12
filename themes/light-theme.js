import { createTheme } from "@nextui-org/react";

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // background colors
      background: 'white',
      foreground: 'black',
      backgroundContrast: 'white',

      //blue
      blue50: '#EDF5FF',
      blue100: '#E1EFFF',
      blue200: '#CEE4FE',
      blue300: '#B7D5F8',
      blue400: '#96C1F2',
      blue500: '#5EA2EF',
      blue600: '#0072F5',
      blue700: '#005FCC',
      blue800: '#004799',
      blue900: '#00254D',

      //purple
      purple50: '#F7F2FD',
      purple100: '#F1E8FB',
      purple200: '#EADCF8',
      purple300: '#E0CBF5',
      purple400: '#D1B1F0',
      purple500: '#BC8EE9',
      purple600: '#7828C8',
      purple700: '#6622AA',
      purple800: '#4D1980',
      purple900: '#290E44',

      //green
      green50: '#F1FDF7',
      green100: '#E8FCF1',
      green200: '#DAFBE8',
      green300: '#C8F9DD',
      green400: '#ADF5CC',
      green500: '#88F1B6',
      green600: '#17C964',
      green700: '#13A452',
      green800: '#108944',
      green900: '#06371B',

      //yellow
      yellow50: '#FEF9F0',
      yellow100: '#FEF5E7',
      yellow200: '#FDEFD8',
      yellow300: '#FCE7C5',
      yellow400: '#FBDBA7',
      yellow500: '#F9CB80',
      yellow600: '#F5A524',
      yellow700: '#B97509',
      yellow800: '#925D07',
      yellow900: '#4E3104',

      //red
      red50: '#FEF0F5',
      red100: '#FEE7EF',
      red200: '#FDD8E5',
      red300: '#FCC5D8',
      red400: '#FAA8C5',
      red500: '#F881AB',
      red600: '#F31260',
      red700: '#B80A47',
      red800: '#910838',
      red900: '#4E041E',

      //cyan
      cyan50: '#F0FCFF',
      cyan100: '#E6FAFE',
      cyan200: '#D7F8FE',
      cyan300: '#C3F4FD',
      cyan400: '#A5EEFD',
      cyan500: '#7EE7FC',
      cyan600: '#06B7DB',
      cyan700: '#09AACD',
      cyan800: '#0E8AAA',
      cyan900: '#053B48',

      //pink
      pink50: '#FFF0FB',
      pink100: '#FFE5F8',
      pink200: '#FFD6F3',
      pink300: '#FFC2EE',
      pink400: '#FFA3E5',
      pink500: '#FF7AD9',
      pink600: '#FF4ECD',
      pink700: '#D6009A',
      pink800: '#B80084',
      pink900: '#4D0037',

      //gray
      gray50: '#F1F3F5',
      gray100: '#ECEEF0',
      gray200: '#E6E8EB',
      gray300: '#DFE3E6',
      gray400: '#D7DBDF',
      gray500: '#C1C8CD',
      gray600: '#889096',
      gray700: '#7E868C',
      gray800: '#687076',
      gray900: '#11181C',

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

      //other colors
      text: '$gray900',
      link: '$blue600',
      codeLight: '$pink100',
      code: '$pink600',
      selection: '$blue200'
    },
    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '1000px',
      lg: '1200px',
      xl: '1920px'
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu','Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"
    }
  }
});

export default lightTheme;
