export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Patrick\",\"description\":\"个人网站\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"/favicon.ico\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
