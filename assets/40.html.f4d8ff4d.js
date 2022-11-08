import{_ as e}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a,b as s,d as c,e as i,r}from"./app.7a4c2724.js";const u={},d=i(`<h1 id="_01-java-环境测试" tabindex="-1"><a class="header-anchor" href="#_01-java-环境测试" aria-hidden="true">#</a> 01-Java 环境测试</h1><h2 id="_1-命令行检测-java-是否安装成功" tabindex="-1"><a class="header-anchor" href="#_1-命令行检测-java-是否安装成功" aria-hidden="true">#</a> 1. 命令行检测 Java 是否安装成功</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>➜  <span class="token class-name">Desktop</span> java
用法：java <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>主类<span class="token operator">&gt;</span> <span class="token punctuation">[</span>args<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
           （执行类）
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>s
    <span class="token operator">-</span><span class="token operator">?</span> <span class="token operator">-</span>h <span class="token operator">-</span>help
                  将此帮助消息输出到错误流
    <span class="token operator">--</span>help        将此帮助消息输出到输出流
    <span class="token operator">-</span><span class="token class-name">X</span>            将额外选项的帮助输出到错误流
    <span class="token operator">--</span>help<span class="token operator">-</span>extra  将额外选项的帮助输出到输出流
    <span class="token operator">-</span>ea<span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">&lt;</span>程序包名称<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>|<span class="token operator">:</span><span class="token operator">&lt;</span>类名<span class="token operator">&gt;</span><span class="token punctuation">]</span>
    <span class="token operator">-</span>enableassertions<span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">&lt;</span>程序包名称<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>|<span class="token operator">:</span><span class="token operator">&lt;</span>类名<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  按指定的粒度启用断言
    <span class="token operator">-</span>da<span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">&lt;</span>程序包名称<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>|<span class="token operator">:</span><span class="token operator">&lt;</span>类名<span class="token operator">&gt;</span><span class="token punctuation">]</span>
    <span class="token operator">-</span>disableassertions<span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">&lt;</span>程序包名称<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>|<span class="token operator">:</span><span class="token operator">&lt;</span>类名<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  按指定的粒度禁用断言
    <span class="token operator">-</span>esa <span class="token operator">|</span> <span class="token operator">-</span>enablesystemassertions
                  启用系统断言
    <span class="token operator">-</span>dsa <span class="token operator">|</span> <span class="token operator">-</span>disablesystemassertions
                  禁用系统断言
    <span class="token operator">-</span>agentlib<span class="token operator">:</span><span class="token operator">&lt;</span>库名<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>选项<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  加载本机代理库 <span class="token operator">&lt;</span>库名<span class="token operator">&gt;</span><span class="token punctuation">,</span> 例如 <span class="token operator">-</span>agentlib<span class="token operator">:</span>jdwp
                  另请参阅 <span class="token operator">-</span>agentlib<span class="token operator">:</span>jdwp<span class="token operator">=</span>help
    <span class="token operator">-</span>agentpath<span class="token operator">:</span><span class="token operator">&lt;</span>路径名<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>选项<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  按完整路径名加载本机代理库
    <span class="token operator">-</span>javaagent<span class="token operator">:</span><span class="token operator">&lt;</span>jar 路径<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>选项<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                  加载 <span class="token class-name">Java</span> 编程语言代理<span class="token punctuation">,</span> 请参阅 java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>instrument
    <span class="token operator">-</span>splash<span class="token operator">:</span><span class="token operator">&lt;</span>图像路径<span class="token operator">&gt;</span>
                  使用指定的图像显示启动屏幕
                  自动支持和使用 <span class="token class-name">HiDPI</span> 缩放图像
                  <span class="token punctuation">(</span>如果可用<span class="token punctuation">)</span>。应始终将未缩放的图像文件名 <span class="token punctuation">(</span>例如<span class="token punctuation">,</span> image<span class="token punctuation">.</span>ext<span class="token punctuation">)</span>
                  作为参数传递给 <span class="token operator">-</span>splash 选项。
                  将自动选取提供的最合适的缩放
                  图像。
                  有关详细信息<span class="token punctuation">,</span> 请参阅 <span class="token class-name">SplashScreen</span> <span class="token constant">API</span> 文档
    <span class="token annotation punctuation">@argument</span> 文件
                  一个或多个包含选项的参数文件
    <span class="token operator">-</span>disable<span class="token operator">-</span><span class="token annotation punctuation">@files</span>
                  阻止进一步扩展参数文件
    <span class="token operator">--</span>enable<span class="token operator">-</span>preview
                  允许类依赖于此发行版的预览功能
要为长选项指定参数<span class="token punctuation">,</span> 可以使用 <span class="token operator">--</span><span class="token operator">&lt;</span>名称<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>值<span class="token operator">&gt;</span> 或
<span class="token operator">--</span><span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>值<span class="token operator">&gt;</span>。

➜  <span class="token class-name">Desktop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测 Java 版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>➜  <span class="token class-name">Desktop</span> java <span class="token operator">--</span>version
java <span class="token number">14.0</span><span class="token number">.1</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">14</span>
<span class="token class-name">Java</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token constant">SE</span> <span class="token class-name">Runtime</span> <span class="token class-name">Environment</span> <span class="token punctuation">(</span>build <span class="token number">14.0</span><span class="token number">.1</span><span class="token operator">+</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token class-name">Java</span> <span class="token class-name">HotSpot</span><span class="token punctuation">(</span><span class="token constant">TM</span><span class="token punctuation">)</span> <span class="token number">64</span><span class="token operator">-</span><span class="token class-name">Bit</span> <span class="token class-name">Server</span> <span class="token constant">VM</span> <span class="token punctuation">(</span>build <span class="token number">14.0</span><span class="token number">.1</span><span class="token operator">+</span><span class="token number">7</span><span class="token punctuation">,</span> mixed mode<span class="token punctuation">,</span> sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测-javac-version" tabindex="-1"><a class="header-anchor" href="#检测-javac-version" aria-hidden="true">#</a> 检测 <code>javac --version</code>：</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>➜  <span class="token class-name">Desktop</span> javac <span class="token operator">--</span>version
javac <span class="token number">14.0</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="你好javall" tabindex="-1"><a class="header-anchor" href="#你好javall" aria-hidden="true">#</a> 你好JAVAll</h2><h2 id="你好-java" tabindex="-1"><a class="header-anchor" href="#你好-java" aria-hidden="true">#</a> 你好 Java</h2><h2 id="java-代码编译运行" tabindex="-1"><a class="header-anchor" href="#java-代码编译运行" aria-hidden="true">#</a> Java 代码编译运行</h2><ol start="0"><li>新建 java 代码：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuickSand</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello QuickSand!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// line</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Java 编译</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>javac <span class="token class-name">QuickSand</span><span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ol><li>如果运行之后没有任何输出，表面代码编写正确</li><li>如果代码写错则报错</li></ol></blockquote><p>Java 编译是检测 java 语法是否错误，区别于 Python 是边编译边运行。如果 Java 编译未报错，则会在当前 java 文件路径下，生成 QuickSand.class。</p><p>运行 Java ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>java <span class="token class-name">QuickSand</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips:</h2><p>Windows 命令行命令：dir:查看当前路径下的文件&amp;文件夹</p><p>Mac:ls:xxxxxx</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',23),k={class:"custom-container info"},v=a("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=a("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=a("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"方法二：微信：Jiabcdefh",-1),j=a("p",null,[a("img",{src:p,alt:"",loading:"lazy"})],-1);function _(x,f){const n=r("ExternalLinkIcon");return o(),l("div",null,[d,a("div",k,[v,m,b,a("p",null,[s("方法一："),a("a",h,[s("QQ"),c(n)])]),g]),j])}const Q=t(u,[["render",_],["__file","40.html.vue"]]);export{Q as default};