import "../themes/global.css";
import darkTheme from "../themes/dark-theme";
import lightTheme from "../themes/light-theme";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import AppHead from "../components/head";

const App = ({ Component, pageProps, router }) => {
    return (
      <NextThemesProvider
        enableSystem="false"
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <AppHead />
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    );
}

export default App;
