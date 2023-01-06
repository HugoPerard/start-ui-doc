import { ImageTabsContextProvider } from "@/components/ImageTabs";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ImageTabsContextProvider>
      <Component {...pageProps} />
    </ImageTabsContextProvider>
  );
};

export default App;
