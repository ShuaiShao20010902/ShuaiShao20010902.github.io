<template><div><p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/e7ebf8c2cbda7afae59fcac0d9314b7f.jpg" alt="img" loading="lazy"></p>
<p>你好，我是悦创。</p>
<p>上节课我们讲了决策树，基于信息度量的不同方式，我们可以把决策树分为 ID3 算法、C4.5 算法和 CART 算法。今天我来带你学习 CART 算法。CART 算法，英文全称叫做 Classification And Regression Tree，中文叫做分类回归树。ID3 和 C4.5 算法可以生成二叉树或多叉树，而 CART 只支持二叉树。同时 CART 决策树比较特殊，既可以作分类树，又可以作回归树。</p>
<p>那么你首先需要了解的是，什么是分类树，什么是回归树呢？</p>
<p>我用下面的训练数据举个例子，你能看到不同职业的人，他们的年龄不同，学习时间也不同。如果我构造了一棵决策树，想要基于数据判断这个人的职业身份，这个就属于分类树，因为是从几个分类中来做选择。如果是给定了数据，想要预测这个人的年龄，那就属于回归树。</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/af89317aa55ac3b9f068b0f370fcb9cf.png" alt="img" loading="lazy"></p>
<p>分类树可以处理离散数据，也就是数据种类有限的数据，它输出的是样本的类别，而回归树可以对连续型的数值进行预测，也就是数据在某个区间内都有取值的可能，它输出的是一个数值。</p>
<h2 id="cart-分类树的工作流程" tabindex="-1"><a class="header-anchor" href="#cart-分类树的工作流程" aria-hidden="true">#</a> CART 分类树的工作流程</h2>
<p>通过上一讲，我们知道决策树的核心就是寻找纯净的划分，因此引入了纯度的概念。</p>
<p>在属性选择上，我们是通过统计“不纯度”来做判断的，ID3 是基于信息增益做判断，C4.5 在 ID3 的基础上做了改进，提出了信息增益率的概念。实际上 CART 分类树与 C4.5 算法类似，只是属性选择的指标采用的是基尼系数。</p>
<p>你可能在经济学中听过说基尼系数，它是用来衡量一个国家收入差距的常用指标。当基尼系数大于 0.4 的时候，说明财富差异悬殊。基尼系数在 0.2-0.4 之间说明分配合理，财富差距不大。</p>
<p>基尼系数本身反应了样本的不确定度。当基尼系数越小的时候，说明样本之间的差异性小，不确定程度低。分类的过程本身是一个不确定度降低的过程，即纯度的提升过程。所以 CART 算法在构造分类树的时候，会选择基尼系数最小的属性作为属性的划分。</p>
<p>我们接下来详解了解一下基尼系数。基尼系数不好懂，你最好跟着例子一起手动计算下。</p>
<p>假设 t 为节点，那么该节点的 GINI 系数的计算公式为：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/f9bb4cce5b895499cabc714eb372b089.png" alt="img" loading="lazy"></p>
<p>这里 p(Ck|t) 表示节点 t 属于类别 Ck 的概率，节点 t 的基尼系数为 1 减去各类别 Ck 概率平方和。</p>
<p>通过下面这个例子，我们计算一下两个集合的基尼系数分别为多少：</p>
<p>集合 1：6 个都去打篮球；</p>
<p>集合 2：3 个去打篮球，3 个不去打篮球。</p>
<p>针对集合 1，所有人都去打篮球，所以 p(Ck|t)=1，因此 GINI(t)=1-1=0。</p>
<p>针对集合 2，有一半人去打篮球，而另一半不去打篮球，所以，<code v-pre>p(C1|t)=0.5</code>，<code v-pre>p(C2|t)=0.5</code>，<code v-pre>GINI(t)=1-（0.5*0.5+0.5*0.5）=0.5</code>。</p>
<p>通过两个基尼系数你可以看出，集合 1 的基尼系数最小，也证明样本最稳定，而集合 2 的样本不稳定性更大。</p>
<p>在 CART 算法中，基于基尼系数对特征属性进行二元分裂，假设属性 A 将节点 D 划分成了 D1 和 D2，如下图所示：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/69a90a43146898150a0de0811c6fef9a.jpg" alt="img" loading="lazy"></p>
<p>节点 D 的基尼系数等于子节点 D1 和 D2 的归一化基尼系数之和，用公式表示为：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/107fed838cb75df62eb149499db20c1e.png" alt="img" loading="lazy"></p>
<p>归一化基尼系数代表的是每个子节点的基尼系数乘以该节点占整体父亲节点 D 中的比例。</p>
<p>上面我们已经计算了集合 D1 和集合 D2 的 GINI 系数，得到：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/aa423c65b32bded13212b7e20fb65a0c.png" alt="img" loading="lazy"></p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/092a0ea87aabc5da482ff8a992691b77.png" alt="img" loading="lazy"></p>
<p>所以在属性 A 的划分下，节点 D 的基尼系数为：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/3c08d5cd66a8ea098c397e14f1469ff8.png" alt="img" loading="lazy"></p>
<p>节点 D 被属性 A 划分后的基尼系数越大，样本集合的不确定性越大，也就是不纯度越高。</p>
<h2 id="如何使用-cart-算法来创建分类树" tabindex="-1"><a class="header-anchor" href="#如何使用-cart-算法来创建分类树" aria-hidden="true">#</a> 如何使用 CART 算法来创建分类树</h2>
<p>通过上面的讲解你可以知道，CART 分类树实际上是基于基尼系数来做属性划分的。在 Python 的 sklearn 中，如果我们想要创建 CART 分类树，可以直接使用 DecisionTreeClassifier 这个类。创建这个类的时候，默认情况下 criterion 这个参数等于 gini，也就是按照基尼系数来选择属性划分，即默认采用的是 CART 分类树。</p>
<p>下面，我们来用 CART 分类树，给 iris 数据集构造一棵分类决策树。iris 这个数据集，我在 Python 可视化中讲到过，实际上在 sklearn 中也自带了这个数据集。基于 iris 数据集，构造 CART 分类树的代码如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/27 16:20</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> accuracy_score
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>tree <span class="token keyword">import</span> DecisionTreeClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris

<span class="token comment"># 准备数据集</span>
iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 获取特征集和分类标识</span>
features <span class="token operator">=</span> iris<span class="token punctuation">.</span>data
labels <span class="token operator">=</span> iris<span class="token punctuation">.</span>target
<span class="token comment"># 随机抽取33%的数据作为测试集，其余为训练集</span>
train_features<span class="token punctuation">,</span> test_features<span class="token punctuation">,</span> train_labels<span class="token punctuation">,</span> test_labels <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>features<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.33</span><span class="token punctuation">,</span>
                                                                            random_state<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 创建CART分类树</span>
clf <span class="token operator">=</span> DecisionTreeClassifier<span class="token punctuation">(</span>criterion<span class="token operator">=</span><span class="token string">'gini'</span><span class="token punctuation">)</span>
<span class="token comment"># 拟合构造CART分类树</span>
clf <span class="token operator">=</span> clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>train_features<span class="token punctuation">,</span> train_labels<span class="token punctuation">)</span>
<span class="token comment"># 用CART分类树做预测</span>
test_predict <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>test_features<span class="token punctuation">)</span>
<span class="token comment"># 预测结果与测试集结果作比对</span>
score <span class="token operator">=</span> accuracy_score<span class="token punctuation">(</span>test_labels<span class="token punctuation">,</span> test_predict<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"CART分类树准确率 %.4lf"</span> <span class="token operator">%</span> score<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>CART分类树准确率 <span class="token number">0.9600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们把决策树画出来，可以得到下面的图示：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/c1e2f9e4a299789bb6cc23afc6fd3140.png" alt="img" loading="lazy"></p>
<p>首先 train_test_split 可以帮助我们把数据集抽取一部分作为测试集，这样我们就可以得到训练集和测试集。</p>
<p>使用 <code v-pre>clf = DecisionTreeClassifier(criterion='gini')</code> 初始化一棵 CART 分类树。这样你就可以对 CART 分类树进行训练。</p>
<p>使用 <code v-pre>clf.fit(train_features, train_labels)</code> 函数，将训练集的特征值和分类标识作为参数进行拟合，得到 CART 分类树。</p>
<p>使用 <code v-pre>clf.predict(test_features)</code> 函数进行预测，传入测试集的特征值，可以得到测试结果 test_predict。</p>
<p>最后使用 <code v-pre>accuracy_score(test_labels, test_predict)</code> 函数，传入测试集的预测结果与实际的结果作为参数，得到准确率 score。</p>
<p>我们能看到 sklearn 帮我们做了 CART 分类树的使用封装，使用起来还是很方便的。</p>
<h2 id="cart-回归树的工作流程" tabindex="-1"><a class="header-anchor" href="#cart-回归树的工作流程" aria-hidden="true">#</a> CART 回归树的工作流程</h2>
<p>CART 回归树划分数据集的过程和分类树的过程是一样的，只是回归树得到的预测结果是连续值，而且评判“不纯度”的指标不同。在 CART 分类树中采用的是基尼系数作为标准，那么在 CART 回归树中，如何评价“不纯度”呢？实际上我们要根据样本的混乱程度，也就是样本的离散程度来评价“不纯度”。</p>
<p>样本的离散程度具体的计算方式是，先计算所有样本的均值，然后计算每个样本值到均值的差值。我们假设 x 为样本的个体，均值为 u。为了统计样本的离散程度，我们可以取差值的绝对值，或者方差。</p>
<p>其中差值的绝对值为样本值减去样本均值的绝对值：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/6f9677a70b1edff85e9e467f3e52bd97.png" alt="img" loading="lazy"></p>
<p>方差为每个样本值减去样本均值的平方和除以样本个数：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/045fd5afb7b53f17a8accd6f337f63c1.png" alt="img" loading="lazy"></p>
<p>所以这两种节点划分的标准，分别对应着两种目标函数最优化的标准，即用最小绝对偏差（LAD），或者使用最小二乘偏差（LSD）。这两种方式都可以让我们找到节点划分的方法，通常使用最小二乘偏差的情况更常见一些。</p>
<p>我们可以通过一个例子来看下如何创建一棵 CART 回归树来做预测。</p>
<h2 id="如何使用-cart-回归树做预测" tabindex="-1"><a class="header-anchor" href="#如何使用-cart-回归树做预测" aria-hidden="true">#</a> 如何使用 CART 回归树做预测</h2>
<p>这里我们使用到 sklearn 自带的波士顿房价数据集，该数据集给出了影响房价的一些指标，比如犯罪率，房产税等，最后给出了房价。</p>
<p>根据这些指标，我们使用 CART 回归树对波士顿房价进行预测，代码如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/27 16:38</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> mean_squared_error
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_boston
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> r2_score<span class="token punctuation">,</span> mean_absolute_error<span class="token punctuation">,</span> mean_squared_error
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>tree <span class="token keyword">import</span> DecisionTreeRegressor

<span class="token comment"># 准备数据集</span>
boston <span class="token operator">=</span> load_boston<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 探索数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boston<span class="token punctuation">.</span>feature_names<span class="token punctuation">)</span>
<span class="token comment"># 获取特征集和房价</span>
features <span class="token operator">=</span> boston<span class="token punctuation">.</span>data
prices <span class="token operator">=</span> boston<span class="token punctuation">.</span>target
<span class="token comment"># 随机抽取33%的数据作为测试集，其余为训练集</span>
train_features<span class="token punctuation">,</span> test_features<span class="token punctuation">,</span> train_price<span class="token punctuation">,</span> test_price <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>features<span class="token punctuation">,</span> prices<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.33</span><span class="token punctuation">)</span>
<span class="token comment"># 创建CART回归树</span>
dtr <span class="token operator">=</span> DecisionTreeRegressor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 拟合构造CART回归树</span>
dtr<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>train_features<span class="token punctuation">,</span> train_price<span class="token punctuation">)</span>
<span class="token comment"># 预测测试集中的房价</span>
predict_price <span class="token operator">=</span> dtr<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>test_features<span class="token punctuation">)</span>
<span class="token comment"># 测试集的结果评价</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'回归树二乘偏差均值:'</span><span class="token punctuation">,</span> mean_squared_error<span class="token punctuation">(</span>test_price<span class="token punctuation">,</span> predict_price<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'回归树绝对值偏差均值:'</span><span class="token punctuation">,</span> mean_absolute_error<span class="token punctuation">(</span>test_price<span class="token punctuation">,</span> predict_price<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果（每次运行结果可能会有不同）：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">'CRIM'</span> <span class="token string">'ZN'</span> <span class="token string">'INDUS'</span> <span class="token string">'CHAS'</span> <span class="token string">'NOX'</span> <span class="token string">'RM'</span> <span class="token string">'AGE'</span> <span class="token string">'DIS'</span> <span class="token string">'RAD'</span> <span class="token string">'TAX'</span> <span class="token string">'PTRATIO'</span> <span class="token string">'B'</span> <span class="token string">'LSTAT'</span><span class="token punctuation">]</span>
回归树二乘偏差均值<span class="token punctuation">:</span> <span class="token number">23.80784431137724</span>
回归树绝对值偏差均值<span class="token punctuation">:</span> <span class="token number">3.040119760479042</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果把回归树画出来，可以得到下面的图示（波士顿房价数据集的指标有些多，所以树比较大）：</p>
<p><img src="@source/column/data_analysis/Data-analysis-practice-45-lectures/Phase-three/18.assets/65a3855aed648b32994b808296a40b61.png" alt="img" loading="lazy"></p>
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


