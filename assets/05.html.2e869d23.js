import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,d as s,b as l,e as i,r}from"./app.6363fd99.js";const u={},d=i(`<p>要读取本地 html 内容，请使用 <code>lxml.html</code> 和 <code>open()</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> html
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    text <span class="token operator">=</span> html<span class="token punctuation">.</span>fromstring<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要在浏览器中打开，我将使用 <code>webbrowser</code> 模块，并在本地路径之前使用 <code>file://</code> ：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> webbrowser
webbrowser<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file://test.html&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>尝试使用 <strong>subprocess</strong> 命令运行程序方法，因为您可以通过键入“chrome path/to/htmlfile.html”使用命令行打开 HTML 文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> subprocess

<span class="token comment"># in case chrome browser</span>
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;path/to/htmlfile.html&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',8),m={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),h=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),_=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),v={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"方法二：微信：Jiabcdefh",-1),g=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function f(y,w){const a=r("ExternalLinkIcon");return p(),c("div",null,[d,n("div",m,[k,h,_,n("p",null,[s("方法一："),n("a",v,[s("QQ"),l(a)])]),b]),g])}const N=o(u,[["render",f],["__file","05.html.vue"]]);export{N as default};