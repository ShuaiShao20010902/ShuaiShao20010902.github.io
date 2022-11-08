<template><div><h2 id="svg-多段线-polyline" tabindex="-1"><a class="header-anchor" href="#svg-多段线-polyline" aria-hidden="true">#</a> SVG 多段线 - <code v-pre>&lt;polyline&gt;</code></h2>
<h3 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例 1</h3>
<p><code v-pre>&lt;polyline</code>&gt; 元素是用于创建任何只有直线的形状：</p>
<img src="@source/column/svg-tutorial/svg-polyline.assets/image-20221103234010946.png" alt="image-20221103234010946" style="zoom:33%;" />
<p>下面是 SVG 代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20,20 40,25 60,40 80,120 120,140 200,180<span class="token punctuation">"</span></span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">fill</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">stroke</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span><span class="token property">stroke-width</span><span class="token punctuation">:</span>3</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/09/09.html" target="_blank">尝试一下</a></button></p>
<h3 id="实例-2" tabindex="-1"><a class="header-anchor" href="#实例-2" aria-hidden="true">#</a> 实例 2</h3>
<p>只有直线的另一个例子：</p>
<img src="@source/column/svg-tutorial/svg-polyline.assets/image-20221103234437062.png" alt="image-20221103234437062" style="zoom:33%;" />
<p>下面是 SVG 代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0,40 40,40 40,80 80,80 80,120 120,120 120,160<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">fill</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span><span class="token property">stroke</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">stroke-width</span><span class="token punctuation">:</span>4</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/09/09-1.html" target="_blank">尝试一下</a></button></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，Web，Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


