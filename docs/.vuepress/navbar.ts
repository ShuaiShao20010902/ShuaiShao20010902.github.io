import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { 
    text: "关于我",
    icon: "people",
    link: "/intro",
  },
  { 
    text: "友情链接",
    icon: "alias", 
    children: [
      {
        text: "开发本站", 
        // icon: "diagram",
        // link: "https://bornforthis.cn",
        children: [
          { text: "Vue", icon: "vue", link: "https://v2.vuepress.vuejs.org/zh/"},
          // { text: "主题", icon: "vue", link: "https://vuepress-theme-hope.github.io/v2/zh/"},
          { text: "Waline", icon: "waline", link: "https://waline.js.org/"},
          { text: "iconfont", link: "https://www.iconfont.cn/"},
          { text: "Leancloud", link: "https://leancloud.app/"},
          { text: "变更日志", icon: "time", link: "/changelog"},
          { text: "Vercel", link: "https://vercel.com/dashboard"},
        ],
      },
      { 
        text: "审美",
        icon: "eye",
        children: [
          { text: "Unsplash", icon: "pic", link: "https://unsplash.com/"},
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/"},
          { text: "openprocessing", icon: "pic", link: "https://openprocessing.org/"},
        ]
      },
    ],
  },
]);
