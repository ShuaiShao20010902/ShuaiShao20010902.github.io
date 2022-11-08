import{_ as t}from"./gzh.b03adfd2.js";import{_ as e}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as i,e as u,r as l}from"./app.ec8dcd9c.js";const r={},d=u(`<p>你好，我是悦创。</p><p>接下来来编写 Python 中的进制转换，我们来一一编写。</p><h2 id="十六进制-转-十进制" tabindex="-1"><a class="header-anchor" href="#十六进制-转-十进制" aria-hidden="true">#</a> 十六进制 转 十进制</h2><p>使用 <code>int()</code> 函数 ，第一个参数是字符串 <code>&#39;0Xff&#39;</code> ，第二个参数是说明，这个字符串是几进制的数。转化的结果是一个十进制数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;0xf&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二进制-转-十进制" tabindex="-1"><a class="header-anchor" href="#二进制-转-十进制" aria-hidden="true">#</a> 二进制 转 十进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;10100111110&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1342</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八进制-转-十进制" tabindex="-1"><a class="header-anchor" href="#八进制-转-十进制" aria-hidden="true">#</a> 八进制 转 十进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实可以看到，不管 <strong>几进制数</strong> 转换成 <strong>十进制数</strong> ，都是用 <code>int()</code> 函数 。之后后面的 <strong>第二个参数</strong> 写清楚 <strong>前面字符串</strong> 是 <strong>几进制数就可以</strong> 。注意一定要合法。 比如 2 进制数就不能出现 2 这样的字符。</p><hr><h2 id="十进制-转-十六进制" tabindex="-1"><a class="header-anchor" href="#十进制-转-十六进制" aria-hidden="true">#</a> 十进制 转 十六进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token number">1033</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0x409&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二进制-转-十六进制" tabindex="-1"><a class="header-anchor" href="#二进制-转-十六进制" aria-hidden="true">#</a> 二进制 转 十六进制</h2><p>就是 <strong>二进制先转成 十进制</strong>， 再转成 <strong>十六进制</strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;101010&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0x2a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八进制-转-十六进制" tabindex="-1"><a class="header-anchor" href="#八进制-转-十六进制" aria-hidden="true">#</a> 八进制 转 十六进制</h2><p>就是 <strong>八进制先转成</strong> 十进制， 再转成 <strong>十六进制</strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0xf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十进制-转-二进制" tabindex="-1"><a class="header-anchor" href="#十进制-转-二进制" aria-hidden="true">#</a> 十进制 转 二进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0b1010&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十六进制-转-二进制" tabindex="-1"><a class="header-anchor" href="#十六进制-转-二进制" aria-hidden="true">#</a> 十六进制 转 二进制</h2><p><strong>十六进制-&gt;十进制-&gt;二进制</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;ff&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0b11111111&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八进制-到-二进制" tabindex="-1"><a class="header-anchor" href="#八进制-到-二进制" aria-hidden="true">#</a> 八进制 到 二进制</h2><p><strong>八进制先到十进制，再到二进制</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0b1111&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="二进制-到-八进制" tabindex="-1"><a class="header-anchor" href="#二进制-到-八进制" aria-hidden="true">#</a> 二进制 到 八进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">oct</span><span class="token punctuation">(</span><span class="token number">0b1010</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0o12&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十进制-到-八进制" tabindex="-1"><a class="header-anchor" href="#十进制-到-八进制" aria-hidden="true">#</a> 十进制 到 八进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">oct</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0o13&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十六进制-到-八进制" tabindex="-1"><a class="header-anchor" href="#十六进制-到-八进制" aria-hidden="true">#</a> 十六进制 到 八进制</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">oct</span><span class="token punctuation">(</span><span class="token number">0xF</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;0o17&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',36),k={class:"custom-container info"},h=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),v={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:e,alt:"",loading:"lazy"})],-1);function x(_,f){const a=l("ExternalLinkIcon");return o(),c("div",null,[d,n("div",k,[h,m,b,n("p",null,[s("方法一："),n("a",v,[s("QQ"),i(a)])]),g]),y])}const N=p(r,[["render",x],["__file","15.html.vue"]]);export{N as default};
