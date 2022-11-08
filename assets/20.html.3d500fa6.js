import{_ as o}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as e,b as n,d as a,e as r,r as d}from"./app.7a4c2724.js";const c={},u=e("p",null,"你好，我是悦创。",-1),m={href:"https://bornforthis.cn/posts/19.html",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>有时您需要在代码中存储敏感信息，例如密码或 API 密钥，而在 Python 中最简洁的方法是使用 os 和 dotenv 模块。</p><p>为此，您需要安装 dotenv 模块，而 os 模块是标准 Python 模块，无需安装。</p><p>在命令行中，输入：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install python<span class="token operator">-</span>dotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者对于 Python 3</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip3 install python<span class="token operator">-</span>dotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设 <code>.env</code> 文件的内容是：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>API_KEY<span class="token operator">=</span><span class="token string">&quot;abcd123&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个好的做法是在您的项目中包含一个 <code>.env</code> 文件，其中包含您正在使用的每个秘密变量的示例。该文件的内容如下所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>API_KEY<span class="token operator">=</span><span class="token string">&quot;abcd123&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要将其加载到您的 python 文件中，您应该：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> dotenv <span class="token keyword">import</span> load_dotenv
load_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span>
API_KEY <span class="token operator">=</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&quot;API_KEY&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good！现在，您正在正确地隐藏数据！</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+o+'" alt="" loading="lazy"></p></details>',15),v={class:"custom-container info"},_=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),y=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),g={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"方法二：微信：Jiabcdefh",-1),f=e("p",null,[e("img",{src:t,alt:"",loading:"lazy"})],-1),x={href:"https://medium.com/@alexbebereche/how-to-hide-you-api-key-with-python-5cc63d2a6c45",target:"_blank",rel:"noopener noreferrer"};function I(P,q){const s=d("ExternalLinkIcon");return i(),l("div",null,[u,e("p",null,[n("博客首发："),e("a",m,[n("https://bornforthis.cn/posts/19.html"),a(s)])]),h,e("div",v,[_,y,b,e("p",null,[n("方法一："),e("a",g,[n("QQ"),a(s)])]),k]),f,e("p",null,[e("a",x,[n("https://medium.com/@alexbebereche/how-to-hide-you-api-key-with-python-5cc63d2a6c45"),a(s)])])])}const N=p(c,[["render",I],["__file","20.html.vue"]]);export{N as default};