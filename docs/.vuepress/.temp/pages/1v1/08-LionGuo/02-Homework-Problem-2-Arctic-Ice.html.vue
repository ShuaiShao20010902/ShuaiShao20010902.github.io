<template><div><ul>
<li>
<p><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/problem_2.ipynb">/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Iceproblem_2.ipynb</a></p>
</li>
<li>
<p><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb">/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb</a></p>
</li>
</ul>
<p><strong>Hand-in format:</strong> IPython Notebook or python program. Submit via email.</p>
<p>As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.</p>
<blockquote>
<p><strong>提交格式:</strong> IPython Notebook或python程序。通过电子邮件提交。</p>
<p>作为一个提醒:请确保您的代码是干净的、有文档记录的和可理解的。确保它没有错误地运行。</p>
</blockquote>
<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2>
<p>The purpose of this problem is to become familiar with loading, manipulating, and analyzing image-like data, plotting it. We will use a dataset collected by the AMSR-E instrument <a href="http://en.wikipedia.org/wiki/Aqua_%28satellite%29" target="_blank" rel="noopener noreferrer">Aqua<ExternalLinkIcon/></a> satellite.</p>
<blockquote>
<p>这个问题的目的是熟悉加载、操作和分析类似图像的数据，并绘制它。我们将使用AMSR-E仪器<a href="http://en.wikipedia.org/wiki/Aqua_%28satellite%29" target="_blank" rel="noopener noreferrer">Aqua<ExternalLinkIcon/></a>卫星收集的数据集。</p>
</blockquote>
<p>The data consists of maps of the concentration of ice in the Arctic collected between 2006 and 2011. The data obtained from the <a href="http://www.iup.uni-bremen.de/seaice/amsr/" target="_blank" rel="noopener noreferrer">amsr database<ExternalLinkIcon/></a> and converted into a single HDF5 file format.</p>
<blockquote>
<p>这些数据由2006年至2011年收集的北极冰浓度地图组成。从<a href="http://www.iup.uni-bremen.de/seaice/amsr/" target="_blank" rel="noopener noreferrer">amsr数据库<ExternalLinkIcon/></a>获得的数据，并转换为单一的HDF5文件格式。</p>
</blockquote>
<h2 id="part-1-examining-a-single-map" tabindex="-1"><a class="header-anchor" href="#part-1-examining-a-single-map" aria-hidden="true">#</a> Part 1 - Examining a single map</h2>
<blockquote>
<p>第1部分-检查单个地图</p>
</blockquote>
<p>Begin by examining the HDF5 file - you can use <code v-pre>h5ls</code> at the command line, or <code v-pre>h5py</code> inside the notebook.</p>
<blockquote>
<p>从检查HDF5文件开始-你可以在命令行中使用' h5ls '，或者在笔记本中使用' h5py '。</p>
</blockquote>
<blockquote>
<p>If you don't remember how to open HDF5 files, and read datasets from HDF5 files, look at our Day 2 lecture.</p>
</blockquote>
<blockquote>
<p>如果你不记得如何打开 HDF5 文件，并从 HDF5 文件中读取数据集，请参考我们第2天的课程。</p>
</blockquote>
<blockquote>
<p>There are many datasets, each with a name of the format <code v-pre>YYYYMMDD</code>, giving the data. Each dataset is a single map (i.e. 2D array), where the values give the ice concentration (fraction, from 0.0 to 100.0) in that pixel of the map. Careful of NaN values!</p>
</blockquote>
<blockquote>
<p>有许多数据集，每个数据集的名称格式为“YYYYMMDD”，用于提供数据。每个数据集都是一个单一的地图(即2D数组)，其中的值给出了地图像素中的冰浓度(从0.0到100.0的分数)。小心NaN值!</p>
</blockquote>
<p>Read one of the maps, and plot it with Matplotlib.</p>
<blockquote>
<p>阅读其中一张地图，并使用Matplotlib绘制它。</p>
</blockquote>
<p>Note: to get the correct orientation, you need the <code v-pre>origin='lower'</code> argument for <code v-pre>imshow()</code>. Include a colorbar. Remove the tick labels (<code v-pre>0</code>, <code v-pre>100</code>, and so on, indicating pixel number) since they are not useful.</p>
<blockquote>
<p>注意:为了获得正确的方向，你需要' origin='lower' '参数为' imshow() '。包括一个colorbar。删除标记(“0”、“100”等，表示像素数)，因为它们没有用。</p>
</blockquote>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/6 18:26</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: hw2.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token keyword">import</span> h5py


<span class="token comment"># f = h5py.File('p2_icedata_area.hdf5', 'r')</span>
<span class="token comment"># # f = h5py.File('p2_icedata.hdf5', 'r')</span>
<span class="token comment"># print(f)</span>
<span class="token comment"># print(f.keys())</span>
<span class="token comment"># dataset = f["pixel_areas"]</span>
<span class="token comment"># print(dataset)</span>
<span class="token comment"># print(dataset.shape)</span>
<span class="token comment"># print(dataset.dtype)</span>

<span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>shape<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>dtype<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">"\t"</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    read_hdf5<span class="token punctuation">(</span><span class="token string">"p2_icedata.hdf5"</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> h5py
<span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    year_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    dataset_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token comment">#         print(key, dataset.shape, dataset.dtype, sep="\t")</span>
        year_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        dataset_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>dataset<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token comment"># "g" 表示红色，marksize用来设置'D'菱形的大小</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>year_lst<span class="token punctuation">,</span> dataset_lst<span class="token punctuation">,</span> <span class="token string">"g"</span><span class="token punctuation">,</span> marker<span class="token operator">=</span><span class="token string">'D'</span><span class="token punctuation">,</span> markersize<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">"year"</span><span class="token punctuation">)</span>
    <span class="token comment"># 绘制坐标轴标签</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">"年"</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">"数据"</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">"HDF5"</span><span class="token punctuation">)</span>
    <span class="token comment"># 显示图例</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span>loc<span class="token operator">=</span><span class="token string">"lower right"</span><span class="token punctuation">)</span>
    <span class="token comment"># 调用 text()在图像上绘制注释文本</span>
    <span class="token comment"># x1、y1表示文本所处坐标位置，ha参数控制水平对齐方式, va控制垂直对齐方式，str(y1)表示要绘制的文本</span>
<span class="token comment">#     for x1, y1 in zip(year_lst, dataset_lst):</span>
<span class="token comment">#         plt.text(x1, y1, str(y1), ha='center', va='bottom', fontsize=10)</span>
    <span class="token comment"># 保存图片</span>
    plt<span class="token punctuation">.</span>savefig<span class="token punctuation">(</span><span class="token string">"1.jpg"</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


read_hdf5<span class="token punctuation">(</span><span class="token string">"p2_icedata.hdf5"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-2-ice-concentration-versus-time" tabindex="-1"><a class="header-anchor" href="#part-2-ice-concentration-versus-time" aria-hidden="true">#</a> Part 2 - Ice concentration versus time</h2>
<blockquote>
<p>第二部分-冰浓度与时间的关系</p>
</blockquote>
<p>We want to make a plot of the ice concentration over time.</p>
<blockquote>
<p>我们要画出冰浓度随时间变化的曲线。</p>
</blockquote>
<p>First, write a loop to read all the datasets of the HDF5 file (e.g. into a dict).</p>
<blockquote>
<p>首先，编写一个循环来读取HDF5文件的所有数据集(例如到字典中)。</p>
</blockquote>
<p>Then, write an analysis function <code v-pre>frac_pixels_above(dict,value)</code> which, for each array in the input dict, computes the fraction of pixels above the input <code v-pre>value</code>. Use this to make a plot of the number of pixels with concentration above 50%, versus time.</p>
<blockquote>
<p>然后，编写一个分析函数' frac_pixels_above(dict,value) '，该函数对于输入dict中的每个数组，计算输入' value '以上像素的百分比。使用此方法绘制浓度超过50%的像素数量与时间的关系图。</p>
</blockquote>
<blockquote>
<p>Note: to include &quot;time&quot; on the x-axis of a plot, you may want to write a helper function to convert the dict keys from their <code v-pre>YYYYMMDD</code> string format into a 3-tuple of (year, month, day) integer values.</p>
</blockquote>
<blockquote>
<p>注意:要在图形的x轴上包含“时间”，您可能需要编写一个helper函数来将字典键从它们的“YYYYMMDD”字符串格式转换为3元组(年、月、日)整数值。</p>
</blockquote>
<blockquote>
<p>This can then be converted into fractional years (e.g. 1 July 2012 is <code v-pre>2012.5</code>). For simplicity you can assume each month has 30 days.</p>
</blockquote>
<blockquote>
<p>这可以转换为小数年(例如，2012年7月1日为“2012.5”)。为了简单起见，你可以假设每个月有30天。</p>
</blockquote>
<blockquote>
<p>Try experimenting with matplotlib <code v-pre>set_major_formatter</code> to get a good <a href="https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html" target="_blank" rel="noopener noreferrer">representation of dates in the tick labels<ExternalLinkIcon/></a>.</p>
</blockquote>
<blockquote>
<p>尝试使用matplotlib ' set_major_formatter '来获得一个很好的<a href="https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html" target="_blank" rel="noopener noreferrer">在标记标签中日期的表示<ExternalLinkIcon/></a>。</p>
</blockquote>
<p>Describe what you see in the plot.</p>
<blockquote>
<p>描述你在情节中看到了什么。</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># year_lst = []</span>
    dataset_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token comment"># print(key, dataset.shape, dataset.dtype, sep="\t")</span>
        <span class="token comment"># year_lst.append(key)</span>
        dataset_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>dataset_lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-3-physical-units" tabindex="-1"><a class="header-anchor" href="#part-3-physical-units" aria-hidden="true">#</a> Part 3 - Physical units</h2>
<blockquote>
<p>第3部分-物理单元</p>
</blockquote>
<p>To be more quantitative we will compute the actual surface area of Earth in <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">m</mi></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\rm{km}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8984em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord mathrm">km</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8984em;"><span style="top:-3.1473em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathrm mtight">2</span></span></span></span></span></span></span></span></span></span></span></span> over which the ice concentration is above a given threshold.</p>
<blockquote>
<p>为了更定量，我们将以<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">m</mi></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\rm{km}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8984em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord mathrm">km</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8984em;"><span style="top:-3.1473em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathrm mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>为单位计算地球的实际表面积，在此范围内冰浓度超过给定的阈值。</p>
</blockquote>
<p>However, these maps are projections of a spherical surface, so <a href="https://en.wikipedia.org/wiki/Tissot%27s_indicatrix" target="_blank" rel="noopener noreferrer">pixels have different area<ExternalLinkIcon/></a>.</p>
<blockquote>
<p>然而，这些地图是球面的投影，所以<a href="https://en.wikipedia.org/wiki/Tissot%27s_indicatrix" target="_blank" rel="noopener noreferrer">像素有不同的面积<ExternalLinkIcon/></a>。</p>
</blockquote>
<blockquote>
<p>Every map uses the same projection, so the pixel areas in each are the same.</p>
</blockquote>
<blockquote>
<p>每个地图使用相同的投影，所以每个地图中的像素区域是相同的。</p>
</blockquote>
<p>The areas (in <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">m</mi></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\rm{km}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8984em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord mathrm">km</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8984em;"><span style="top:-3.1473em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathrm mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>) are available in the file named <code v-pre>data/p2_icedata_area.hdf5</code>. Inspect, then load, this datafile. Plot it (with colorbar and units).</p>
<blockquote>
<p>区域(在<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">m</mi></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\rm{km}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8984em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord mathrm">km</span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8984em;"><span style="top:-3.1473em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathrm mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>中)在名为“data/p2_icedata_area.hdf5”的文件中可用。检查并加载这个数据文件。绘制它(用颜色条和单位)。</p>
</blockquote>
<ul>
<li><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata_area.hdf5">p2_icedata_area.hdf5</a></li>
<li><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata.hdf5">p2_icedata.hdf5</a></li>
</ul>
<h2 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取" aria-hidden="true">#</a> 文件读取</h2>
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
</div></template>


