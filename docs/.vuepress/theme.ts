import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://aiycoj.cn/",

  author: {
    name: "Patrick",
    url: "https://aiycoj.cn/",
  },

  iconPrefix: "iconfont icon-",
  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3426793_if7debkm2dg.css",

  logo: "/img_home/logo_min.png",
  repo: "ShuaiShao20010902?tab=repositories",

  // docsDir: "docss",

  // darkmode: "enable", // 强制深色模式
  // darkmode: "switch",
  darkmode: "toggle",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // blog: {
  //   medias: {
  //     GitHub: "https://github.com/AndersonHJB",
  //     Gmail: "mailto:aiyuechuang@gmail.com",
  //     QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
  //     Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
  //     Zhihu: "https://www.zhihu.com/people/aiyuechuang",
  //   },
  // },

  footer: 'NoteBook',

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: 'NoteBook',

      displayFooter: true,

      blog: {
        name: "AI悦创",
        avatar: "/me.jpeg",
        description: "一个思考者",
        intro: "/intro.md",
        articlePerPage: 6,
      },
      editLink: false,


    },
  },

  encrypt: {
    config: {
      "/1v1/05-Patrick/": ["Patrick101", "aiyc"],
      // "/column/Fifth_brother_photography_class/": "123123a",
      // "/column/data-structure/": "123123a",
      // "/column/web/": "123123a",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   // provider: "giscus",
    //   // repo: "BornforthisHJB/comment",
    //   // repoId: "R_kgDOHTJESw",
    //   // category: "Announcements",
    //   // categoryId: "DIC_kwDOHTJES84CO_Qz",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
       provider: "Waline",
       serverURL: "https://comment.bornforthis.cn/",
       reaction: true,

       comment: true, // 评论数统计
       pageview: true, // 浏览量统计
       copyright: false,
       dark: "auto",
    },
    components: [
      "PDF",
      "YouTube",
      "VideoPlayer",
      "BiliBili",
    ],

    // Disable features you don't want here
    mdEnhance: {
      tasklist: true,
      imageMark: true,
      footnote: true,
      tabs: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      // lazyLoad: true,
      imageLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      // vpre: true,
      vPre: true,
      vuePlayground: true,
    },

    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerWords: 100,
      disableCopy: false,
      disableSelection: false,
    },
    
    pwa: false,
    // pwa: {
    //   update: "available",
    //   maxPicSize: 90000,
    //   maxSize: 9000000,
    //   // favicon: "/favicon.ico",
    //   cacheHTML: false,
    //   cachePic: false,
    //   appendBase: true,
    // },
  },
});
