<template><div><p><a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/problem_1.ipynb">/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/problem_1.ipynb</a></p>
<p><strong>Hand-in format:</strong> IPython Notebook or python program. Submit via email.</p>
<blockquote>
<p><strong>提交格式:</strong> IPython Notebook 或 python 程序。通过电子邮件提交。</p>
</blockquote>
<p>As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.</p>
<blockquote>
<p>作为一个提醒:请确保您的代码是干净的、有文档记录的和可理解的。确保它没有错误地运行。</p>
</blockquote>
<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2>
<p><a href="http://en.wikipedia.org/wiki/DNA" target="_blank" rel="noopener noreferrer">DNA<ExternalLinkIcon/></a> is a molecule that encodes genetic instructions for living organisms. DNA typically takes the form of double-stranded helix: each strand corresponds to a sequence of <em>nucleotides</em>.</p>
<blockquote>
<p><a href="http://en.wikipedia.org/wiki/DNA" target="_blank" rel="noopener noreferrer">DNA<ExternalLinkIcon/></a> 是一种为生物体编码遗传指令的分子。DNA 通常采用双链螺旋结构:每条链对应一个核苷酸序列。</p>
</blockquote>
<p>Each nucleotide consists of a nucleobase (guanine, adenine, thymine, or cytosine) attached to sugars, which are in turn separated from each other by phosphate groups:</p>
<blockquote>
<p>每个核苷酸由附在糖上的一个碱基(鸟嘌呤、腺嘌呤、胸腺嘧啶或胞嘧啶)组成，这些碱基又由磷酸基彼此分离:</p>
</blockquote>
<p><img src="@source/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing.assets/DNA_Structure+Key+Labelled.pn_NoBB.png" alt="DNA_Structure+Key+Labelled.pn_NoBB" loading="lazy"></p>
<p>The nucleobases are commonly referred to with the letters:</p>
<blockquote>
<p>碱基通常用字母表示:</p>
</blockquote>
<ul>
<li><code v-pre>G</code> (guanine)</li>
</ul>
<blockquote>
<p>“G”(鸟嘌呤)</p>
</blockquote>
<ul>
<li><code v-pre>A</code> (adenine)</li>
</ul>
<blockquote>
<p>A(腺嘌呤)</p>
</blockquote>
<ul>
<li><code v-pre>T</code> (thymine) and</li>
</ul>
<blockquote>
<p>(胸腺嘧啶)和“T”</p>
</blockquote>
<ul>
<li><code v-pre>C</code> (cytosine).</li>
</ul>
<blockquote>
<p>“C”(胞嘧啶)。</p>
</blockquote>
<p>The nucleobases form pairs (or &quot;complements&quot;): <code v-pre>G</code> pairs with <code v-pre>C</code>, and <code v-pre>T</code> pairs with <code v-pre>A</code>.</p>
<blockquote>
<p>碱基形成一对(或“补体”):“G”对与“C”，“T”对与“A”。</p>
</blockquote>
<p>The information content of a piece of DNA is therefore commonly represented as a string, giving a sequence of nucleobases, such as <code v-pre>GATTACACCTCATTATAAA</code>.</p>
<blockquote>
<p>因此，一段 DNA 的信息内容通常被表示为一个字符串，给出一个碱基序列，如 “GATTACACCTCATTATAAA”。</p>
</blockquote>
<p>In this problem set, we will be working with fake genetic data, since real-life data often has added complications, but the functions and techniques uses here are the same or very similar to techniques used on real data.</p>
<blockquote>
<p>在这个问题集中，我们将处理假的基因数据，因为现实生活中的数据通常会增加复杂性，但这里使用的功能和技术与真实数据中使用的技术相同或非常相似。</p>
</blockquote>
<h2 id="part-1" tabindex="-1"><a class="header-anchor" href="#part-1" aria-hidden="true">#</a> Part 1</h2>
<h3 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h3>
<p>The <strong>reverse complement</strong> of DNA is found by reversing the DNA sequence, then replacing each base by its complement. For example, the reverse complement of <code v-pre>ATGCGGC</code> is <code v-pre>GCCGCAT</code>.</p>
<blockquote>
<p>DNA 的逆补体是通过颠倒 DNA 序列，然后用其补体替换每个碱基来发现的。例如，' ATGCGGC '的反向补语是' GCCGCAT '。</p>
</blockquote>
<p>Write a Python function <code v-pre>reverse_complement()</code> that takes a DNA sequence as a string, and returns the reverse complement. Test your function, then find and print the reverse complement of the following sequence:</p>
<blockquote>
<p>编写一个 Python 函数' reverse_complement() '，它接受一个 DNA 序列作为字符串，并返回反向补体。测试你的函数，然后找到并打印以下序列的逆补:</p>
</blockquote>
<pre><code>ATGCGCGGATCGTACCTAATCGATGGCATTAGCCGAGCCCGATTACGC
</code></pre>
<p>Note that this function is not needed for the remaining questions below.</p>
<blockquote>
<p>注意，下面其余的问题不需要这个函数。</p>
</blockquote>
<h3 id="替换原则" tabindex="-1"><a class="header-anchor" href="#替换原则" aria-hidden="true">#</a> 替换原则</h3>
<ol>
<li>G-C</li>
<li>T-A</li>
</ol>
<h3 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/5 21:48</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: hw1.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token keyword">def</span> <span class="token function">reverse_complement</span><span class="token punctuation">(</span>dna_str<span class="token punctuation">)</span><span class="token punctuation">:</span>
    reverse_dna_str <span class="token operator">=</span> dna_str<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token comment"># replace_dna_str = reverse_dna_str.replace("G", "C")</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace("C", "G")</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace("A", "T")</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace("T", "A")</span>
    <span class="token comment"># return replace_dna_str</span>
    TA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"T"</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">]</span>
    CG <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"C"</span><span class="token punctuation">,</span> <span class="token string">"G"</span><span class="token punctuation">]</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> s <span class="token keyword">in</span> reverse_dna_str<span class="token punctuation">:</span>
        <span class="token keyword">if</span> s <span class="token keyword">in</span> TA<span class="token punctuation">:</span>
            <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">"T"</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">"T"</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">"C"</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">"G"</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>result<span class="token punctuation">)</span>


reverse_complement<span class="token punctuation">(</span><span class="token string">"ATGCGGC"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h3>
<p><a href="http://en.wikipedia.org/wiki/RNA" target="_blank" rel="noopener noreferrer">Ribonucleic acid (RNA)<ExternalLinkIcon/></a> is a family of large biological molecules that are <em>transcribed</em> from DNA by the &quot;RNA polymerase&quot; enzyme.</p>
<blockquote>
<p><a href="http://en.wikipedia.org/wiki/RNA" target="_blank" rel="noopener noreferrer">核糖核酸(RNA)<ExternalLinkIcon/></a> 是一个大分子家族，由“RNA 聚合酶”酶从 DNA 转录而来。</p>
</blockquote>
<p><a href="http://en.wikipedia.org/wiki/Messenger_RNA" target="_blank" rel="noopener noreferrer">Messenger RNA<ExternalLinkIcon/></a> molecules (or mRNA) are a subset of RNA molecules that are used to pass information from DNA to ribosomes, which then translates the mRNA to protein sequences.</p>
<blockquote>
<p><a href="http://en.wikipedia.org/wiki/Messenger_RNA" target="_blank" rel="noopener noreferrer">信使RNA<ExternalLinkIcon/></a> 分子(或mRNA)是 RNA 分子的一个子集，用于将信息从DNA传递到核糖体，然后核糖体将 mRNA 翻译成蛋白质序列。</p>
</blockquote>
<p>mRNA consists of a single strand of nucleotides that are identical to the ones found in DNA, with the exception of uracil (<code v-pre>U</code>), which replaces thymine (<code v-pre>T</code>).</p>
<blockquote>
<p>mRNA由一条核苷酸链组成，除了尿嘧啶(' U ')取代了胸腺嘧啶(' T ')之外，它与DNA中的核苷酸链相同。</p>
</blockquote>
<p>Write a Python function <code v-pre>dna_to_mrna()</code> that takes a DNA sequence and returns the corresponding mRNA sequence. For example, the DNA sequence <code v-pre>ATCGCGAT</code> should produce the mRNA sequence <code v-pre>AUCGCGAU</code>.</p>
<blockquote>
<p>编写一个Python函数' dna_to_mrna() '，它接受一个DNA序列并返回相应的mRNA序列。例如，DNA序列' ATCGCGAT '应该产生mRNA序列' AUCGCGAU '。</p>
</blockquote>
<h3 id="替换原则-1" tabindex="-1"><a class="header-anchor" href="#替换原则-1" aria-hidden="true">#</a> 替换原则</h3>
<ol>
<li>U-T</li>
</ol>
<h3 id="答案-1" tabindex="-1"><a class="header-anchor" href="#答案-1" aria-hidden="true">#</a> 答案</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dna_to_mrna</span><span class="token punctuation">(</span>dna<span class="token punctuation">)</span><span class="token punctuation">:</span>
    mRNA <span class="token operator">=</span> dna<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"T"</span><span class="token punctuation">,</span> <span class="token string">"U"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> mRNA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-2" tabindex="-1"><a class="header-anchor" href="#part-2" aria-hidden="true">#</a> Part 2</h2>
<h3 id="question-3" tabindex="-1"><a class="header-anchor" href="#question-3" aria-hidden="true">#</a> Question 3</h3>
<p>When the mRNA is translated to a protein sequence, each set of three nucleotides, called a <strong>codon</strong>, is translated into a single amino acid. For example, the codon <code v-pre>UUC</code> translates to the amino acid <em>Phenylalanine</em>. Each amino acid can be represented by a single letter - for example Phenylalanine is represented by the letter <code v-pre>F</code>.</p>
<blockquote>
<p>当mRNA被翻译成蛋白质序列时，每一组核苷酸(称为<strong>密码子</strong>)被翻译成一个单一的氨基酸。例如，密码子' ' UUC ' '翻译成氨基酸<em>苯丙氨酸</em>。每个氨基酸都可以用一个字母表示，例如苯丙氨酸用字母“F”表示。</p>
</blockquote>
<blockquote>
<p>A protein, which is formed from a sequence of amino acids, can therefore be written as a sequence of letters in the same way as DNA or mRNA, but using more of the letters of the alphabet since there are more than four amino acids.</p>
</blockquote>
<blockquote>
<p>因此，由氨基酸序列组成的蛋白质可以像DNA或mRNA一样被写成字母序列，但由于氨基酸多于4个，所以蛋白质可以使用更多的字母。</p>
</blockquote>
<blockquote>
<p>protein也可以被写成字母序列，但是之前mrna每个字母可能要被写成多个字母</p>
</blockquote>
<p>The <a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/p1_codons.txt">data/p1_codons.txt</a> file contains a list of codon-amino acid pairs. There are two columns:</p>
<blockquote>
<p><a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/p1_codons.txt">data/p1_codons.txt</a> 文件包含密码子-氨基酸对的列表。有两栏:</p>
</blockquote>
<ul>
<li>first column: codon (represented by three letters).</li>
</ul>
<blockquote>
<p>第一列:密码子(由三个字母表示)。</p>
</blockquote>
<ul>
<li>second column: corresponding amino acid (represented by a single letter).</li>
</ul>
<blockquote>
<p>第二列:对应的氨基酸(用一个字母表示)。</p>
</blockquote>
<p>Certain codons do not correspond to an amino acid, but instead indicate that the amino acid sequence is finished. These are indicated by <code v-pre>Stop</code>.</p>
<blockquote>
<p>某些密码子并不对应某个氨基酸，而是表示该氨基酸序列结束了。它们由“Stop”表示。</p>
</blockquote>
<p>Write a function <code v-pre>mrna_to_protein()</code> that takes an mRNA sequence (as a string) and returns the sequence of amino acids (as a string), stopping the first time a <code v-pre>Stop</code> codon is encountered.</p>
<blockquote>
<p>编写一个函数' mrna_to_protein() '，它接受一个mRNA序列(作为字符串)并返回氨基酸序列(作为字符串)，在第一次遇到' Stop '密码子时停止。</p>
</blockquote>
<blockquote>
<p>Make sure that the codon map file is only read once when running the script (and not every time you want to translate a codon).</p>
</blockquote>
<blockquote>
<p>确保在运行脚本时只读取一次密码子映射文件(而不是每次您想翻译密码子时都读取)。</p>
</blockquote>
<p>Then, write a function <code v-pre>dna_to_protein()</code> that takes a DNA sequence (as a string) and returns the sequence of amino acids (as a string), making use of the functions that you wrote previously.</p>
<blockquote>
<p>然后，编写一个函数' dna_to_protein() '，它接受一个DNA序列(作为字符串)并返回氨基酸序列(作为字符串)，使用前面编写的函数。</p>
</blockquote>
<p>Print out the amino acid sequence for the following DNA sequence:</p>
<blockquote>
<p>打印出以下DNA序列的氨基酸序列:</p>
</blockquote>
<pre><code>AATCTCTACGGAAGTAGGTCAGTACTGATCGATCAGTCGATCGGGCGGCGATTTCGATCTGATTGTACGGCGGGCTAG
</code></pre>
<h3 id="答案-2" tabindex="-1"><a class="header-anchor" href="#答案-2" aria-hidden="true">#</a> 答案</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dna_to_mrna</span><span class="token punctuation">(</span>dna<span class="token punctuation">)</span><span class="token punctuation">:</span>
    mRNA <span class="token operator">=</span> dna<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"T"</span><span class="token punctuation">,</span> <span class="token string">"U"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> mRNA


<span class="token keyword">def</span> <span class="token function">mrna_to_protein</span><span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"p1_codons.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        content_list <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># print(content_list)</span>
    target_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> content_list<span class="token punctuation">:</span>
        line <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># print(line)</span>
        target_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token comment"># print(target_list)</span>
    target_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>target_list<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>target_dict<span class="token punctuation">)</span>
    <span class="token comment"># index = 0</span>
    result_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> mRNA<span class="token punctuation">:</span>
            use_mrna <span class="token operator">=</span> mRNA<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"use_mrna:>>>"</span><span class="token punctuation">,</span> use_mrna<span class="token punctuation">)</span>
            <span class="token keyword">if</span> target_dict<span class="token punctuation">[</span>use_mrna<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"Stop"</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>target_dict<span class="token punctuation">[</span>use_mrna<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token comment"># print("use_mran:>>>", use_mrna)</span>
            <span class="token comment"># if target_list[index][1] == "Stop":</span>
            <span class="token comment">#     break</span>
            <span class="token comment"># elif use_mrna in target_list[index]:</span>
            <span class="token comment">#     result_lst.append(target_list[index][1])</span>
            <span class="token comment">#     index += 1</span>
            mRNA <span class="token operator">=</span> mRNA<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>

    <span class="token comment"># print(result_lst)</span>
    <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>result_lst<span class="token punctuation">)</span>


DNA <span class="token operator">=</span> <span class="token string">"AATCTCTACGGAAGTAGGTCAGTACTGATCGATCAGTCGATCGGGCGGCGATTTCGATCTGATTGTACGGCGGGCTAG"</span>
mRNA <span class="token operator">=</span> dna_to_mrna<span class="token punctuation">(</span>DNA<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span>
<span class="token comment"># print(len(mRNA) / 3)</span>
r <span class="token operator">=</span> mrna_to_protein<span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="question-4" tabindex="-1"><a class="header-anchor" href="#question-4" aria-hidden="true">#</a> Question 4</h3>
<p>In the previous questions, we have been specifying the DNA sequence by hand, but DNA sequences are usually long and are stored in files. A common file format is the <a href="http://en.wikipedia.org/wiki/FASTA_format" target="_blank" rel="noopener noreferrer">FASTA format<ExternalLinkIcon/></a> which is a text-file of the form:</p>
<blockquote>
<p>在前面的问题中，我们一直手工指定DNA序列，但DNA序列通常很长，并且存储在文件中。常见的文件格式是<a href="http://en.wikipedia.org/wiki/FASTA_format" target="_blank" rel="noopener noreferrer">FASTA格式<ExternalLinkIcon/></a>，它是一个格式为:</p>
</blockquote>
<pre><code>&gt;label1
ACTGTATCGATGCTAGCTACGTAGCTAGCTAGCTAGCTGACGTA
ACGATGTGCGAGGGTCATGGGACGCGAGCGAGTCTAGCACGATC
&gt;label2
ACTGGGCTTGACTACGGCGGTATCTGACGGGCGAGCTGTACGAG
ACGGACTAGGGCGCGGCGGGGCGGATTTTCGAGTCGAGCGTTAT
</code></pre>
<p>The first line starts with a <code v-pre>&gt;</code> which is immediately followed by a label (an arbitrary string, e.g. the name of the gene). The sequence then starts on the second line, and may continue on several lines. It is common to limit the length of each line to 80, but this may vary from file to file. The sequence stops once either the file ends, or a line starts with <code v-pre>&gt;</code>, which indicates that a new sequence is being given. There may be any number of sequences in a file.</p>
<blockquote>
<p>第一行以' ' &gt; ' '开头，后面紧跟着一个标签(任意字符串，例如基因名)。序列从第二行开始，并可能在几行上继续。通常将每行的长度限制为80，但这可能因文件而异。一旦文件结束，或者有一行以' ' &gt; ' '开头(这表示给出了一个新的序列)，序列就会停止。一个文件中可能有任意数量的序列。</p>
</blockquote>
<p>Write a function <code v-pre>read_fasta()</code>, that takes the name of a file (as a string) and returns a Python dictionary containing all the sequences from the file, with the keys in the dictionary corresponding to the label.</p>
<blockquote>
<p>编写一个函数' read_fasta() '，它接受文件的名称(作为字符串)，并返回一个包含文件中所有序列的Python字典，字典中的键对应于标签。</p>
</blockquote>
<p>Use this function and the functions you have written above to read in the <a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/p1_fasta_q4.txt">p1_fasta_q4.txt</a> file and print out, for each sequence, the label, followed by the <strong>amino acid</strong> sequence (not the DNA sequence!).</p>
<blockquote>
<p>使用这个函数和上面所写的函数来读取[p1_fasta_q4.txt](/1v1/08-LionGuo/01- homework - question -DNA-sequencing/p1_fasta_q4.txt)文件，并为每个序列打印出标签，后面跟着<strong>氨基酸</strong>序列(不是DNA序列!)</p>
</blockquote>
<h2 id="答案-3" tabindex="-1"><a class="header-anchor" href="#答案-3" aria-hidden="true">#</a> 答案</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">read_fasta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"p1_fasta_q4.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        lines <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">">"</span><span class="token punctuation">)</span>
        <span class="token comment"># print(lines)</span>
    result_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
        <span class="token keyword">if</span> line<span class="token punctuation">:</span>
            <span class="token comment"># print(line)</span>
            line_lst <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token comment"># print(line_lst)</span>
            result_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>line_lst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> line_lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>
    <span class="token keyword">return</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>result_lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


