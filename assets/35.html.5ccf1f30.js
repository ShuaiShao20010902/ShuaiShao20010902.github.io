import{_ as s,a as t}from"./zsxq.01e272d6.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as n,b as a,d as l,e as p,r as c}from"./app.175adf91.js";const d={},u=p(`<p>Tkinter doesn&#39;t work, it throws an error.</p><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">%</span> pip3 install tk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="my-code" tabindex="-1"><a class="header-anchor" href="#my-code" aria-hidden="true">#</a> My code</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="the-error" tabindex="-1"><a class="header-anchor" href="#the-error" aria-hidden="true">#</a> The Error</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/arghadip/Library/Application Support/CodeRunner/Unsaved/Untitled.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">4</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk
  File <span class="token string">&quot;/usr/local/Cellar/python@3.9/3.9.5/Frameworks/Python.framework/Versions/3.9/lib/python3.9/tkinter/__init__.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">37</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> _tkinter <span class="token comment"># If this fails your Python may not be configured for Tk</span>
ModuleNotFoundError<span class="token punctuation">:</span> No module named <span class="token string">&#39;_tkinter&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or Python3 tkinter can be simply installed by,</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>brew install python<span class="token operator">-</span>tk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pip sometimes wont work successfully on my Mac, especially with the High Sierra OS version. Brew can be used to install all kinds of software packages in mac.</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',11),m={class:"custom-container info"},h=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),k=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),v=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),y={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"方法二：微信：Jiabcdefh",-1),b=n("p",null,[n("img",{src:s,alt:"",loading:"lazy"})],-1);function g(f,w){const e=c("ExternalLinkIcon");return i(),r("div",null,[u,n("div",m,[h,k,v,n("p",null,[a("方法一："),n("a",y,[a("QQ"),l(e)])]),_]),b])}const N=o(d,[["render",g],["__file","35.html.vue"]]);export{N as default};