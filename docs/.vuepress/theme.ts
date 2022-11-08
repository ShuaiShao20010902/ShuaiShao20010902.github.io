import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://bornforthis.cn/",

  author: {
    name: "AndersonHJB",
    url: "https://bornforthis.cn/",
  },

  iconPrefix: "iconfont icon-",
  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3426793_if7debkm2dg.css",

  logo: "/aiyc.svg",
  // logo: "/img_home/logo_min.png",

  // repo: "BornforthisHJB/BornforthisHJB.github.io",
  // repo: "AndersonHJB/AndersonHJB.github.io",
  repo: "AndersonHJB?tab=repositories",
  // editLink: false,
  // lastUpdated: true,

  // docsDir: "docss",

  // darkmode: "enable", // 强制深色模式
  // darkmode: "switch",
  darkmode: "toggle",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Email: "mailto:bornforthis@bornforthis.cn",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      Gmail: "mailto:aiyuechuang@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
    },
  },

  footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>',

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>',

      displayFooter: true,

      blog: {
        name: "AI悦创",
        avatar: "/aiyc.jpg",
        description: "一个思考者,编程私教 1v1",
        intro: "/intro.md",
        articlePerPage: 6,
      },
      editLink: false,

      // metaLocales: {
      //   editLink: "Edit this page on GitHub",
      // },
    },
  },

  encrypt: {
    config: {
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2022-solution": ["aiyc-exam-2022-solution", "aiyc"],
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2016s1-solution": ["exam-2016s1-solution", "aiyc"],
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2017s1-solution": ["exam-2017s1-solution", "aiyc"],
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2018s1-solution": ["exam-2018s1-solution", "aiyc"],
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2019s1-solution.html": ["exam-2019s1-solution", "aiyc"],
      "/column/Python-practice/Answer/The-University-of-Melbourne/exam-2019s2-solution.html": ["exam-2019s2-solution", "aiyc"],
      "/1v1/11-MaLin/": ["malin", "aiyc"],
      "/1v1/08-LionGuo/": ["xsxsxsxsx", "aiyc"],
      "/1v1/06-KAI/": ["kaissss", "aiyc"],
      "/1v1/05-Patrick/": ["xxxxxx", "aiyc"],
      "/column/An-introductory-programming-class-that-anyone-can-learn/detail/": ["123123", "aiyc"],
      "/1v1/07-AJuN/": ["aiyclosshwhwhwshxw", "aiyc"],
      "/1v1/03-Dannie/01.html": ["123123", "aiyc"],
      "/1v1/01-Thomas-hw-note/": ["123123", "aiyc"],
      "/column/python60/": ["123123a", "aiyc"],
      // "/column/Fifth_brother_photography_class/": "123123a",
      // "/column/data-structure/": "123123a",
      // "/column/web/": "123123a",
      "/dedao/": ["123123a", "aiyc"],
      // "/column/data_analysis/week1": "123123a",
      "/column/TensorFlow/零基础实战机器学习/": ["123123a", "aiyc"],
      // "/${encodeURI(column/TensorFlow/零基础实战机器学习)}/": "123123a",
      "/column/Programmingthinking/": ["123123a", "aiyc"],
      "/column/playback/01-Tommy.html": ["20220517", "aiyc"],
      "/column/playback/02-LKW.html": ["lkw", "aiyc"],
      "/column/playback/03-20220610.html": ["20220610", "aiyc"],
      "/1v1/09-liujiahui/": ["123123", "aiyc"],
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
      //  reaction: true,
      reaction: [
        '/Waline/tieba/tieba_agree.png',
        '/Waline/tieba/tieba_sunglasses.png',
        '/Waline/tieba/tieba_pick_nose.png',
        '/Waline/tieba/tieba_sleep.png',
        '/Waline/tieba/tieba_awkward.png',
        // '/Waline/tieba/tieba_coffee.png',
        '/Waline/tieba/tieba_cute.png',
        // '/Waline/qq/qq_4.gif',
        // '/Waline/qq/qq_alpaca.gif',
        // '/Waline/qq/qq_bear2.gif',
      ],
       comment: true, // 评论数统计
       pageview: true, // 浏览量统计
       copyright: false,
       dark: "auto",
      //  emoji: [
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
      //    'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
      //  ],
    },
    components: [
      // "Badge",
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