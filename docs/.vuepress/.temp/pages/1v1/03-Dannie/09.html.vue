<template><div><nav class="table-of-contents"><ul><li><router-link to="#_09-int-数字型「dannie」">09-int 数字型「Dannie」</router-link></li><li><router-link to="#_1-定义">1. 定义</router-link></li><li><router-link to="#_2-数字型运算特点">2. 数字型运算特点</router-link><ul><li><router-link to="#_2-1-pycharm-编写">2.1 Pycharm 编写</router-link></li><li><router-link to="#_2-2-ipython-简写">2.2 Ipython 简写</router-link></li><li><router-link to="#_2-3-pycharm-编写代码并找规律">2.3 Pycharm 编写代码并找规律</router-link></li><li><router-link to="#_2-4-ipython-编写代码并找规律">2.4 ipython 编写代码并找规律</router-link></li><li><router-link to="#_2-5-结论">2.5 结论</router-link></li><li><router-link to="#_2-6-自行测试代码">2.6 自行测试代码</router-link></li></ul></li><li><router-link to="#_3-运算符">3. 运算符</router-link></li><li><router-link to="#_4-20220928-作业">4. 20220928 作业</router-link><ul><li><router-link to="#_4-1-dannie-答案">4.1 Dannie 答案</router-link></li></ul></li><li><router-link to="#_5-比较运算符">5. 比较运算符</router-link></li><li><router-link to="#_6-赋值运算符">6. 赋值运算符</router-link></li></ul></nav>
<h2 id="_09-int-数字型「dannie」" tabindex="-1"><a class="header-anchor" href="#_09-int-数字型「dannie」" aria-hidden="true">#</a> 09-int 数字型「Dannie」</h2>
<h2 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义" aria-hidden="true">#</a> 1. 定义</h2>
<ol>
<li>int：整数类型</li>
<li>float：浮点数类型</li>
</ol>
<h2 id="_2-数字型运算特点" tabindex="-1"><a class="header-anchor" href="#_2-数字型运算特点" aria-hidden="true">#</a> 2. 数字型运算特点</h2>
<h3 id="_2-1-pycharm-编写" tabindex="-1"><a class="header-anchor" href="#_2-1-pycharm-编写" aria-hidden="true">#</a> 2.1 Pycharm 编写</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">3</span>
r <span class="token operator">=</span> a <span class="token operator">+</span> b
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-ipython-简写" tabindex="-1"><a class="header-anchor" href="#_2-2-ipython-简写" aria-hidden="true">#</a> 2.2 Ipython 简写</h3>
<p>ipython 用于快速测试代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>没有对比就没有伤害！！！</strong></p>
<h3 id="_2-3-pycharm-编写代码并找规律" tabindex="-1"><a class="header-anchor" href="#_2-3-pycharm-编写代码并找规律" aria-hidden="true">#</a> 2.3 Pycharm 编写代码并找规律</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">3.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">9</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">9.0</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">2</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">2</span>
b <span class="token operator">=</span> <span class="token number">3.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span>

a <span class="token operator">=</span> <span class="token number">9</span>
b <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token number">3</span>
<span class="token number">4.0</span>
<span class="token number">6</span>
<span class="token number">6.0</span>
<span class="token number">6</span>
<span class="token number">6.0</span>
<span class="token number">3.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/1v1/03-Dannie/09.assets/image-20220928223619952.png" alt="image-20220928223619952" loading="lazy"></p>
<h3 id="_2-4-ipython-编写代码并找规律" tabindex="-1"><a class="header-anchor" href="#_2-4-ipython-编写代码并找规律" aria-hidden="true">#</a> 2.4 ipython 编写代码并找规律</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3</span>

In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2.0</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token number">2</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span> <span class="token operator">-</span> <span class="token number">2</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1.0</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">6</span>

In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3.0</span>
Out<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">6.0</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span>

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比性，不言而喻。</p>
<h3 id="_2-5-结论" tabindex="-1"><a class="header-anchor" href="#_2-5-结论" aria-hidden="true">#</a> 2.5 结论</h3>
<ul>
<li>如果其中有一个数据类型是浮点数，最后的结果就是浮点数</li>
<li>除法涉及精度问题，所以最后是浮点数。</li>
</ul>
<h3 id="_2-6-自行测试代码" tabindex="-1"><a class="header-anchor" href="#_2-6-自行测试代码" aria-hidden="true">#</a> 2.6 自行测试代码</h3>
<img src="@source/1v1/03-Dannie/09.assets/image-20220928224439710.png" alt="image-20220928224439710" style="zoom:33%;" />
<h2 id="_3-运算符" tabindex="-1"><a class="header-anchor" href="#_3-运算符" aria-hidden="true">#</a> 3. 运算符</h2>
<p><img src="@source/1v1/03-Dannie/09.assets/image-20220928224925725.png" alt="image-20220928224925725" loading="lazy"></p>
<h2 id="_4-20220928-作业" tabindex="-1"><a class="header-anchor" href="#_4-20220928-作业" aria-hidden="true">#</a> 4. 20220928 作业</h2>
<p>作业连接：<a href="https://bornforthis.cn/column/py/basequestion/special_yunsuanfu.html" target="_blank" rel="noopener noreferrer">https://bornforthis.cn/column/py/basequestion/special_yunsuanfu.html<ExternalLinkIcon/></a></p>
<h3 id="_4-1-dannie-答案" tabindex="-1"><a class="header-anchor" href="#_4-1-dannie-答案" aria-hidden="true">#</a> 4.1 Dannie 答案</h3>
<h4 id="_4-1-1-q1✅" tabindex="-1"><a class="header-anchor" href="#_4-1-1-q1✅" aria-hidden="true">#</a> 4.1.1 Q1✅</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a<span class="token operator">=</span><span class="token number">26</span>
b<span class="token operator">=</span>a<span class="token operator">//</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

c<span class="token operator">=</span>a<span class="token operator">%</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

d<span class="token operator">=</span>b<span class="token operator">+</span>c
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token number">26</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b <span class="token operator">=</span> a <span class="token operator">//</span> <span class="token number">10</span>

In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> c <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">10</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> d <span class="token operator">=</span> b <span class="token operator">+</span> c

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> d
Out<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-2-q2✅" tabindex="-1"><a class="header-anchor" href="#_4-1-2-q2✅" aria-hidden="true">#</a> 4.1.2 Q2✅</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a<span class="token operator">=</span><span class="token number">26</span>
b<span class="token operator">=</span>a<span class="token operator">//</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

c<span class="token operator">=</span>a<span class="token operator">%</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

d<span class="token operator">=</span>b<span class="token operator">+</span>c
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

e<span class="token operator">=</span>c<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span>b
<span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> e <span class="token operator">=</span> c <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> b

In <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> e
Out<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">62</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-3-q3✅" tabindex="-1"><a class="header-anchor" href="#_4-1-3-q3✅" aria-hidden="true">#</a> 4.1.3 Q3✅</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a<span class="token operator">=</span><span class="token number">826</span>
b<span class="token operator">=</span>a<span class="token operator">//</span><span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
c<span class="token operator">=</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
d<span class="token operator">=</span>a<span class="token operator">-</span><span class="token punctuation">(</span>b<span class="token operator">*</span><span class="token number">100</span><span class="token operator">+</span>c<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

e<span class="token operator">=</span>b<span class="token operator">*</span><span class="token number">100</span><span class="token operator">+</span>d<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span>c
<span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token number">826</span>

In <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b <span class="token operator">=</span> a <span class="token operator">//</span> <span class="token number">100</span>

In <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> c <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">//</span> <span class="token number">10</span>

In <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">:</span> e <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">%</span> <span class="token number">10</span>

In <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b <span class="token operator">+</span> c <span class="token operator">+</span> e
Out<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">16</span>

In <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">:</span> e <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> c <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> b
Out<span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">628</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-比较运算符" tabindex="-1"><a class="header-anchor" href="#_5-比较运算符" aria-hidden="true">#</a> 5. 比较运算符</h2>
<p><img src="@source/1v1/03-Dannie/09.assets/image-20220929223410393.png" alt="image-20220929223410393" loading="lazy"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">>=</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">>=</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">>=</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_6-赋值运算符" aria-hidden="true">#</a> 6. 赋值运算符</h2>
<p><img src="@source/1v1/03-Dannie/09.assets/image-20220929223919130.png" alt="image-20220929223919130" loading="lazy"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">10</span>

In <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a
Out<span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">11</span>

In <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">+=</span> <span class="token number">10</span> <span class="token comment"># a = a + 10</span>

In <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a
Out<span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
</div></template>


