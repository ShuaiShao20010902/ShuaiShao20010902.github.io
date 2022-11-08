<template><div><h2 id="列表和元组的对比" tabindex="-1"><a class="header-anchor" href="#列表和元组的对比" aria-hidden="true">#</a> 列表和元组的对比</h2>
<p><img src="@source/1v1/03-Dannie/12.assets/image-20221027213954509.png" alt="image-20221027213954509" loading="lazy"></p>
<h2 id="元组数据提取" tabindex="-1"><a class="header-anchor" href="#元组数据提取" aria-hidden="true">#</a> 元组数据提取</h2>
<h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h2>
<p><img src="@source/1v1/03-Dannie/12.assets/image-20221027214729922.png" alt="image-20221027214729922" loading="lazy"></p>
<h2 id="特殊" tabindex="-1"><a class="header-anchor" href="#特殊" aria-hidden="true">#</a> 特殊</h2>
<p>元组只有一个元素的时：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'tuple'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="对元组进行排序" tabindex="-1"><a class="header-anchor" href="#对元组进行排序" aria-hidden="true">#</a> 对元组进行排序</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>tup<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1515</span><span class="token punctuation">,</span><span class="token number">4545</span><span class="token punctuation">,</span><span class="token number">4545</span><span class="token punctuation">,</span><span class="token number">454</span><span class="token punctuation">,</span><span class="token number">7874877</span><span class="token punctuation">,</span><span class="token number">88485</span><span class="token punctuation">,</span><span class="token number">44564</span><span class="token punctuation">)</span>

tup_new<span class="token operator">=</span><span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token builtin">sorted</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>tup_new<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：<code v-pre>(454, 1515, 4545, 4545, 44564, 88485, 7874877)</code></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
</div></template>


