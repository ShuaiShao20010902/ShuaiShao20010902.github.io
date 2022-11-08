<template><div><div style="text-align:center">
<h2 id="各个数据值离平均值平均有多远" tabindex="-1"><a class="header-anchor" href="#各个数据值离平均值平均有多远" aria-hidden="true">#</a> 各个数据值离平均值平均有多远</h2>
</div>
<h2 id="怎样计算" tabindex="-1"><a class="header-anchor" href="#怎样计算" aria-hidden="true">#</a> 怎样计算</h2>
<p>先求数据的平均值……接着求距离……最后求距离的平均！</p>
<p>三部曲：</p>
<ul>
<li>一、求所有数据值的<a href="https://www.shuxuele.com/mean.html" target="_blank" rel="noopener noreferrer">平均值<ExternalLinkIcon/></a></li>
<li>二、求每个数据与平均值的距离（用数据值减去平均值，不理正负号）</li>
<li>三、求<strong>这些距离的平均</strong></li>
</ul>
<p>像这样：</p>
<h2 id="例子-3、6、6、7、8、11、15、16-的-平均差" tabindex="-1"><a class="header-anchor" href="#例子-3、6、6、7、8、11、15、16-的-平均差" aria-hidden="true">#</a> 例子：3、6、6、7、8、11、15、16 的 平均差</h2>
<h3 id="一、求平均" tabindex="-1"><a class="header-anchor" href="#一、求平均" aria-hidden="true">#</a> 一、求平均：</h3>
<div style="text-align:center">
<p>平均=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mn>3</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>11</mn><mo>+</mo><mn>15</mn><mo>+</mo><mn>16</mn></mrow><mn>8</mn></mfrac><mo>=</mo><mfrac><mn>72</mn><mn>8</mn></mfrac><mo>=</mo><mn>9</mn></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{3 + 6 + 6 + 7 + 8 + 11 + 15 + 16}{8}=\frac{72}{8}=9</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">3</span><span class="mbin mtight">+</span><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">7</span><span class="mbin mtight">+</span><span class="mord mtight">8</span><span class="mbin mtight">+</span><span class="mord mtight">11</span><span class="mbin mtight">+</span><span class="mord mtight">15</span><span class="mbin mtight">+</span><span class="mord mtight">16</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">72</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">9</span></span></span></span></p>
</div>
<h3 id="二、求每个数据只与平均值的距离" tabindex="-1"><a class="header-anchor" href="#二、求每个数据只与平均值的距离" aria-hidden="true">#</a> 二、求每个数据只与平均值的距离：</h3>
<div style="text-align:center">
<img src="@source/column/data_analysis/math/01-mean-deviation.assets/image-20221009232139634.png" alt="image-20221009232139634" style="zoom: 50%;" />
</div>
<table>
<thead>
<tr>
<th>值</th>
<th>与 9 的距离</th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td>6</td>
</tr>
<tr>
<td>6</td>
<td>3</td>
</tr>
<tr>
<td>6</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>2</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
</tr>
<tr>
<td>11</td>
<td>2</td>
</tr>
<tr>
<td>15</td>
<td>6</td>
</tr>
<tr>
<td>16</td>
<td>7</td>
</tr>
</tbody>
</table>
<p>像这样：</p>
<div style="text-align:center">
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/mean-deviation.svg" alt="平均差" loading="lazy"></p>
<p><em>（没有正负号！）</em></p>
</div>
<h3 id="三、求这些距离的平均" tabindex="-1"><a class="header-anchor" href="#三、求这些距离的平均" aria-hidden="true">#</a> 三、求<strong>这些距离的平均</strong>：</h3>
<div style="text-align:center">
<p>平均差=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mn>6</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>7</mn></mrow><mn>8</mn></mfrac><mo>=</mo><mfrac><mn>30</mn><mn>8</mn></mfrac><mo>=</mo><mn>3.75</mn></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{6 + 3 + 3 + 2 + 1 + 2 + 6 + 7}{8}=\frac{30}{8}=3.75</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">3</span><span class="mbin mtight">+</span><span class="mord mtight">3</span><span class="mbin mtight">+</span><span class="mord mtight">2</span><span class="mbin mtight">+</span><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mord mtight">2</span><span class="mbin mtight">+</span><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">7</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">30</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">3.75</span></span></span></span></p>
</div>
<p>所以，<strong>平均值 = 9</strong>，<strong>平均差 = 3.75</strong></p>
<p><strong>平均差告诉我们，每个数据值平均离中心有多远。</strong></p>
<p><strong>在上面的例子里，数据值平均离中心 3.75 远。</strong></p>
<p>在这里，<strong>差</strong>就是<strong>距离</strong></p>
<h2 id="公式" tabindex="-1"><a class="header-anchor" href="#公式" aria-hidden="true">#</a> 公式</h2>
<p>公式是：</p>
<div style="text-align:center">
<p>平均差 = <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mo>∑</mo><mi mathvariant="normal">∣</mi><mi>x</mi><mo>−</mo><mi>μ</mi><mi mathvariant="normal">∣</mi></mrow><mi>N</mi></mfrac></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{\sum|x−μ|}{N}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7985em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0043em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.9236em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mop op-symbol small-op mtight" style="position:relative;top:0em;">∑</span><span class="mspace mtight" style="margin-right:0.1667em;"></span><span class="mord mtight">∣</span><span class="mord mathnormal mtight">x</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">μ</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></p>
</div>
<ul>
<li><strong>Σ</strong> 是 <a href="https://www.shuxuele.com/algebra/sigma-notation.html" target="_blank" rel="noopener noreferrer">总和符号<ExternalLinkIcon/></a>，意思是加起来</li>
<li>|| （垂直线）的意思是 <a href="https://www.shuxuele.com/numbers/absolute-value.html" target="_blank" rel="noopener noreferrer">绝对值<ExternalLinkIcon/></a>，就是不要正负号</li>
<li><strong>x</strong> 是每个数据值（例如 3 或 16）</li>
<li><strong>μ</strong> 是平均（在这例子里，<strong>μ = 9</strong>）</li>
<li><strong>N</strong> 是数据点的个数（在这例子里，<strong>N = 8</strong>）</li>
</ul>
<p>我们详细看看：</p>
<h2 id="绝对偏差" tabindex="-1"><a class="header-anchor" href="#绝对偏差" aria-hidden="true">#</a> 绝对偏差</h2>
<p>在公式里求的每个距离是叫<strong>绝对偏差</strong>，因为它是偏差的<a href="https://www.shuxuele.com/numbers/absolute-value.html" target="_blank" rel="noopener noreferrer">绝对值<ExternalLinkIcon/></a>（离平均值的距离）</p>
<div style="text-align:center">
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/absolute-deviation.svg" alt="绝对偏差" loading="lazy"></p>
</div>
<p>我们把 &quot;|&quot; 放在项的两变来代表 &quot;绝对值&quot;：</p>
<p><strong>|-3| = 3</strong></p>
<p>为每一个 <strong>x</strong>：</p>
<p><strong>绝对偏差 = |x - μ|</strong></p>
<p>在这个例子里，<strong>16</strong> 的 <strong>绝对偏差 = |x - μ| = |16 - 9| = |7| = 7</strong></p>
<p>现在把它们加起来……</p>
<h2 id="总和符号" tabindex="-1"><a class="header-anchor" href="#总和符号" aria-hidden="true">#</a> 总和符号</h2>
<p>&quot;加起来&quot; 的符号是 <strong>Σ</strong>（叫<a href="https://www.shuxuele.com/algebra/sigma-notation.html" target="_blank" rel="noopener noreferrer">总和符号<ExternalLinkIcon/></a>)，所以：</p>
<div style="text-align:center">
<p>绝对偏差的总和 = Σ|x - μ|</p>
</div>
<p>除以数据的个数 <strong>N</strong>，得到：</p>
<div style="text-align:center">
<p>平均差 =<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mo>∑</mo><mi mathvariant="normal">∣</mi><mi>x</mi><mo>−</mo><mi>μ</mi><mi mathvariant="normal">∣</mi></mrow><mi>N</mi></mfrac></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{\sum|x−μ|}{N}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7985em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0043em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.9236em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mop op-symbol small-op mtight" style="position:relative;top:0em;">∑</span><span class="mspace mtight" style="margin-right:0.1667em;"></span><span class="mord mtight">∣</span><span class="mord mathnormal mtight">x</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">μ</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></p>
</div>
<p>我们再用正确的符号做一次：</p>
<h2 id="例子-3、6、6、7、8、11、15、16-的-平均差-1" tabindex="-1"><a class="header-anchor" href="#例子-3、6、6、7、8、11、15、16-的-平均差-1" aria-hidden="true">#</a> 例子： 3、6、6、7、8、11、15、16 的 平均差</h2>
<h3 id="一、求平均-1" tabindex="-1"><a class="header-anchor" href="#一、求平均-1" aria-hidden="true">#</a> 一、求平均：</h3>
<div style="text-align:center">
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>11</mn><mo>+</mo><mn>15</mn><mo>+</mo><mn>16</mn></mrow><mn>8</mn></mfrac><mo>=</mo><mfrac><mn>72</mn><mn>8</mn></mfrac><mo>=</mo><mn>9</mn></mstyle></mrow><annotation encoding="application/x-tex">\hugeμ=\frac{3+6+6+7+8+11+15+16}{8}=\frac{72}{8}=9</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2962em;vertical-align:-0.4033em;"></span><span class="mord mathnormal sizing reset-size6 size10">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">3</span><span class="mbin mtight">+</span><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">6</span><span class="mbin mtight">+</span><span class="mord mtight">7</span><span class="mbin mtight">+</span><span class="mord mtight">8</span><span class="mbin mtight">+</span><span class="mord mtight">11</span><span class="mbin mtight">+</span><span class="mord mtight">15</span><span class="mbin mtight">+</span><span class="mord mtight">16</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">72</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">9</span></span></span></span></p>
</div>
<h3 id="二、求绝对偏差" tabindex="-1"><a class="header-anchor" href="#二、求绝对偏差" aria-hidden="true">#</a> 二、求绝对偏差：</h3>
<div style="text-align:center">
<img src="@source/column/data_analysis/math/01-mean-deviation.assets/image-20221010084338645.png" alt="image-20221010084338645" style="zoom:50%;" />
</div>
<h3 id="三、求平均差" tabindex="-1"><a class="header-anchor" href="#三、求平均差" aria-hidden="true">#</a> 三、求平均差：</h3>
<div style="text-align:center">
<p>平均差 = <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mo>∑</mo><mi mathvariant="normal">∣</mi><mi>x</mi><mo>−</mo><mi>μ</mi><mi mathvariant="normal">∣</mi></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>30</mn><mn>8</mn></mfrac><mo>=</mo><mn>3.75</mn></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{\sum|x-μ|}{N}=\frac{30}{8}=3.75</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7985em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0043em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.9236em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mop op-symbol small-op mtight" style="position:relative;top:0em;">∑</span><span class="mspace mtight" style="margin-right:0.1667em;"></span><span class="mord mtight">∣</span><span class="mord mathnormal mtight">x</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">μ</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">8</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">30</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">3.75</span></span></span></span></p>
</div>
<blockquote>
<p><em>注意：平均差有时也叫平均绝对偏差（英语 Mean Absolute Deviation (MAD)），因为它是绝对偏差的平均。</em></p>
</blockquote>
<h2 id="平均差的意思是什么" tabindex="-1"><a class="header-anchor" href="#平均差的意思是什么" aria-hidden="true">#</a> 平均差的意思是什么？</h2>
<p>平均差告诉我们，每个数据值平均离中心有多远。</p>
<p>以下是个例子（用 <a href="https://www.shuxuele.com/data/standard-deviation.html" target="_blank" rel="noopener noreferrer">标准差<ExternalLinkIcon/></a> 网页里的数据）：</p>
<h3 id="例子-你和你的朋友测量了你们的狗的身高-毫米" tabindex="-1"><a class="header-anchor" href="#例子-你和你的朋友测量了你们的狗的身高-毫米" aria-hidden="true">#</a> 例子：你和你的朋友测量了你们的狗的身高（毫米）：</h3>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/statistics-dogs-graph.gif" alt="狗统计图" loading="lazy"></p>
<p>身高（到肩膀）是：600mm、470mm、170mm、430mm 和 300mm。</p>
<h3 id="一、求平均-2" tabindex="-1"><a class="header-anchor" href="#一、求平均-2" aria-hidden="true">#</a> 一、求平均：</h3>
<div style="text-align:center">
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>600</mn><mo>+</mo><mn>470</mn><mo>+</mo><mn>170</mn><mo>+</mo><mn>430</mn><mo>+</mo><mn>300</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mfrac><mn>1970</mn><mn>5</mn></mfrac><mo>=</mo><mn>394</mn></mstyle></mrow><annotation encoding="application/x-tex">\hugeμ=\frac{600+470+170+430+300}{5}=\frac{1970}{5}=394</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2962em;vertical-align:-0.4033em;"></span><span class="mord mathnormal sizing reset-size6 size10">μ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">600</span><span class="mbin mtight">+</span><span class="mord mtight">470</span><span class="mbin mtight">+</span><span class="mord mtight">170</span><span class="mbin mtight">+</span><span class="mord mtight">430</span><span class="mbin mtight">+</span><span class="mord mtight">300</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">1970</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">394</span></span></span></span></p>
</div>
<h3 id="二、求绝对偏差-1" tabindex="-1"><a class="header-anchor" href="#二、求绝对偏差-1" aria-hidden="true">#</a> 二、求绝对偏差：</h3>
<div style="text-align:center">
<img src="@source/column/data_analysis/math/01-mean-deviation.assets/image-20221010085924952.png" alt="image-20221010085924952" style="zoom:50%;" />
</div>
<table>
<thead>
<tr>
<th>x</th>
<th>|x - μ|</th>
</tr>
</thead>
<tbody>
<tr>
<td>600</td>
<td>206</td>
</tr>
<tr>
<td>470</td>
<td>76</td>
</tr>
<tr>
<td>170</td>
<td>224</td>
</tr>
<tr>
<td>430</td>
<td>36</td>
</tr>
<tr>
<td>300</td>
<td>94</td>
</tr>
<tr>
<td></td>
<td>Σ|x - μ| = 636</td>
</tr>
</tbody>
</table>
<h3 id="三、求平均差-1" tabindex="-1"><a class="header-anchor" href="#三、求平均差-1" aria-hidden="true">#</a> 三、求平均差：</h3>
<p>平均差=<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathsize="2.074em"><mfrac><mrow><mo>∑</mo><mi mathvariant="normal">∣</mi><mi>x</mi><mo>−</mo><mi>μ</mi><mi mathvariant="normal">∣</mi></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>636</mn><mn>5</mn></mfrac><mo>=</mo><mn>127.2</mn></mstyle></mrow><annotation encoding="application/x-tex">\huge\frac{\sum|x-μ|}{N}=\frac{636}{5}=127.2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7985em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0043em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.9236em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mop op-symbol small-op mtight" style="position:relative;top:0em;">∑</span><span class="mspace mtight" style="margin-right:0.1667em;"></span><span class="mord mtight">∣</span><span class="mord mathnormal mtight">x</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">μ</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4607em;vertical-align:-0.7155em;"></span><span class="mord sizing reset-size6 size10"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight"><span class="mord mtight"><span class="mord mtight">636</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3366em;"></span><span class="mord sizing reset-size6 size10">127.2</span></span></span></span></p>
<p>所以，狗的身高<strong>与平均值的平均距离是 127.2 mm</strong>。</p>
<p>（可以和 <strong>147 mm</strong> 的<a href="https://www.shuxuele.com/data/standard-deviation.html" target="_blank" rel="noopener noreferrer">标准差<ExternalLinkIcon/></a>比较一下）</p>
<h2 id="检测" tabindex="-1"><a class="header-anchor" href="#检测" aria-hidden="true">#</a> 检测</h2>
<p>在平均值<strong>一边</strong>的偏差应该和<strong>另一边</strong>的偏差是相等的。</p>
<p>上面的例子：</p>
<h3 id="例子-3、6、6、7、8、11、15、16" tabindex="-1"><a class="header-anchor" href="#例子-3、6、6、7、8、11、15、16" aria-hidden="true">#</a> 例子：3、6、6、7、8、11、15、16</h3>
<p>偏差是：</p>
<div style="text-align:center">
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/mean-deviation-20221010101036100.svg" alt="平均差" loading="lazy"></p>
<p>6 + 3 + 3 + 2 + 1 = 2 + 6 + 7</p>
<p>15 = 15</p>
</div>
<p>同样：</p>
<h3 id="例子-狗" tabindex="-1"><a class="header-anchor" href="#例子-狗" aria-hidden="true">#</a> 例子：狗</h3>
<p>平均左边的偏差：224 + 94 = <strong>318</strong></p>
<p>平均右边的偏差：206 + 76 + 36 = <strong>318</strong></p>
<p>如果它们不相同……你便是做错了！</p>
<h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2>
<h3 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h3>
<p>Calculate the mean deviation for the numbers: 75, 83, 96, 100, 121 and 125</p>
<p>A. 14.33</p>
<p>B. 15</p>
<p>C. 15.33</p>
<p>D. 16</p>
<h4 id="q1-answer" tabindex="-1"><a class="header-anchor" href="#q1-answer" aria-hidden="true">#</a> Q1 Answer</h4>
<p><strong>Step 1</strong> Find the mean:</p>
<p>μ = (75 + 83 + 96 + 100 + 121 + 125) ÷ 6 = 600 ÷ 6 = 100</p>
<p><strong>Step 2</strong> Find the Absolute Deviations:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/e3b9af69c9090e4f5177796659130b1.svg" alt="[cached] 0.02598762512207 ms" loading="lazy"></p>
<p><strong>Step 3</strong> Find the Mean Deviation:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/b53955615c31ec62a4aaec98d455611.svg" alt="[cached] 0.0061988830566406 ms" loading="lazy"></p>
<h3 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h3>
<p>Ten friends scored the following marks in their end-of-year math exam: 23%, 37%, 45%, 49%, 56%, 63%, 63%, 70%, 72% and 82%</p>
<p>What was the mean deviation of their marks?</p>
<p>A. 14%</p>
<p>B. 15%</p>
<p>C. 16%</p>
<p>D. 17%</p>
<h4 id="q2-answer" tabindex="-1"><a class="header-anchor" href="#q2-answer" aria-hidden="true">#</a> Q2 Answer</h4>
<p><strong>Step 1</strong> Find the mean:</p>
<p>μ = (23 + 37 + 45 + 49 + 56 + 63 + 63 + 70 + 72 + 82) ÷ 10 = 560 ÷ 10 = 56%</p>
<p><strong>Step 2</strong> Find the Absolute Deviations:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/ca0f7327677905480eb796749535a61.svg" alt="[cached] 0.043869018554688 ms" loading="lazy"></p>
<p><strong>Step 3</strong> Find the Mean Deviation:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/2b1da78d23f8c2fa45005cfd1bd1741.svg" alt="[cached] 0.030040740966797 ms" loading="lazy"></p>
<h3 id="question-3" tabindex="-1"><a class="header-anchor" href="#question-3" aria-hidden="true">#</a> Question 3</h3>
<p>A booklet has 12 pages with the following numbers of words: 271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287 and 314</p>
<p>What is the mean deviation of the number of words per page?</p>
<p>A. 18.5</p>
<p>B. 19.33</p>
<p>C. 20</p>
<p>D. 20.17</p>
<h4 id="q3-answer" tabindex="-1"><a class="header-anchor" href="#q3-answer" aria-hidden="true">#</a> Q3 Answer</h4>
<p><strong>Step 1</strong> Find the mean:</p>
<p>μ = (271 + 354 + 296 + 301 + 333 + 326 + 285 + 298 + 327 + 316 + 287 + 314) ÷ 12
= 3,708 ÷ 12
= 309</p>
<p><strong>Step 2</strong> Find the Absolute Deviations:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/6d6c38de7991ec959100d72e0c29031.svg" alt="[cached] 0.045061111450195 ms" loading="lazy"></p>
<p><strong>Step 3</strong> Find the Mean Deviation:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/7b62c597cbc37118b59fc653c9dfdc1.svg" alt="[cached] 0.010013580322266 ms" loading="lazy"></p>
<h3 id="question-4" tabindex="-1"><a class="header-anchor" href="#question-4" aria-hidden="true">#</a> Question 4</h3>
<p>What is the mean deviation of the first 10 numbers of the Fibonacci sequence?</p>
<p>A. 8.8</p>
<p>B. 8.5</p>
<p>C. 8.42</p>
<p>D. 8.32</p>
<h4 id="q4-answer" tabindex="-1"><a class="header-anchor" href="#q4-answer" aria-hidden="true">#</a> Q4 Answer</h4>
<p>The first 10 numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34</p>
<p><strong>Step 1</strong> Find the mean:</p>
<p>μ = (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34) ÷ 10 = 88 ÷ 10 = 8.8</p>
<p><strong>Step 2</strong> Find the Absolute Deviations:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/8fb366ba99d9abd412ec917554aca11.svg" alt="[cached] 0.060796737670898 ms" loading="lazy"></p>
<p><strong>Step 3</strong> Find the Mean Deviation:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/78005233858f7b438f02208bce4e811.svg" alt="[cached] 0.016927719116211 ms" loading="lazy"></p>
<h3 id="question-5" tabindex="-1"><a class="header-anchor" href="#question-5" aria-hidden="true">#</a> Question 5</h3>
<p>The Lakers scored the following numbers of goals in their last twenty matches: 3, 0, 1, 5, 4, 3, 2, 6, 4, 2, 3, 3, 0, 7, 1, 1, 2, 3, 4, 6</p>
<p>Calculate the Mean Deviation.</p>
<p>A. 1.5</p>
<p>B. 2</p>
<p>C. 2.5</p>
<p>D. 3</p>
<h4 id="q5-answer" tabindex="-1"><a class="header-anchor" href="#q5-answer" aria-hidden="true">#</a> Q5 Answer</h4>
<p><strong>Method 1</strong></p>
<p><strong>Step 1</strong> Find the mean:</p>
<p>μ = (3 + 0 + 1 + 5 + 4 + 3 + 2 + 6 + 4 + 2 + 3 + 3 + 0 + 7 + 1 + 1 + 2 + 3 + 4 + 6) ÷ 20
= 60 ÷ 20
= 3</p>
<p><strong>Step 2</strong> Find the Absolute Deviations:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/e216c65a7dbfc6ade5e9a2a66da8ee1.svg" alt="[cached] 0.056028366088867 ms" loading="lazy"></p>
<p><strong>Step 3</strong> Find the Mean Deviation:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/328a4896378b19be392361747b9d2d1.svg" alt="[cached] 0.011920928955078 ms" loading="lazy"></p>
<p><strong>Method 2</strong>
This can be done much more neatly using tables, as follows:</p>
<p>First complete a frequency table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/cf91c7659ed48babca1b5e911627c91.svg" alt="[cached] 0.010967254638672 ms" loading="lazy"></p>
<p>Then calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/1b76aa877ddf88fbb5c47b816ab59a1.svg" alt="[cached] 0.010967254638672 ms" loading="lazy"></p>
<h3 id="question-6" tabindex="-1"><a class="header-anchor" href="#question-6" aria-hidden="true">#</a> Question 6</h3>
<p>Ramiro did a survey of the number of pets owned by his classmates, with the following results:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/b7bba6fa4a5116a6aad9005c65a43a2.jpg" alt="[image]" loading="lazy"></p>
<p>What was the mean deviation of the number of pets?</p>
<p>A. 1.02</p>
<p>B. 1.053</p>
<p>C. 1.087</p>
<p>D. 1.12</p>
<h4 id="q6-answer" tabindex="-1"><a class="header-anchor" href="#q6-answer" aria-hidden="true">#</a> Q6 Answer</h4>
<p>Calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/36b4dc652622ffee1f2e43a28fac181.svg" alt="[cached] 0.063896179199219 ms" loading="lazy"></p>
<h3 id="question-7" tabindex="-1"><a class="header-anchor" href="#question-7" aria-hidden="true">#</a> Question 7</h3>
<p>Emma rolled a die a number of times and recorded her results in a bar graph, as follows:
<img src="@source/column/data_analysis/math/01-mean-deviation.assets/b7d76d61ffff15b74bb54f52d139952.gif" alt="[image]" loading="lazy"></p>
<p>What was the mean deviation of the scores?</p>
<p>A. 1.375</p>
<p>B. 1.5</p>
<p>C. 1.625</p>
<p>D. 1.875</p>
<h4 id="q7-answer" tabindex="-1"><a class="header-anchor" href="#q7-answer" aria-hidden="true">#</a> Q7 Answer</h4>
<p>First complete a frequency table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/c284c0bdde9ca5f6330757b385505f1.svg" alt="[cached] 0.063896179199219 ms" loading="lazy"></p>
<p>Then calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/080ebe1f7db9ca6f89898e1d4ef0421.svg" alt="[cached] 0.016927719116211 ms" loading="lazy"></p>
<h3 id="question-8" tabindex="-1"><a class="header-anchor" href="#question-8" aria-hidden="true">#</a> Question 8</h3>
<p>Rachel rolled a die forty five times with the following results:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/dbed293635c6463e44b56d6e191a692.jpg" alt="[image]" loading="lazy"></p>
<p>What was the mean deviation of her scores?</p>
<p>A. 1.564</p>
<p>B. 1.609</p>
<p>C. 1.64</p>
<p>D. 1.653</p>
<h4 id="q8-answer" tabindex="-1"><a class="header-anchor" href="#q8-answer" aria-hidden="true">#</a> Q8 Answer</h4>
<p>Calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/e8fea5b4d9132fa458471545f6ead91.svg" alt="[cached] 0.051975250244141 ms" loading="lazy"></p>
<h3 id="question-9" tabindex="-1"><a class="header-anchor" href="#question-9" aria-hidden="true">#</a> Question 9</h3>
<p>A spinner is in the shape of a regular heptagon marked with the numbers 1 to 7.</p>
<p>Theodore spun the spinner 50 times and recorded his results in a table, as follows:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/69934bd04b949edeb2bd7cce0ca1942.jpg" alt="[image]" loading="lazy"></p>
<p>Calculate the mean deviation of the scores.</p>
<p>A. 1.6088</p>
<p>B. 1.7288</p>
<p>C. 1.7688</p>
<p>D. 1.8088</p>
<h4 id="q9-answer" tabindex="-1"><a class="header-anchor" href="#q9-answer" aria-hidden="true">#</a> Q9 Answer</h4>
<p>Calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/9e24ddb8a8ffef6b672601f8848bef1.svg" alt="[cached] 0.063180923461914 ms" loading="lazy"></p>
<h3 id="question-10" tabindex="-1"><a class="header-anchor" href="#question-10" aria-hidden="true">#</a> Question 10</h3>
<p>The children in a class did a survey of the number of siblings (brothers and sisters) each of them had. The results are recorded in the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/0d3b9be27588b33900548947fd49a02.jpg" alt="[image]" loading="lazy"></p>
<p>Calculate the mean deviation of the number of siblings.</p>
<p>A. 1.38</p>
<p>B. 1.41</p>
<p>C. 1.45</p>
<p>D. 1.48</p>
<h4 id="q10-answer" tabindex="-1"><a class="header-anchor" href="#q10-answer" aria-hidden="true">#</a> Q10 Answer</h4>
<p>Calculate the mean and mean deviation from the following table:</p>
<p><img src="@source/column/data_analysis/math/01-mean-deviation.assets/5f022b81cc17a8e75baf3c9623f5da1.svg" alt="[cached] 0.046014785766602 ms" loading="lazy"></p>
<h2 id="期待你和我一起-用数据解析世界" tabindex="-1"><a class="header-anchor" href="#期待你和我一起-用数据解析世界" aria-hidden="true">#</a> 期待你和我一起，用数据解析世界</h2>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、小学数学一对一教学」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


