<h1 align="center"><img src="assets/thumbnail.png" alt="Start UI Web" /></h1>

🚀 Start UI <small>[web]</small> is an opinionated frontend starter repository created & maintained by the [BearStudio Team](https://www.bearstudio.fr/team) and other contributors.
It represents our team's up-to-date stack that we use when creating web apps for our clients.

# This is Start UI [web] documentation repository

🚧 Is still in progress

# Contribution

## Getting Started

```bash
yarn
yarn dev
```

The documentation uses Nextra from Vercel, so it's based on NextJS. You can check the [documentation](https://nextra.site) for more information.

## Integrate screenshots

For keep consistency between all documentation's screenshots, make sure to follow up these rules :

1. Desktop screenshots dimensions are 1280x800
2. Mobile screenshots dimensions are 390x844 (iPhone 12 Pro)
3. Screenshots have to be with application in dark mode
4. Put every feature/guide's screenshots in a folder named like `my-feature` in `public/images/screenshots/my-feature`
5. Import screenshots using `@/screenshots/my-feature/my-screenshot` path

Here is a tutorial for make perfect screenshots for this documentation (with Google Chrome)

1. If set, deactivate scrollbar always display
2. Go to [start-ui [web]](https://demo.start-ui/com), and then go the page you want to screen
3. Open the developer tools, and open device toolbar
4. 1. For desktop screenshot, set dimensions manually at 1280x800 (you can create a custom device with these dimensions).
   2. For mobile screenshot, set dimensions to iPhone 12 Pro (or manually at 390x844)
5. Click on three dots on the right of device toolbar and click on "Capture screenshot"
6. The screenshot is download with dimensions defined

## Components

Some components have been developed and could be used in documentation pages.

### `ImageTabs`

A component to display images as content of Nextra Tabs component. It is used to display screenshots as desktop or mobile version.

### `Stack`

Flex container that allows to define direction and gap.

### `ResponsiveStack`

Horizontal Stack which will become vertical when the device width is lower than breakpoint prop (default is to 768px)

### `WorkInProgress`

Component based on Nextra Callout, to warn user that a page is not yet written.
