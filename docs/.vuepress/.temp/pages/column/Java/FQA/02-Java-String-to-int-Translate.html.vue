<template><div><h2 id="一、字符串转数字" tabindex="-1"><a class="header-anchor" href="#一、字符串转数字" aria-hidden="true">#</a> 一、字符串转数字</h2>
<ol>
<li>通过基本类型对应的包装类则可以实现把字符串转换成基本类型。Java 几个包装类都提供了一个 <code v-pre>parseXxx(String str)</code> 静态方法用于将字符串转换成基本类型。（<strong>注意：如果字符串不是数值型字符串，转换将导致一个运行时错误。</strong>）</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>

<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">parseByte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> t <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">parseShort</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> bo <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">parseBoolean</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<code v-pre>i = Integer.valueOf(s).intValue();</code></p>
<p>**总结：**方法 1 直接使用静态方法，不会产生多余的对象，但会抛出异常。方法 2，<code v-pre>Integer.valueOf(s)</code> 相当于 <code v-pre>new Integer(Integer.parseInt(s))</code>，也会抛异常，但会多产生一个对象。</p>
<h2 id="待整理" tabindex="-1"><a class="header-anchor" href="#待整理" aria-hidden="true">#</a> 待整理！</h2>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
<p><a href="https://www.runoob.com/w3cnote/java-string-and-int-convert.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/w3cnote/java-string-and-int-convert.html<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/allenchan3721/article/details/71437394" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/allenchan3721/article/details/71437394<ExternalLinkIcon/></a></p>
</div></template>


