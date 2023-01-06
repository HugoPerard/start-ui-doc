import React from "react";
import { Tab, Tabs } from "nextra-theme-docs";
import Image, { ImageProps as NextImageProps } from "next/image";

import { createContext, useContext, useState } from "react";

export type DisplayedImage = "desktop" | "mobile";

type ImageTabsContextValue = {
  displayedImage: DisplayedImage;
  setDisplayedImage(displayedImage: DisplayedImage): void;
};

const ImageTabsContext = createContext<ImageTabsContextValue>(null);
export const useImageTabsContext = () => {
  const ctx = useContext(ImageTabsContext);

  if (!ctx) {
    throw new Error("Missing <ImageTabsContext.Provider>");
  }

  return ctx;
};

export const ImageTabsContextProvider = ({ children }) => {
  const [displayedImage, setDisplayedImage] =
    useState<DisplayedImage>("desktop");

  return (
    <ImageTabsContext.Provider value={{ displayedImage, setDisplayedImage }}>
      {children}
    </ImageTabsContext.Provider>
  );
};

export const ImageTabs: React.FC<ImageTabsProps> = ({ desktop, mobile }) => {
  const { displayedImage, setDisplayedImage } = useImageTabsContext();

  const tabs = (
    [desktop ? "Desktop" : null, mobile ? "Mobile" : null] as const
  ).filter((device) => !!device);

  const selectedIndex = tabs.findIndex(
    (tab) => tab.toLowerCase() === displayedImage
  );
  const selectIndex = (newIndex: number) =>
    setDisplayedImage(
      tabs.find((_, index) => index === newIndex).toLowerCase() as
        | "desktop"
        | "mobile"
    );

  return (
    <Tabs items={tabs} selectedIndex={selectedIndex} onChange={selectIndex}>
      {!!desktop?.src && (
        <Tab>
          <Image {...desktop} placeholder="blur" />
        </Tab>
      )}
      {!!mobile?.src && (
        <Tab>
          {/* We add a max height only on desktop */}
          <Image
            {...mobile}
            style={{
              maxHeight: 500,
              objectFit: "contain",
              objectPosition: "0 0",
            }}
            placeholder="blur"
          />
        </Tab>
      )}
    </Tabs>
  );
};

type ImageProps = Pick<NextImageProps, "src" | "alt" | "width" | "height">;

type ImageTabsProps = {
  desktop?: ImageProps;
  mobile?: ImageProps;
};
