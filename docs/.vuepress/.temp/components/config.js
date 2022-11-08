import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import YouTube from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import VideoPlayer from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import BiliBili from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import BackToTop from "/Users/huangjiabao/GitHub/WebSite/BornforthisHJB.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("PDF", PDF);
    app.component("YouTube", YouTube);
    app.component("VideoPlayer", VideoPlayer);
    app.component("BiliBili", BiliBili);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3426793_if7debkm2dg.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
