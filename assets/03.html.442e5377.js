import{_ as e}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,a as n,b as s,d as t,e as l,r as u}from"./app.2585167e.js";const r={},d=n("p",null,"本题就是操作 Numpy 与 Pandas 读取文件，并对比速度： 数据集：",-1),k={href:"https://aiyc.lanzoux.com/iSU8ufj79af",target:"_blank",rel:"noopener noreferrer"},m={href:"https://aiyc.lanzoux.com/iy3upfxymba",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> time

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">&#39;./rating.txt&#39;</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
end_reading_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Numpy reading time: {}ms&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end_reading_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_table<span class="token punctuation">(</span><span class="token string">&#39;./rating.csv&#39;</span><span class="token punctuation">,</span> 
    names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;book_id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rating&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sep<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
end_reading_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Pandas reading time: {}ms&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end_reading_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Numpy reading time<span class="token punctuation">:</span> <span class="token number">27029</span><span class="token punctuation">.</span>64ms
Pandas reading time<span class="token punctuation">:</span> <span class="token number">1003</span><span class="token punctuation">.</span>31ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',3),v={class:"custom-container info"},b=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),g=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),h=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),f={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"方法二：微信：Jiabcdefh",-1),x=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function w(N,z){const a=u("ExternalLinkIcon");return i(),c("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[s("rating.txt："),n("a",k,[s("https://aiyc.lanzoux.com/iSU8ufj79af"),t(a)])])]),n("li",null,[n("p",null,[s("rating.csv："),n("a",m,[s("https://aiyc.lanzoux.com/iy3upfxymba"),t(a)])])])]),_,n("div",v,[b,g,h,n("p",null,[s("方法一："),n("a",f,[s("QQ"),t(a)])]),y]),x])}const Q=o(r,[["render",w],["__file","03.html.vue"]]);export{Q as default};