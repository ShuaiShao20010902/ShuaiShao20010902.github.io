<template><div><h2 id="简单的-svg-实例" tabindex="-1"><a class="header-anchor" href="#简单的-svg-实例" aria-hidden="true">#</a> 简单的 SVG 实例</h2>
<p>SVG 文件推荐使用 <strong>.svg</strong>（全部小写）作为此类文件的扩展名。</p>
<p>一个简单的 SVG 图形例子：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.1<span class="token punctuation">"</span></span>
  <span class="token attr-name">baseProfile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>115<span class="token punctuation">"</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16<span class="token punctuation">"</span></span> <span class="token attr-name">text-anchor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bornforthis SVG TEST<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/svg/02/02.html" target="_blank">尝试一下</a></button></p>
<p>显示结果如下：</p>
<p><img src="@source/column/svg/02.assets/image-20221101215152085.png" alt="image-20221101215152085"></p>
<p><strong>SVG 代码解析：</strong></p>
<p>SVG 代码以 <code v-pre>&lt;svg&gt;</code> 元素开始，包括开启标签 <code v-pre>&lt;svg&gt;</code> 和关闭标签 <code v-pre>&lt;/svg&gt;</code> 。这是根元素。<code v-pre>width</code> 和 <code v-pre>height</code> 属性可设置此 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。</p>
<p>SVG 的 <code v-pre>&lt;rect&gt;</code> 用来创建一个矩形，通过 fill 把背景颜色设为黄色。</p>
<p>SVG 的 <code v-pre>&lt;circle&gt;</code> 用来创建一个圆。<code v-pre>cx</code> 和 <code v-pre>cy</code> 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 <code v-pre>(0, 0)</code>，r 属性定义圆的半径。 一个半径 <code v-pre>80px</code> 的绿色圆圈 <code v-pre>&lt;circle&gt;</code> 绘制在红色矩形的正中央 （向右偏移 <code v-pre>150px</code>，向下偏移 <code v-pre>115px</code> ）。</p>
<p><code v-pre>stroke</code> 和 <code v-pre> stroke-width</code> 属性控制如何显示形状的轮廓。我们把圆的轮廓设置为 <code v-pre>4px</code> 宽，红色边框。</p>
<p>fill 属性设置形状内的颜色。我们把填充颜色设置为红色。</p>
<p>关闭标签 <code v-pre>&lt;/svg&gt;</code> 的作用是关闭 SVG 元素和文档本身。</p>
<p>**注释：**所有的开启标签必须有关闭标签！</p>
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


