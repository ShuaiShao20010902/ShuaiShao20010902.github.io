import{_ as t}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as l,e as i,r as u}from"./app.d5b5f61c.js";const r={},k=i(`<h2 id="mathcalc-java" tabindex="-1"><a class="header-anchor" href="#mathcalc-java" aria-hidden="true">#</a> MathCalc.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathCalc</span> <span class="token punctuation">{</span>
    <span class="token comment">// Java 就是一个一个类</span>
    <span class="token comment">// 单行注释</span>
    <span class="token comment">// 计算加减乘除</span>
    <span class="token comment">// 基本数据类型——int</span>
    <span class="token comment">// 关键字（key word）和标示符（Identifier）</span>
    <span class="token comment">// 用变量解决问题</span>
    <span class="token comment">/*
        计算加减乘除的程序「MathCalc.java」
        - 字面值（literal value）写几就是几
        - 加减乘除运算符
        如何方便的计算类似 y=a*x+b*x*x+c*x*x*x 这样的公式?
        */</span>
    <span class="token comment">/*NoteBook：
     * psvm: public static void main(String[] args)
     * sout: System.out.println();
     * control + Alt + L: 代码格式化、代码规范化、代码美化*/</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        System.out.println(&quot;Hello aiyuechuang.&quot;);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;5+6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 双引号是个字符串 5 + 6</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">6.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4.8</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="variable-java" tabindex="-1"><a class="header-anchor" href="#variable-java" aria-hidden="true">#</a> Variable.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        void</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">//        类型 变量名 = value;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">+</span> c <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*Parse：
        * Java 中所有的数据都有类型，类型决定了存储的形式和占用的存储空间。举个例子：
        * - 微博
        * - 博客
        * - 连载小说
        * int 用来表示一个整数，int 整「数类」型，取值范围：-2^31~2^31-1*/</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// int 0l; // java: 不是语句</span>
        <span class="token keyword">int</span> user_name <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//        int static</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多种创建变量的方式" tabindex="-1"><a class="header-anchor" href="#多种创建变量的方式" aria-hidden="true">#</a> 多种创建变量的方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>name_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dannie&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jaden&quot;</span><span class="token punctuation">]</span>
number_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;789&quot;</span><span class="token punctuation">]</span>
username <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token string">&quot;我让你输入一个值，这个值是你要查找的用户名称，你输入的值，将会赋值给 username：&quot;</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;username 的值是:&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>
xiabiao <span class="token operator">=</span> name_lst<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>xiabiao<span class="token punctuation">)</span>
number <span class="token operator">=</span> number_lst<span class="token punctuation">[</span>xiabiao<span class="token punctuation">]</span>
<span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',7),d={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function f(g,x){const a=u("ExternalLinkIcon");return o(),c("div",null,[k,n("div",d,[m,v,b,n("p",null,[s("方法一："),n("a",h,[s("QQ"),l(a)])]),_]),y])}const C=e(r,[["render",f],["__file","01.html.vue"]]);export{C as default};