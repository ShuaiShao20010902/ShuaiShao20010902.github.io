import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
// import { musicplayer } 'vuepress-plugin-awesome-musicplayer';

export default defineUserConfig({
  lang: "zh-CN",
  title: "Patrick",
  description: "个人网站",
  base: "/",
  // shouldPrefetch: false,
  head: [
    [
      "link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],
  
  plugins: [

    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "ACD1S100IT",
      apiKey: "409311158985cfee5c0a535e5998ddd2",
      indexName: "bornforthis",
      placeholder: "搜索",
    }),
  ],

  theme,
});
