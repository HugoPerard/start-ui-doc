import React from "react";
import { Tab, Tabs } from "nextra-theme-docs";
import Image, { ImageProps as NextImageProps } from "next/image";
import { isMobile } from "react-device-detect";

export const ImageTabs: React.FC<ImageTabsProps> = ({
  desktopImage,
  mobileImage,
}) => {
  const tabs = [
    desktopImage ? "Desktop" : null,
    mobileImage ? "Mobile" : null,
  ].filter((device) => !!device);

  return (
    <Tabs items={tabs}>
      {!!desktopImage?.src && (
        <Tab>
          <Image {...desktopImage} placeholder="blur" />
        </Tab>
      )}
      {!!mobileImage?.src && (
        <Tab>
          {/* We add a max height only on desktop */}
          <Image
            {...mobileImage}
            height={!isMobile ? 500 : undefined}
            placeholder="blur"
          />
        </Tab>
      )}
    </Tabs>
  );
};

type ImageProps = Pick<NextImageProps, "src" | "alt" | "width" | "height">;

type ImageTabsProps = {
  desktopImage?: ImageProps;
  mobileImage?: ImageProps;
};
