<template><div><p>SVG 文件可通过以下标签嵌入 HTML 文档：<code v-pre>&lt;embed&gt;</code> 、<code v-pre>&lt;object&gt;</code> 或者 <code v-pre>&lt;iframe&gt;</code>。</p>
<p>SVG 的代码可以直接嵌入到 HTML 页面中，或您可以直接链接到 SVG 文件。</p>
<h2 id="使用-embed-标签" tabindex="-1"><a class="header-anchor" href="#使用-embed-标签" aria-hidden="true">#</a> 使用 <code v-pre>&lt;embed&gt;</code> 标签</h2>
<p><code v-pre>&lt;embed&gt;</code> :</p>
<ul>
<li>优势：所有主要浏览器都支持，并允许使用脚本</li>
<li>缺点：不推荐在 HTML4 和 XHTML 中使用（但在 HTML5 允许）</li>
</ul>
<p><strong>语法:</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span>embed src<span class="token operator">=</span><span class="token string">"circle1.svg"</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token string">"image/svg+xml"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-object-标签" tabindex="-1"><a class="header-anchor" href="#使用-object-标签" aria-hidden="true">#</a> 使用 <code v-pre>&lt;object&gt;</code> 标签</h2>
<p><code v-pre>&lt;object&gt;</code>:</p>
<ul>
<li>优势：所有主要浏览器都支持，并支持 HTML4，XHTML 和 HTML5 标准</li>
<li>缺点：不允许使用脚本。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle1.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/svg+xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-iframe-标签" tabindex="-1"><a class="header-anchor" href="#使用-iframe-标签" aria-hidden="true">#</a> 使用 <code v-pre>&lt;iframe&gt;</code> 标签</h2>
<ul>
<li>优势：所有主要浏览器都支持，并允许使用脚本</li>
<li>缺点：不推荐 在HTML4 和 XHTML 中使用（但在HTML5允许）</li>
</ul>
<p><strong>语法:</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle1.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="直接在html嵌入svg代码" tabindex="-1"><a class="header-anchor" href="#直接在html嵌入svg代码" aria-hidden="true">#</a> 直接在HTML嵌入SVG代码</h2>
<p>在Firefox、Internet Explorer9、谷歌 Chrome 和 Safari 中，你可以直接在 HTML 嵌入 SVG 代码。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/03/03.html" target="_blank">尝试一下</a></button></p>
<h2 id="链接到-svg-文件" tabindex="-1"><a class="header-anchor" href="#链接到-svg-文件" aria-hidden="true">#</a> 链接到 SVG 文件</h2>
<p>您还可以用 <code v-pre>&lt;a&gt;</code> 标签链接到一个 SVG 文件：链接到 SVG 文件</p>
<p>您还可以用 <code v-pre>&lt;a&gt;</code> 标签链接到一个 SVG 文件：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle1.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>查看 SVG 文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>结果:</strong><a href="https://bornforthis.cn/web_runing/svg/03/circle1.svg" target="_blank" rel="noopener noreferrer">查看 SVG 文件<ExternalLinkIcon/></a></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt=""></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，Web，Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt=""></p>
</div></template>


