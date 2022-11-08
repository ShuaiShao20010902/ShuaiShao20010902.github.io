import{_ as t}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,d as c,e as l,r as u}from"./app.7a4c2724.js";const r={},d=l(`<h1 id="_1-实现-python-分割视频" tabindex="-1"><a class="header-anchor" href="#_1-实现-python-分割视频" aria-hidden="true">#</a> 1. 实现 Python 分割视频</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: AI悦创</span>
<span class="token comment"># @Date:   2022-05-19 11:40:50</span>
<span class="token comment"># @Last Modified by:   aiyc</span>
<span class="token comment"># @Last Modified time: 2022-05-20 11:28:48</span>
<span class="token keyword">import</span> os<span class="token punctuation">,</span> time

<span class="token keyword">def</span> <span class="token function">parse_path</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># for i in os.walk(path):</span>
	<span class="token keyword">for</span> dirpath<span class="token punctuation">,</span> dirnames<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># print(i)</span>
		<span class="token keyword">for</span> path <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
			<span class="token comment"># print(os.path.join(dirpath, path))</span>
			<span class="token comment"># file_path = os.path.join(dirpath, path)</span>
			<span class="token comment"># if file_path.split(&quot;.&quot;)[-1] == &quot;mp4&quot;: </span>
			<span class="token keyword">if</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;mp4&quot;</span><span class="token punctuation">:</span> 
				<span class="token comment"># print(file_path)</span>
				<span class="token keyword">return</span> path

<span class="token keyword">def</span> <span class="token function">generate_html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">def</span> <span class="token function">split_movie</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> movie_name<span class="token operator">=</span><span class="token string">&quot;Defualt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># os.system(&quot;cd result&quot;)</span>
	os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定输出路径</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
	os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;ffmpeg -i </span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string"> -profile:v &quot;</span></span> \\
		<span class="token string">&quot;baseline -level 3.0 -s 1920x1080 -start_number 0 &quot;</span> \\
		<span class="token string-interpolation"><span class="token string">f&quot;-hls_time 10 -hls_list_size 0 -f hls </span><span class="token interpolation"><span class="token punctuation">{</span>movie_name<span class="token punctuation">}</span></span><span class="token string">.m3u8&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	path <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
	file_path <span class="token operator">=</span> parse_path<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	r_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
	<span class="token comment"># movie_name = file_path.split(&quot;.&quot;)[0].replace(&quot;\\\\&quot;, &quot;&quot;)</span>
	movie_name <span class="token operator">=</span> file_path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;r_path: </span><span class="token interpolation"><span class="token punctuation">{</span>r_path<span class="token punctuation">}</span></span><span class="token string">, \\nmovie_name: </span><span class="token interpolation"><span class="token punctuation">{</span>movie_name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
	<span class="token comment"># print(os.getcwd())</span>
	<span class="token comment"># print(os.path.join(os.getcwd(), file_path))</span>
	split_movie<span class="token punctuation">(</span>r_path<span class="token punctuation">,</span> movie_name<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',4),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),_=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"方法二：微信：Jiabcdefh",-1),f=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function q(g,y){const a=u("ExternalLinkIcon");return o(),i("div",null,[d,n("div",k,[m,v,_,n("p",null,[s("方法一："),n("a",h,[s("QQ"),c(a)])]),b]),f])}const j=e(r,[["render",q],["__file","09.html.vue"]]);export{j as default};