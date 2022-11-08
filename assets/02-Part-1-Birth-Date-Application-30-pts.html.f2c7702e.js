import{_ as t}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as i,e as l,r as u}from"./app.d5b5f61c.js";const r={},k=l(`<h2 id="part-1-birth-date-application-30-pts-use-mod-and-division-to-separate-digits-for-birthday-date-birthdays-java" tabindex="-1"><a class="header-anchor" href="#part-1-birth-date-application-30-pts-use-mod-and-division-to-separate-digits-for-birthday-date-birthdays-java" aria-hidden="true">#</a> Part 1: Birth Date Application: (30 pts)Use MOD % and / division to separate digits for Birthday date Birthdays.java</h2><p>Ask for the user to enter a two people’s birthday as an 8 digit-number! The user should enter the birthday for each person in an 8-digit format (&quot;YYYYMMDD&quot;). Then your program should compare the two birthday dates to determine which person is older, or if they have the same age.</p><blockquote><p>要求用户输入两个人的生日作为一个 8 位数的数字!</p><p>用户应该以 8 位数字格式 <code>(“YYYYMMDD”)</code> 输入每个人的生日。然后你的程序应该比较两个生日日期，以确定谁更年长，或者他们是否有相同的年龄。</p></blockquote><p>For example, President’s Obama&#39;s birthday is Aug 4,1961. So, it should be entered as 19610804 (YYYYMMDD). We can assume that the user enters good data with 8 digits for each birthday so you do not have to do any data validation.</p><blockquote><p>例如，奥巴马总统的生日是1961年8月4日。因此，它应该输入为19610804 (YYYYMMDD)。我们可以假设用户为每个生日输入 8 位数字，这样您就不必进行任何数据验证。</p></blockquote><ul><li>This program should separate each 8-digit-number into three separate numbers to represent the day, month, and the year, in that order. <strong>Only use the mathematical operators to separate the digits (will cover this during class).</strong></li></ul><blockquote><p>这个程序应该将每个8位数字按顺序分成三个单独的数字，分别表示日、月和年。<strong>只使用数学运算符来分隔数字</strong> (将在课堂上讨论)。</p></blockquote><p>Thus, in our example the program would assign 4 to a first variable from the right, let&#39;s say day, then assign 8 to a second variable, let&#39;s say month and 1961 to the number variable, let&#39;s say year. (Do not worry about leading zeroes for days and months.)</p><blockquote><p>因此，在我们的例子中，程序会将 4 赋值给右边的第一个变量，比如 day，然后将 8 赋值给第二个变量，比如 month，将 1961 赋值给 number 变量，比如 year。(不用担心天数和月份的前导零。)</p></blockquote><p>Next the program should print out the date of birth written in the following standard format MM/DD/YYYY for each person. So, the output for Obama’s date of birth should be as follow: 8/4/1961</p><blockquote><p>接下来，程序将为每个人打印出以以下标准格式写的出生日期 MM/DD/YYYY。因此，奥巴马出生日期的输出应该如下: 8/4/1961</p></blockquote><p>Also, your program should be able to print which person is older or the other possibility that they are the same age. You should use control structure allowing program to make decision (smart). So, result should be decided by program and not you.</p><blockquote><p>另外，你的程序应该能够打印出哪个人更老，或者他们是相同年龄的其他可能性。你应该使用允许程序做出决策(智能)的控制结构。所以，结果应该由程序决定，而不是由你决定。</p></blockquote><h2 id="example-comparing-obama-s-to-beyonce-birthday" tabindex="-1"><a class="header-anchor" href="#example-comparing-obama-s-to-beyonce-birthday" aria-hidden="true">#</a> Example (Comparing Obama’s to Beyoncé Birthday):</h2><p>Enter the birthday in 8-digit format for person&#39;s # 1: (YYYYMMDD): 19610804</p><p>Enter the birthday in 8-digit format for person&#39;s # 2, (YYYYMMDD): 19810904</p><p><strong>For this example, the following result will be printed:</strong></p><p>Enter name for person #1: Obama</p><p>Enter name for person #2: Beyoncé</p><p>Obama’s date of birth is: 8/4/1961</p><p>Beyoncé’s date of birth is: 9/4/1981</p><p>Obama is Older than Beyoncé!</p><h2 id="grading-criteria" tabindex="-1"><a class="header-anchor" href="#grading-criteria" aria-hidden="true">#</a> Grading Criteria:</h2><p>A. Program Execution (90%)</p><p>Meeting all of the require</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><h3 id="_1-整数分割" tabindex="-1"><a class="header-anchor" href="#_1-整数分割" aria-hidden="true">#</a> 1. 整数分割</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HW</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> theunit <span class="token operator">=</span> a <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> decade <span class="token operator">=</span> a <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> decadeplusunit <span class="token operator">=</span> theunit <span class="token operator">+</span> decade<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>decadeplusunit<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-年月日分割" tabindex="-1"><a class="header-anchor" href="#_2-年月日分割" aria-hidden="true">#</a> 2. 年月日分割</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HW</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> birthday <span class="token operator">=</span> <span class="token number">19610804</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> year <span class="token operator">=</span> birthday <span class="token operator">/</span> <span class="token number">10000</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> day <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-编写成对象" tabindex="-1"><a class="header-anchor" href="#_3-编写成对象" aria-hidden="true">#</a> 3. 编写成对象</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HW</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token keyword">int</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> year <span class="token operator">=</span> birthday <span class="token operator">/</span> <span class="token number">10000</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> day <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday_format <span class="token operator">=</span> month <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> year<span class="token punctuation">;</span>
        <span class="token keyword">return</span> birthday_format<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-main" tabindex="-1"><a class="header-anchor" href="#_4-main" aria-hidden="true">#</a> 4. main</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span> <span class="token comment">// Scanner == java.util.Scanner</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Birthday</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Birthday</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Birthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 类的实例化</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Scanner input = new Scanner(System.in);</span>

        <span class="token comment">// 获取姓名</span>
<span class="token comment">//        System.out.println(&quot;请输入第一个姓名:&quot;);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入第一个姓名:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> name1 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// String name1 = scanner.nextLine();</span>

        <span class="token comment">// 获取日期</span>
<span class="token comment">//        System.out.println(&quot;以 8 位格式输入&quot; + name1 + &quot;的生日:(YYYYMMDD):&quot;);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;以 8 位格式输入&quot;</span> <span class="token operator">+</span> name1 <span class="token operator">+</span> <span class="token string">&quot;的生日:(YYYYMMDD):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> birthday1 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday1_format <span class="token operator">=</span> birthday<span class="token punctuation">.</span><span class="token function">getBirthday</span><span class="token punctuation">(</span>birthday1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入第一个姓名:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name2 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;以 8 位格式输入&quot;</span> <span class="token operator">+</span> name2 <span class="token operator">+</span> <span class="token string">&quot;的生日:(YYYYMMDD):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> birthday2 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday2_format <span class="token operator">=</span> birthday<span class="token punctuation">.</span><span class="token function">getBirthday</span><span class="token punctuation">(</span>birthday2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输出第一个人的姓名:&quot;</span> <span class="token operator">+</span> name1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输出第二个人的姓名:&quot;</span> <span class="token operator">+</span> name2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot;的出生日期是:&quot;</span> <span class="token operator">+</span> birthday1_format<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name2 <span class="token operator">+</span> <span class="token string">&quot;的出生日期是:&quot;</span> <span class="token operator">+</span> birthday2_format<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>birthday1 <span class="token operator">&lt;</span> birthday2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot;比&quot;</span> <span class="token operator">+</span> name2 <span class="token operator">+</span> <span class="token string">&quot;还老!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>birthday1 <span class="token operator">==</span> birthday2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot;和&quot;</span> <span class="token operator">+</span> name2 <span class="token operator">+</span> <span class="token string">&quot;是同年同月同日生!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name2 <span class="token operator">+</span> <span class="token string">&quot;比&quot;</span> <span class="token operator">+</span> name1 <span class="token operator">+</span> <span class="token string">&quot;还老!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token keyword">int</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> year <span class="token operator">=</span> birthday <span class="token operator">/</span> <span class="token number">10000</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> day <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday_format <span class="token operator">=</span> month <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> year<span class="token punctuation">;</span>
        <span class="token keyword">return</span> birthday_format<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-标准代码" tabindex="-1"><a class="header-anchor" href="#_5-标准代码" aria-hidden="true">#</a> 5. 标准代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span> <span class="token comment">// Scanner == java.util.Scanner</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Birthday</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Birthday</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Birthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 类的实例化</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Scanner input = new Scanner(System.in);</span>

        <span class="token comment">// 获取日期</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the birthday in 8-digit format for person&#39;s # 1: (YYYYMMDD):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> birthday1 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday1_format <span class="token operator">=</span> birthday<span class="token punctuation">.</span><span class="token function">getBirthday</span><span class="token punctuation">(</span>birthday1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the birthday in 8-digit format for person&#39;s # 2, (YYYYMMDD): &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> birthday2 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday2_format <span class="token operator">=</span> birthday<span class="token punctuation">.</span><span class="token function">getBirthday</span><span class="token punctuation">(</span>birthday2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取姓名</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter name for person #1:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> name1 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// String name1 = scanner.nextLine();</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter name for person #2:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name2 <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot;\\&#39;s date of birth is:&quot;</span> <span class="token operator">+</span> birthday1_format<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name2 <span class="token operator">+</span> <span class="token string">&quot;\\&#39;s date of birth is:&quot;</span> <span class="token operator">+</span> birthday2_format<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        System.out.println(name1 + &quot;的出生日期是:&quot; + birthday1_format);</span>
<span class="token comment">//        System.out.println(name2 + &quot;的出生日期是:&quot; + birthday2_format);</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>birthday1 <span class="token operator">&lt;</span> birthday2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot; is Older than &quot;</span> <span class="token operator">+</span> name2 <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>birthday1 <span class="token operator">==</span> birthday2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> <span class="token string">&quot;和&quot;</span> <span class="token operator">+</span> name2 <span class="token operator">+</span> <span class="token string">&quot;是同年同月同日生!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name2 <span class="token operator">+</span><span class="token string">&quot; is Older than &quot;</span> <span class="token operator">+</span> name1 <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token keyword">int</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> year <span class="token operator">=</span> birthday <span class="token operator">/</span> <span class="token number">10000</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> day <span class="token operator">=</span> birthday <span class="token operator">%</span> <span class="token number">10000</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> birthday_format <span class="token operator">=</span> month <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> year<span class="token punctuation">;</span>
        <span class="token keyword">return</span> birthday_format<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',38),d={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"方法二：微信：Jiabcdefh",-1),g=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function f(q,w){const a=u("ExternalLinkIcon");return o(),c("div",null,[k,n("div",d,[m,v,b,n("p",null,[s("方法一："),n("a",h,[s("QQ"),i(a)])]),y]),g])}const D=e(r,[["render",f],["__file","02-Part-1-Birth-Date-Application-30-pts.html.vue"]]);export{D as default};