<template><div><nav class="table-of-contents"><ul><li><router-link to="#_08-初识数据类型「dannie」">08-初识数据类型「Dannie」</router-link></li><li><router-link to="#_1-python-有哪些数据类型">1. Python 有哪些数据类型</router-link></li><li><router-link to="#_2-type-检测数据类型">2. type() 检测数据类型</router-link><ul><li><router-link to="#_2-1-int">2.1 int</router-link></li><li><router-link to="#_2-2-float">2.2 float</router-link></li></ul></li><li><router-link to="#_3-各个数据类型的特点">3. 各个数据类型的特点</router-link><ul><li><router-link to="#_3-1-字符串「str」">3.1 字符串「str」</router-link></li><li><router-link to="#_3-2-列表「list」">3.2 列表「list」</router-link></li><li><router-link to="#_3-3-元组「tuple」">3.3 元组「tuple」</router-link></li><li><router-link to="#_3-4-字典「dict」">3.4 字典「dict」</router-link></li><li><router-link to="#_3-5-集合「set」">3.5 集合「set」</router-link></li><li><router-link to="#_3-6-布尔型「bool」">3.6 布尔型「bool」</router-link></li></ul></li><li><router-link to="#_4-练习">4. 练习</router-link><ul><li><router-link to="#_4-1-提取出字典的-key">4.1 提取出字典的 key</router-link></li><li><router-link to="#_4-2-把列表中重复的人名去掉吧">4.2 把列表中重复的人名去掉吧</router-link></li><li><router-link to="#_4-3-创建一个字典">4.3 创建一个字典</router-link></li><li><router-link to="#_4-4-把如下表格创建成字典">4.4 把如下表格创建成字典</router-link></li><li><router-link to="#_4-5-找出下面的错误">4.5 找出下面的错误</router-link></li></ul></li></ul></nav>
<h2 id="_08-初识数据类型「dannie」" tabindex="-1"><a class="header-anchor" href="#_08-初识数据类型「dannie」" aria-hidden="true">#</a> 08-初识数据类型「Dannie」</h2>
<h2 id="_1-python-有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#_1-python-有哪些数据类型" aria-hidden="true">#</a> 1. Python 有哪些数据类型</h2>
<p><img src="@source/1v1/03-Dannie/08.assets/image-20220920221016968.png" alt="image-20220920221016968" loading="lazy"></p>
<h2 id="_2-type-检测数据类型" tabindex="-1"><a class="header-anchor" href="#_2-type-检测数据类型" aria-hidden="true">#</a> 2. type() 检测数据类型</h2>
<h3 id="_2-1-int" tabindex="-1"><a class="header-anchor" href="#_2-1-int" aria-hidden="true">#</a> 2.1 int</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-float" tabindex="-1"><a class="header-anchor" href="#_2-2-float" aria-hidden="true">#</a> 2.2 float</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">2.1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-各个数据类型的特点" tabindex="-1"><a class="header-anchor" href="#_3-各个数据类型的特点" aria-hidden="true">#</a> 3. 各个数据类型的特点</h2>
<h3 id="_3-1-字符串「str」" tabindex="-1"><a class="header-anchor" href="#_3-1-字符串「str」" aria-hidden="true">#</a> 3.1 字符串「str」</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"aiyuechuang"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

s_t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s_t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>aiyuechuang
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串特点</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
<li><strong>不可变性</strong> ：字符串在被创建出来之后，在 <strong>运行当中，字符串是不可以被改变的。</strong> 非要改变，只能是覆盖「也就是重新赋值」</li>
<li><strong>任意数据类型</strong> ：字符串中可以存放任意的数据类型，int、float、tuple……「你键盘能打入的所有字符，都可以存进去」</li>
</ol>
<h3 id="_3-2-列表「list」" tabindex="-1"><a class="header-anchor" href="#_3-2-列表「list」" aria-hidden="true">#</a> 3.2 列表「list」</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">11.1</span><span class="token punctuation">,</span> <span class="token string">"adede"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"AIYC"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>

lst_t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst_t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'list'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/1v1/03-Dannie/08.assets/image-20220920224647138.png" alt="image-20220920224647138" loading="lazy"></p>
<p><strong>列表的特点：</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
</ol>
<p><img src="@source/1v1/03-Dannie/08.assets/image-20220920224958955.png" alt="image-20220920224958955" loading="lazy"></p>
<ol start="2">
<li><strong>任意数据类型</strong> ：你放进去是什么类型，它还是原本的类型。</li>
<li><strong>可变性</strong> ：列表的内容是可以被修改的「update、修改、查询、、、」</li>
</ol>
<h3 id="_3-3-元组「tuple」" tabindex="-1"><a class="header-anchor" href="#_3-3-元组「tuple」" aria-hidden="true">#</a> 3.3 元组「tuple」</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'tuple'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>元组的特点：</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
<li><strong>任意数据类型</strong></li>
<li><strong>不可变性</strong></li>
</ol>
<h3 id="_3-4-字典「dict」" tabindex="-1"><a class="header-anchor" href="#_3-4-字典「dict」" aria-hidden="true">#</a> 3.4 字典「dict」</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Dannie"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"Game"</span><span class="token punctuation">:</span> <span class="token string">"Play"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">'Dannie'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'Game'</span><span class="token punctuation">:</span> <span class="token string">'Play'</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'dict'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字典的特点：</strong></p>
<p><code v-pre>{key1: value1, key2: value2, key3: value3}</code></p>
<ol>
<li>key：不可变「不可以使用可变的数据类型，<a href="#_3-4-%E5%AD%97%E5%85%B8%E3%80%8Cdict%E3%80%8D">当作字典的 key」</a>
<ol>
<li>list：可以做 key 吗？——不可以，因为，<a href="#_3-2-%E5%88%97%E8%A1%A8%E3%80%8Clist%E3%80%8D">列表可变</a></li>
<li>数字型可以做 key 吗？——可以，<a href="#_2-1-int">数字不可变</a></li>
<li>元组「tuple」可以做 key 吗？——可以，<a href="#_3-3-%E5%85%83%E7%BB%84%E3%80%8Ctuple%E3%80%8D">元组不可变</a></li>
<li>字符串「str」可以做 key 吗？——可以，<a href="#_3-1-%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%8Cstr%E3%80%8D">字符串不可变</a></li>
<li>集合「set」可以做 key 吗？——不可以，<a href="#_3-5-%E9%9B%86%E5%90%88%E3%80%8Cset%E3%80%8D">集合可变</a></li>
<li>布尔型「bool」可以做 key 吗？——可以，<a href="#_3-6-%E5%B8%83%E5%B0%94%E5%9E%8B%E3%80%8Cbool%E3%80%8D">bool 不可变</a></li>
</ol>
</li>
<li>value：任意数据类型</li>
<li>可变性</li>
</ol>
<h3 id="_3-5-集合「set」" tabindex="-1"><a class="header-anchor" href="#_3-5-集合「set」" aria-hidden="true">#</a> 3.5 集合「set」</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token string">"boo"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"asdwdw"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'asdwdw'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'aiyc'</span><span class="token punctuation">,</span> <span class="token string">'boo'</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'set'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>集合的特点：</strong></p>
<ol>
<li>集合是没有成对的键对值「key:value」，每一个元素都是 value</li>
<li>确定性：每一个值都是确定的
<ol>
<li>集合可以放列表吗？「列表可以做 value 吗？」——不可以，列表可变，所以它不确定</li>
<li>字典、集合、列表，都不能做集合的 value</li>
</ol>
</li>
<li>互异性：不能相同，相同的会去掉</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>无序性</li>
</ol>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>把列表强制转换成集合</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">]</span>
s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/1v1/03-Dannie/08.assets/image-20220927225002925.png" alt="image-20220927225002925" loading="lazy"></p>
<p><strong>其他强制转换的特点要自行测试。</strong></p>
<p>有时候巧妙的运用，可以实现数据去重。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token string">"Jaden"</span><span class="token punctuation">,</span> <span class="token string">"Austin"</span><span class="token punctuation">,</span> <span class="token string">"Dannie"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">'Dannie'</span><span class="token punctuation">,</span> <span class="token string">'Jaden'</span><span class="token punctuation">,</span> <span class="token string">'aiyc'</span><span class="token punctuation">,</span> <span class="token string">'Austin'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-布尔型「bool」" tabindex="-1"><a class="header-anchor" href="#_3-6-布尔型「bool」" aria-hidden="true">#</a> 3.6 布尔型「bool」</h3>
<img src="@source/1v1/03-Dannie/08.assets/image-20220927230058247.png" alt="image-20220927230058247" style="zoom:25%;" />
<img src="@source/1v1/03-Dannie/08.assets/image-20220927230109103.png" alt="image-20220927230109103" style="zoom:25%;" />
<h2 id="_4-练习" tabindex="-1"><a class="header-anchor" href="#_4-练习" aria-hidden="true">#</a> 4. 练习</h2>
<h3 id="_4-1-提取出字典的-key" tabindex="-1"><a class="header-anchor" href="#_4-1-提取出字典的-key" aria-hidden="true">#</a> 4.1 提取出字典的 key</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Alex"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"Dream"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token string">"Dream"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Dannie 的答案：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Curtis"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"Dream"</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">}</span>
s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-把列表中重复的人名去掉吧" tabindex="-1"><a class="header-anchor" href="#_4-2-把列表中重复的人名去掉吧" aria-hidden="true">#</a> 4.2 把列表中重复的人名去掉吧</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Aiyc"</span><span class="token punctuation">,</span> <span class="token string">"Dannie"</span><span class="token punctuation">,</span> <span class="token string">"Aiyc"</span><span class="token punctuation">,</span> <span class="token string">"Alex"</span><span class="token punctuation">,</span> <span class="token string">"Alex"</span><span class="token punctuation">,</span> <span class="token string">"Jaden"</span><span class="token punctuation">,</span> <span class="token string">"Cava"</span><span class="token punctuation">,</span> <span class="token string">"WilliamQX"</span><span class="token punctuation">,</span> <span class="token string">"Cody"</span><span class="token punctuation">,</span> <span class="token string">"Cody"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-pythn line-numbers-mode" data-ext="pythn"><pre v-pre class="language-pythn"><code>{'Cava', 'Jaden', 'Cody', 'Dannie', 'WilliamQX', 'Aiyc', 'Alex'}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Dannie 的答案：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Aiyc"</span><span class="token punctuation">,</span> <span class="token string">"Dannie"</span><span class="token punctuation">,</span> <span class="token string">"Aiyc"</span><span class="token punctuation">,</span> <span class="token string">"Alex"</span><span class="token punctuation">,</span> <span class="token string">"Alex"</span><span class="token punctuation">,</span> <span class="token string">"Jaden"</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-创建一个字典" tabindex="-1"><a class="header-anchor" href="#_4-3-创建一个字典" aria-hidden="true">#</a> 4.3 创建一个字典</h3>
<table>
<thead>
<tr>
<th>姓名</th>
<th>年龄</th>
<th>学历</th>
<th>兴趣爱好</th>
</tr>
</thead>
<tbody>
<tr>
<td>马冬梅</td>
<td>18</td>
<td>本科</td>
<td>Python</td>
</tr>
</tbody>
</table>
<p><strong>Dannie 的答案：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"姓名"</span><span class="token punctuation">:</span> <span class="token string">"马冬梅"</span><span class="token punctuation">,</span> <span class="token string">"年龄"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"学历"</span><span class="token punctuation">:</span> <span class="token string">"本科"</span><span class="token punctuation">,</span> <span class="token string">"兴趣爱好"</span><span class="token punctuation">:</span> <span class="token string">"Python"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-把如下表格创建成字典" tabindex="-1"><a class="header-anchor" href="#_4-4-把如下表格创建成字典" aria-hidden="true">#</a> 4.4 把如下表格创建成字典</h3>
<p>PS：把对应的关键词调整好</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>关键词</th>
</tr>
</thead>
<tbody>
<tr>
<td>字典</td>
<td>int</td>
</tr>
<tr>
<td>数字</td>
<td>float</td>
</tr>
<tr>
<td>小数</td>
<td>list</td>
</tr>
<tr>
<td>元组</td>
<td>tuple</td>
</tr>
<tr>
<td>列表</td>
<td>str</td>
</tr>
<tr>
<td>布尔型</td>
<td>dict</td>
</tr>
<tr>
<td>字符串</td>
<td>bool</td>
</tr>
<tr>
<td>集合</td>
<td>set</td>
</tr>
</tbody>
</table>
<p><strong>Dannie 的答案：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"字典"</span><span class="token punctuation">:</span> <span class="token string">"dict"</span><span class="token punctuation">,</span> <span class="token string">"数字"</span><span class="token punctuation">:</span> <span class="token string">"int"</span><span class="token punctuation">,</span> <span class="token string">"小数"</span><span class="token punctuation">:</span> <span class="token string">"float"</span><span class="token punctuation">,</span> <span class="token string">"元组"</span><span class="token punctuation">:</span> <span class="token string">"tuple"</span><span class="token punctuation">,</span> <span class="token string">"列表"</span><span class="token punctuation">:</span> <span class="token string">"lst"</span><span class="token punctuation">,</span> <span class="token string">"布尔型"</span><span class="token punctuation">:</span> <span class="token string">"bool"</span><span class="token punctuation">,</span> <span class="token string">"字符串"</span><span class="token punctuation">:</span> <span class="token string">"str"</span><span class="token punctuation">,</span> <span class="token string">"集合"</span><span class="token punctuation">:</span> <span class="token string">"set"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"字典"</span><span class="token punctuation">:</span> <span class="token string">"dict"</span><span class="token punctuation">,</span>
     <span class="token string">"数字"</span><span class="token punctuation">:</span> <span class="token string">"int"</span><span class="token punctuation">,</span>
     <span class="token string">"小数"</span><span class="token punctuation">:</span> <span class="token string">"float"</span><span class="token punctuation">,</span>
     <span class="token string">"元组"</span><span class="token punctuation">:</span> <span class="token string">"tuple"</span><span class="token punctuation">,</span>
     <span class="token string">"列表"</span><span class="token punctuation">:</span> <span class="token string">"lst"</span><span class="token punctuation">,</span>
     <span class="token string">"布尔型"</span><span class="token punctuation">:</span> <span class="token string">"bool"</span><span class="token punctuation">,</span>
     <span class="token string">"字符串"</span><span class="token punctuation">:</span> <span class="token string">"str"</span><span class="token punctuation">,</span>
     <span class="token string">"集合"</span><span class="token punctuation">:</span> <span class="token string">"set"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-找出下面的错误" tabindex="-1"><a class="header-anchor" href="#_4-5-找出下面的错误" aria-hidden="true">#</a> 4.5 找出下面的错误</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：括号没结束✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> aiyc"<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：aiyc 没有被引号引起来✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：4跟5之间没有逗号间隔✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"aiyc], ("</span>book<span class="token string">", "</span><span class="token number">12</span>"<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：元组里面不能够有列❌</p>
<p>Dannie 订正的答案：aiyc 里面的引号没有引结束✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> 'I am lilei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：i am lilei 没有被引号引起来作为 str，✅ 如果是作为集合 set 的话， 应该是使用括号，而不是使用引号。❌</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：列表不能成为集合里面的数值，列表不能成为集合里面的数值，因为是可变的。✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：【1，2，3】 ❌列表不能成为集合里面数值 ❌</p>
<p>Dannie 订正的答案：列表不能成为一个字典里面的 key❌✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：set 里面不能有 set✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：列表不能成为关键词 key✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"list"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"tuple"</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"str"</span><span class="token punctuation">:</span> <span class="token string">"aiyuechuang"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：这道题是对的 ✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>b <span class="token operator">=</span> true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：ture 应该是 Ture✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>b <span class="token operator">=</span> false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：false 应该是 False✅</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">"aiyc"</span>
d <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Dannie 的答案：应该是 d={&quot;name&quot;: name, &quot;age&quot;: 18}❌</p>
</blockquote>
<p><strong>现在是判断，课后要把这些订正成正确答案。并提交给我。</strong></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
</div></template>


