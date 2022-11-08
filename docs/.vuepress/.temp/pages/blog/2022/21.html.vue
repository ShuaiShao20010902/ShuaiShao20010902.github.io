<template><div><p>你好，我是悦创。</p>
<p>在之前的内容中，我们分享了办公自动化的 Excel 写入。</p>
<p>那现在这个部分呢，就是为了给你更好的练习，我来带你实现：自动生成电话号码并使用 api 验证电话号码有效性。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/13 19:27</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: hw01.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> random<span class="token punctuation">,</span> xlwt


<span class="token comment"># SET_PHONE = set()</span>


<span class="token keyword">def</span> <span class="token function">parse_loop</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
	template <span class="token operator">=</span> <span class="token string">"{haoduan}{weihao}"</span>
	<span class="token comment"># weihao = random.randrange(10000000, 99999999)</span>
	weihao <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">11111111</span><span class="token punctuation">,</span> <span class="token number">99999999</span><span class="token punctuation">)</span>
	<span class="token comment"># print(weihao)</span>
	<span class="token comment"># global phone_number</span>
	phone_number <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>haoduan<span class="token operator">=</span>value<span class="token punctuation">,</span> weihao<span class="token operator">=</span>weihao<span class="token punctuation">)</span>
	<span class="token comment"># print(key, phone_number)</span>
	<span class="token keyword">return</span> phone_number


<span class="token keyword">def</span> <span class="token function">generate_phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	phone_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token string">"中国联通"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'130'</span><span class="token punctuation">,</span> <span class="token string">'131'</span><span class="token punctuation">,</span> <span class="token string">'132'</span><span class="token punctuation">,</span> <span class="token string">'145'</span><span class="token punctuation">,</span> <span class="token string">'155'</span><span class="token punctuation">,</span> <span class="token string">'156'</span><span class="token punctuation">,</span> <span class="token string">'166'</span><span class="token punctuation">,</span> <span class="token string">'175'</span><span class="token punctuation">,</span> <span class="token string">'176'</span><span class="token punctuation">,</span> <span class="token string">'185'</span><span class="token punctuation">,</span> <span class="token string">'186'</span><span class="token punctuation">,</span> <span class="token string">'196'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">"中国电信"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'133'</span><span class="token punctuation">,</span> <span class="token string">'149'</span><span class="token punctuation">,</span> <span class="token string">'153'</span><span class="token punctuation">,</span> <span class="token string">'180'</span><span class="token punctuation">,</span> <span class="token string">'181'</span><span class="token punctuation">,</span> <span class="token string">'189'</span><span class="token punctuation">,</span> <span class="token string">'173'</span><span class="token punctuation">,</span> <span class="token string">'177'</span><span class="token punctuation">,</span> <span class="token string">'190'</span><span class="token punctuation">,</span> <span class="token string">'191'</span><span class="token punctuation">,</span> <span class="token string">'193'</span><span class="token punctuation">,</span> <span class="token string">'199'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">"中国移动"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'134'</span><span class="token punctuation">,</span> <span class="token string">'135'</span><span class="token punctuation">,</span> <span class="token string">'136'</span><span class="token punctuation">,</span> <span class="token string">'137'</span><span class="token punctuation">,</span> <span class="token string">'138'</span><span class="token punctuation">,</span> <span class="token string">'139'</span><span class="token punctuation">,</span> <span class="token string">'147'</span><span class="token punctuation">,</span> <span class="token string">'150'</span><span class="token punctuation">,</span> <span class="token string">'151'</span><span class="token punctuation">,</span> <span class="token string">'152'</span><span class="token punctuation">,</span> <span class="token string">'157'</span><span class="token punctuation">,</span> <span class="token string">'158'</span><span class="token punctuation">,</span> <span class="token string">'159'</span><span class="token punctuation">,</span> <span class="token string">'172'</span><span class="token punctuation">,</span>
		             <span class="token string">'178'</span><span class="token punctuation">,</span> <span class="token string">'182'</span><span class="token punctuation">,</span> <span class="token string">'183'</span><span class="token punctuation">,</span> <span class="token string">'184'</span><span class="token punctuation">,</span> <span class="token string">'187'</span><span class="token punctuation">,</span> <span class="token string">'188'</span><span class="token punctuation">,</span> <span class="token string">'195'</span><span class="token punctuation">,</span> <span class="token string">'197'</span><span class="token punctuation">,</span> <span class="token string">'198'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	key <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>phone_dict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	value <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>phone_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
	phone_number <span class="token operator">=</span> parse_loop<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	<span class="token comment"># return key, phone_number</span>
	<span class="token keyword">return</span> phone_number


<span class="token comment"># 手机号码归属地查询 Python示例代码</span>
<span class="token keyword">def</span> <span class="token function">jude_phone</span><span class="token punctuation">(</span>phone_number<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	url <span class="token operator">=</span> <span class="token string">'https://hcapi02.api.bdymkt.com/mobile'</span>
	params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	params<span class="token punctuation">[</span><span class="token string">'mobile'</span><span class="token punctuation">]</span> <span class="token operator">=</span> phone_number

	headers <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token string">'Content-Type'</span><span class="token punctuation">:</span> <span class="token string">'application/json;charset=UTF-8'</span><span class="token punctuation">,</span>
		<span class="token string">'X-Bce-Signature'</span><span class="token punctuation">:</span> <span class="token string">'AppCode/38c548d4357c487185d818ed4da79a1a'</span>
	<span class="token punctuation">}</span>
	r <span class="token operator">=</span> requests<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> params<span class="token operator">=</span>params<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
	<span class="token comment"># print(r.json())</span>
	<span class="token keyword">return</span> r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">phone_number_exists</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> json<span class="token punctuation">[</span><span class="token string">"code"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
		key <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"types"</span><span class="token punctuation">]</span>
		city <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"city"</span><span class="token punctuation">]</span>
		city_code <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"city_code"</span><span class="token punctuation">]</span>
		prov <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"prov"</span><span class="token punctuation">]</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> city<span class="token punctuation">,</span> city_code<span class="token punctuation">,</span> prov<span class="token punctuation">]</span>
	<span class="token keyword">elif</span> json<span class="token punctuation">[</span><span class="token string">"code"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">400</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">write_excel</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
	wb <span class="token operator">=</span> xlwt<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
	sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>add_sheet<span class="token punctuation">(</span><span class="token string">"sheet"</span><span class="token punctuation">)</span>
	head_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"手机号"</span><span class="token punctuation">,</span> <span class="token string">"类型"</span><span class="token punctuation">,</span> <span class="token string">"城市"</span><span class="token punctuation">,</span> <span class="token string">"城市代号"</span><span class="token punctuation">,</span> <span class="token string">"省份"</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> head <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>head_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> head<span class="token punctuation">)</span>
	<span class="token keyword">for</span> row<span class="token punctuation">,</span> detail_list <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> detail_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> detail_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> detail_list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> detail_list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> detail_list<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">"phone.xls"</span><span class="token punctuation">)</span>



<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	r <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		result_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		phone_number <span class="token operator">=</span> generate_phone<span class="token punctuation">(</span><span class="token punctuation">)</span>
		r_json <span class="token operator">=</span> jude_phone<span class="token punctuation">(</span>phone_number<span class="token punctuation">)</span>
		result_exists <span class="token operator">=</span> phone_number_exists<span class="token punctuation">(</span>r_json<span class="token punctuation">)</span>
		<span class="token keyword">if</span> result_exists<span class="token punctuation">:</span>
			result_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>phone_number<span class="token punctuation">)</span>
			result_lst<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>result_exists<span class="token punctuation">)</span>
			r<span class="token punctuation">.</span>append<span class="token punctuation">(</span>result_lst<span class="token punctuation">)</span>
			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"result_lst:>>>"</span><span class="token punctuation">,</span> result_lst<span class="token punctuation">)</span>
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"continue..."</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
	write_excel<span class="token punctuation">(</span>r<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># print(generate_phone())</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


