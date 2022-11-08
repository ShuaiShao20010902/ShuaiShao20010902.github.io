<template><div><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<p>你好，我是悦创。</p>
<p>笔者最近发现 github 的用户头像和自己文章中的图片显示不出来了。然后今天发现安装 homeBrew 和 nvm 出现了标题的报错信息。</p>
<p><img src="@source/blog/2022/25.assets/82433212-b5f11f80-9ac3-11ea-886e-6fe17edc1d2e.png" alt="img" loading="lazy"></p>
<p>以上是安装 pnpm 的报错信息，可以发现，脚本需要到 <a href="http://raw.githubusercontent.com" target="_blank" rel="noopener noreferrer">raw.githubusercontent.com<ExternalLinkIcon/></a> 上拉取代码。</p>
<p>网上搜索了一下，发现是 github 的一些域名的 DNS 解析被污染，导致DNS 解析过程无法通过域名取得正确的 IP 地址。</p>
<h3 id="dns-污染" tabindex="-1"><a class="header-anchor" href="#dns-污染" aria-hidden="true">#</a> DNS 污染</h3>
<p><a href="https://zhuanlan.zhihu.com/p/101908711" target="_blank" rel="noopener noreferrer">DNS 污染<ExternalLinkIcon/></a>，感兴趣的朋友可以去了解一下。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3>
<p>打开 <a href="https://www.ipaddress.com/" target="_blank" rel="noopener noreferrer">https://www.ipaddress.com/<ExternalLinkIcon/></a> 输入访问不了的域名</p>
<p><img src="@source/blog/2022/25.assets/82434255-2e0c1500-9ac5-11ea-8102-9ebe8475ea34.png" alt="image" loading="lazy"></p>
<p>查询之后可以获得正确的 IP 地址</p>
<p>在本机的 host 文件中添加，建议使用 <a href="https://github.com/oldj/SwitchHosts/releases" target="_blank" rel="noopener noreferrer">switchhosts<ExternalLinkIcon/></a> 方便 host 管理</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">199.232</span>.68.133 raw.githubusercontent.com
<span class="token number">199.232</span>.68.133 user-images.githubusercontent.com
<span class="token number">199.232</span>.68.133 avatars2.githubusercontent.com
<span class="token number">199.232</span>.68.133 avatars1.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加以上几条 host 配置，页面的图片展示就正常了，homebrew 也能装了，nvm 也行动灵活了。</p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


