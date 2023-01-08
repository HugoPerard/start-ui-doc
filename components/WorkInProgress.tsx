import { Callout } from "nextra-theme-docs";

export const WorkInProgress = () => (
  <Callout type="info" emoji="ℹ️">
    The documentation is currently being written by the community. Feel free to{" "}
    <a
      href="https://github.com/BearStudio/start-ui-web-doc"
      target="_blank"
      rel="noreferrer noopener"
      style={{ textDecoration: "underline" }}
    >
      contribute ↗
    </a>
  </Callout>
);
