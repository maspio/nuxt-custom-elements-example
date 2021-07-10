import pkg from "../../package.json";

export default {
  target: "static",
  srcDir: __dirname,

  generate: {
    dir: process.env.DIST_PATH || "../../dist",
    crawler: false
  },

  router: {
    base: process.env.BASE_URL
  },

  head: {
    title: "ZHB Bookslider Web Component",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  customElements: {
    webpackPublicPathInject: () => global.customPublicPath,
    entries: [
      {
        name: "ZhbBookslider",
        tags: [
          {
            async: true,
            name: "ZhbBookslider",
            path: "@/entries/VueRouter",
            options() {
              return {
                props: [
                  "title",
                  "debug",
                  "viewSeletor",
                  "filterSelector",
                  "viewPre",
                  "height",
                  "breakpoints"
                ],
                vueInstanceCreatedCallback() {
                  console.info("constructorCallback", this);
                }
              };
            }
          }
        ]
      }
    ]
  },

  buildModules: [
    "@nuxt/postcss8",
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module"
  ],

  modules: ["nuxt-custom-elements"]
};
