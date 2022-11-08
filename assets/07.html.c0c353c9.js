import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as r,a as n,b as a,w as t,d as s,e as o,r as i}from"./app.eb0ec828.js";const d="/assets/image-20220916220122226.91a46eef.png",u="/assets/image-20220916220307656.2adf40e7.png",k="/assets/image-20220916222929385.8f082b1d.png",v="/assets/image-20220920220240745.a07ec1f0.png",m={},h={class:"table-of-contents"},b=o(`<h2 id="_07-变量「下」「dannie」" tabindex="-1"><a class="header-anchor" href="#_07-变量「下」「dannie」" aria-hidden="true">#</a> 07-变量「下」「Dannie」</h2><h2 id="_1-同时给多个变量赋予不同的值" tabindex="-1"><a class="header-anchor" href="#_1-同时给多个变量赋予不同的值" aria-hidden="true">#</a> 1. 同时给多个变量赋予不同的值</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt="image-20220916220122226" loading="lazy"></p><h2 id="_2-代码练习1-交换果汁" tabindex="-1"><a class="header-anchor" href="#_2-代码练习1-交换果汁" aria-hidden="true">#</a> 2. 代码练习1：交换果汁</h2><p><strong>题目链接：</strong></p>',8),g={href:"https://bornforthis.cn/column/py/basequestion/special_variabl.html#_1-%E4%BA%A4%E6%8D%A2%E6%9E%9C%E6%B1%81",target:"_blank",rel:"noopener noreferrer"},y=o('<p><img src="'+u+`" alt="image-20220916220307656" loading="lazy"></p><h3 id="_2-1-dannie-编写的代码" tabindex="-1"><a class="header-anchor" href="#_2-1-dannie-编写的代码" aria-hidden="true">#</a> 2.1 Dannie 编写的代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&#39;Coke&#39;</span>
Jaden <span class="token operator">=</span> <span class="token string">&#39;Juice&#39;</span>
Austin<span class="token punctuation">,</span> Jaden<span class="token operator">=</span> <span class="token string">&#39;Juice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Coke&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Austin&#39;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Jaden&#39;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>评价：这个地方你是直接拿 value 来进行赋值，算不上是交换果汁。</strong></p><p>自行修正的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">&#39;Coke&#39;</span>
Jaden <span class="token operator">=</span> <span class="token string">&#39;Juice&#39;</span>
Austin<span class="token punctuation">,</span> Jaden <span class="token operator">=</span> Jaden<span class="token punctuation">,</span> Austin
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Austin&#39;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Jaden&#39;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-方法二-引入第三个变量" tabindex="-1"><a class="header-anchor" href="#_2-2-方法二-引入第三个变量" aria-hidden="true">#</a> 2.2 方法二：引入第三个变量</h3><p><img src="`+k+`" alt="image-20220916222929385" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Austin<span class="token operator">=</span><span class="token string">&#39;Coke&#39;</span>
Jaden<span class="token operator">=</span><span class="token string">&#39;Juice&#39;</span>
Dannie<span class="token operator">=</span> Austin
Austin<span class="token operator">=</span> Jaden
Jaden<span class="token operator">=</span> Dannie
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Austin&#39;</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Jaden&#39;</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两种方法思路：</strong></p><p>方法一： 联想现实生活，现实生活中你会如何解决？</p><blockquote><p>现实生活中，我想你会引入一个空杯子来操作，那你会如何操作？思考后再思考代码中如何实现？</p></blockquote><p>方法二： Python 多个变量赋予不同值。 a, b, c = 1, 2, 3</p><h2 id="_3-代码练习2-变量的创建并输出" tabindex="-1"><a class="header-anchor" href="#_3-代码练习2-变量的创建并输出" aria-hidden="true">#</a> 3. 代码练习2：变量的创建并输出</h2><p><strong>题目链接：</strong></p>`,15),_={href:"https://bornforthis.cn/column/py/basequestion/special_variabl.html#_2-%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E5%B9%B6%E8%BE%93%E5%87%BA",target:"_blank",rel:"noopener noreferrer"},w=o(`<h3 id="_3-1-dannie-编写的代码" tabindex="-1"><a class="header-anchor" href="#_3-1-dannie-编写的代码" aria-hidden="true">#</a> 3.1 Dannie 编写的代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;Austin&#39;</span>
b <span class="token operator">=</span> <span class="token string">&#39;Jaden&#39;</span>
c <span class="token operator">=</span> <span class="token string">&#39;Alex&#39;</span>
d <span class="token operator">=</span> <span class="token string">&#39;Cava&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;$&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-优化后的代码" tabindex="-1"><a class="header-anchor" href="#_3-2-优化后的代码" aria-hidden="true">#</a> 3.2 优化后的代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;Austin&#39;</span>
b <span class="token operator">=</span> <span class="token string">&#39;Jaden&#39;</span>
c <span class="token operator">=</span> <span class="token string">&#39;Alex&#39;</span>
d <span class="token operator">=</span> <span class="token string">&#39;Cava&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-变量的命名规则" tabindex="-1"><a class="header-anchor" href="#_4-变量的命名规则" aria-hidden="true">#</a> 4. 变量的命名规则</h2><h3 id="_4-1-变量区分大小写" tabindex="-1"><a class="header-anchor" href="#_4-1-变量区分大小写" aria-hidden="true">#</a> 4.1 变量区分大小写</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A <span class="token operator">=</span> <span class="token string">&quot;Lilei&quot;</span>
a <span class="token operator">=</span> <span class="token string">&quot;hanmeimei&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hanmiemi
Lilei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">解析</p><p>如果，不区分大小写的话，那最后的结果应该是，都是输出：hanmeimei。由上面的结果可知 Python 的变量是区分大小写的。</p></div><h3 id="_4-2-系统关键词不能做变量" tabindex="-1"><a class="header-anchor" href="#_4-2-系统关键词不能做变量" aria-hidden="true">#</a> 4.2 系统关键词不能做变量</h3><p>用如下命令获取系统关键词：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">help</span><span class="token punctuation">(</span><span class="token string">&quot;keywords&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Here <span class="token keyword">is</span> a <span class="token builtin">list</span> of the Python keywords<span class="token punctuation">.</span>  Enter <span class="token builtin">any</span> keyword to get more <span class="token builtin">help</span><span class="token punctuation">.</span>

<span class="token boolean">False</span>               <span class="token keyword">break</span>               <span class="token keyword">for</span>                 <span class="token keyword">not</span>
<span class="token boolean">None</span>                <span class="token keyword">class</span>               <span class="token class-name">from</span>                <span class="token keyword">or</span>
<span class="token boolean">True</span>                <span class="token keyword">continue</span>            <span class="token keyword">global</span>              <span class="token keyword">pass</span>
__peg_parser__      <span class="token keyword">def</span>                 <span class="token keyword">if</span>                  <span class="token keyword">raise</span>
<span class="token keyword">and</span>                 <span class="token keyword">del</span>                 <span class="token keyword">import</span>              <span class="token keyword">return</span>
<span class="token keyword">as</span>                  <span class="token keyword">elif</span>                <span class="token keyword">in</span>                  <span class="token keyword">try</span>
<span class="token keyword">assert</span>              <span class="token keyword">else</span>                <span class="token keyword">is</span>                  <span class="token keyword">while</span>
<span class="token keyword">async</span>               <span class="token keyword">except</span>              <span class="token keyword">lambda</span>              <span class="token keyword">with</span>
<span class="token keyword">await</span>               <span class="token keyword">finally</span>             <span class="token keyword">nonlocal</span>            <span class="token keyword">yield</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统/Python 不知道如何区分我们的关键词还是变量。</p><p>如果说，我们非要”用“关键词来做变量的话，就可以使用 <strong>区分大小写</strong> 的原理。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>AS <span class="token operator">=</span> <span class="token string">&quot;aa&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>变量名的命名规则</strong>：</p><ul><li><p>大小写英文、数字和 <code>_</code> 的结合，且不能用数字开头；</p></li><li><p>系统关键词不能做变量名使用；</p></li><li><p>获取关键字列表：<code>help(”keywords’)</code></p></li><li><p>Python 中的变量名区分大小写。</p></li><li><p>变量名不能包含空格，但可使用下划线来分隔其中的单词。</p></li><li><p><strong>不要使用 python 的内置函数名称做变量名。</strong></p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span> <span class="token operator">=</span> <span class="token string">&quot;aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/MacBookPro16-Code/PythonCoder/StudentCoder/08Dannine/Lesson01/lesson02.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">8</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span>
TypeError<span class="token punctuation">:</span> <span class="token string">&#39;str&#39;</span> <span class="token builtin">object</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token builtin">callable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt="image-20220920220240745" loading="lazy"></p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>',23),f={class:"custom-container info"},x=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),A=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),E=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),q={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,"方法二：微信：Jiabcdefh",-1);function J(C,D){const e=i("router-link"),p=i("ExternalLinkIcon");return c(),r("div",null,[n("nav",h,[n("ul",null,[n("li",null,[a(e,{to:"#_07-变量「下」「dannie」"},{default:t(()=>[s("07-变量「下」「Dannie」")]),_:1})]),n("li",null,[a(e,{to:"#_1-同时给多个变量赋予不同的值"},{default:t(()=>[s("1. 同时给多个变量赋予不同的值")]),_:1})]),n("li",null,[a(e,{to:"#_2-代码练习1-交换果汁"},{default:t(()=>[s("2. 代码练习1：交换果汁")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_2-1-dannie-编写的代码"},{default:t(()=>[s("2.1 Dannie 编写的代码")]),_:1})]),n("li",null,[a(e,{to:"#_2-2-方法二-引入第三个变量"},{default:t(()=>[s("2.2 方法二：引入第三个变量")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-代码练习2-变量的创建并输出"},{default:t(()=>[s("3. 代码练习2：变量的创建并输出")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_3-1-dannie-编写的代码"},{default:t(()=>[s("3.1 Dannie 编写的代码")]),_:1})]),n("li",null,[a(e,{to:"#_3-2-优化后的代码"},{default:t(()=>[s("3.2 优化后的代码")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-变量的命名规则"},{default:t(()=>[s("4. 变量的命名规则")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_4-1-变量区分大小写"},{default:t(()=>[s("4.1 变量区分大小写")]),_:1})]),n("li",null,[a(e,{to:"#_4-2-系统关键词不能做变量"},{default:t(()=>[s("4.2 系统关键词不能做变量")]),_:1})])])])])]),b,n("p",null,[n("a",g,[s("https://bornforthis.cn/column/py/basequestion/special_variabl.html#_1-%E4%BA%A4%E6%8D%A2%E6%9E%9C%E6%B1%81"),a(p)])]),y,n("p",null,[n("a",_,[s("https://bornforthis.cn/column/py/basequestion/special_variabl.html#_2-%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E5%B9%B6%E8%BE%93%E5%87%BA"),a(p)])]),w,n("div",f,[x,A,E,n("p",null,[s("方法一："),n("a",q,[s("QQ"),a(p)])]),B])])}const I=l(m,[["render",J],["__file","07.html.vue"]]);export{I as default};