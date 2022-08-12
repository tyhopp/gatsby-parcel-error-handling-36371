import type { GatsbyConfig } from "gatsby";

const pathPrefix = JSON.parse('{"foo:"bar"}'); // Missing key end quote

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  pathPrefix,
};

export default config;
