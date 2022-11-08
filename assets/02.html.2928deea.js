import{_ as n}from"./gzh.b03adfd2.js";import{_ as a}from"./zsxq.77f6dc86.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as e,d,b as i,e as t,r as o}from"./app.ec8dcd9c.js";const h="/assets/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393831343830313337382d62636364613461632d303435362d346238322d396564612d3764386130383861373632372e706e67.0cf14f7a.png",u="/assets/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393831343930303735382d38646463643662352d393661362d346363642d386663302d3565666536653761363138312e706e67.e25174fc.png",v="/assets/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393831353132383838322d37393666613663352d313062642d343065652d393066622d3837363037323530383835612e706e67.421c3428.png",m="/assets/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393831353234313633372d37323734333131322d616666302d343039622d396530322d3061303361373636363130382e706e67.70a73ad8.png",p={},g=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在翻译完 TypeScript 官方文档后，我用 VuePress 搭建博客，又实现了 GitHub 和 Gitee Pages 的自动部署，但我最终还是决定自己建站，而在建站的过程中，必不可少会用到 Linux 命令，所以此篇写一份基本够用的 Linux 命令，会涵盖博客搭建系列文章用到的各种命令，方便查询和学习使用。</p><h2 id="_0-owner、group、others、root" tabindex="-1"><a class="header-anchor" href="#_0-owner、group、others、root" aria-hidden="true">#</a> 0. Owner、Group、Others、Root</h2><p>Linux 系统是一种多用户系统，它将文件访问者身份分为三种：</p><h3 id="文件所有者-owner" tabindex="-1"><a class="header-anchor" href="#文件所有者-owner" aria-hidden="true">#</a> 文件所有者（Owner）</h3><p>当创建一个用户的时候，Linux 会为该用户创建一个主目录，路径为 <code>/home/&lt;username&gt;</code>，我们可以使用 <code>cd ~</code>，快捷进入主目录。如果你想放一个私密文件，就可以放在自己的主目录里，然后设置只能自己查看。</p><h3 id="群组-group" tabindex="-1"><a class="header-anchor" href="#群组-group" aria-hidden="true">#</a> 群组（Group）</h3><p>每个用户都有一个用户组，方便多人操作的时候，为一群人分配权限。当创建用户的时候，会自动创建一个与它同名的用户组。</p><p>如果一个用户同时属于多个组，用户需要在用户组之间切换，才能具有其他用户组的权限。</p><h3 id="其他人-others" tabindex="-1"><a class="header-anchor" href="#其他人-others" aria-hidden="true">#</a> 其他人（Others）</h3><p>既不是文件所有者又不是文件所属群组成员的用户，就是其他人。</p><h3 id="超级用户-root" tabindex="-1"><a class="header-anchor" href="#超级用户-root" aria-hidden="true">#</a> 超级用户（Root）</h3><p>Root 用户是一类特殊的用户，该用户可以访问所有文件。</p><h2 id="_1-adduser-添加用户-和-passwd-更改密码" tabindex="-1"><a class="header-anchor" href="#_1-adduser-添加用户-和-passwd-更改密码" aria-hidden="true">#</a> 1. adduser 添加用户 和 passwd 更改密码</h2><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 添加一个名为 git 的用户
adduser git
# 设置 git 用户的密码
passwd git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是由于创建的用户权限较低，有的时候我们需要为用户提权，此时我们可以这样做：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 会打开 sudoers 配置文件
sudo visudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意同样是编辑 <code>sudoers</code> 配置文件，使用这个命令会比使用 <code>sudo vim /etc/ sudoers</code> 更安全， 除了对语法有校验，并且还会在多用户编辑的时候锁住文件。</p><p>打开 <code>sudoers</code> 配置文件后，我们添加这样一行配置：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># Allow git to run any commands anywhere
git ALL=(ALL:ALL) ALL 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简单解释下这句话 <code>git ALL=(ALL:ALL) ALL </code>：</p><ul><li>git 表示规则应用的用户名</li><li>第一个 <code>ALL</code> 表示规则应用于所有 hosts</li><li>第二个 <code>ALL</code> 表示规则应用于所有 users</li><li>第三个 <code>ALL</code> 表示规则应用于所有 groups</li><li>第四个 <code>ALL</code> 表示规则应用于所有 commands</li></ul><p>我们保存退出后，<code>git</code> 用户就会获得 root 权限。</p><h2 id="_2-ls-列出文件和目录" tabindex="-1"><a class="header-anchor" href="#_2-ls-列出文件和目录" aria-hidden="true">#</a> 2. ls 列出文件和目录</h2><ol><li><code>ls</code> 列出文件和目录</li></ol><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze learn-typescript.git]# ls
branches  config  description  HEAD  hooks  index  info  objects  refs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>ls -la</code> 由 <code>-a</code> 显示所有文件和目录（包括隐藏）和 <code>-l</code> 显示详细列表组成：</li></ol><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze learn-typescript.git]# ls -la
总用量 20
drwxrwxr-x  7 git git  132 12月 15 12:33 .
drwx------  3 git git  127 12月 15 14:51 ..
drwxrwxr-x  2 git git    6 12月 15 12:21 branches
-rw-rw-r--  1 git git   66 12月 15 12:21 config
-rw-rw-r--  1 git git   73 12月 15 12:21 description
-rw-rw-r--  1 git git   23 12月 15 12:21 HEAD
drwxrwxr-x  2 git git 4096 12月 15 13:10 hooks
-rw-rw-r--  1 git git  217 12月 15 12:33 index
drwxrwxr-x  2 git git   21 12月 15 12:21 info
drwxrwxr-x 10 git git   90 12月 15 12:33 objects
drwxrwxr-x  4 git git   31 12月 15 12:21 refs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一行都有 7 列，我们以 <code>branches</code> 为例讲解每列的含义：</p><table><thead><tr><th>drwxrwxr-x</th><th>2</th><th>git</th><th>git</th><th>6</th><th>12月 15 12:21</th><th>branches</th></tr></thead><tbody><tr><td>文件类型和权限信息</td><td>链接数或者一级子目录数</td><td>所有者</td><td>所属组</td><td>文件大小，单位字节</td><td>最后修改时间</td><td>文件名</td></tr></tbody></table><p>重点看第 1 列的内容，以 <code>drwxrwxr-x</code> 为例，这里一共 10 位，第 1 位表示文件类型，其中 <code>-</code> 表示普通文件，<code>d</code> 表示目录文件。</p><p>第 2 到第 4 位，表示所有者权限，其中 <code>r</code> 表示读权限，<code>w</code> 表示写权限，<code>x</code> 表示可执行权限， <code>-</code>表示无权限，第 2 到 5 位为 <code>rwx</code>，表示所有者可读可写可执行。</p><p>第 5 到第 7 位，表示组用户权限，这里也是 <code>rwx</code>。</p><p>第 8 到第 10 位，表示其他用户权限，这里是 <code>r-x</code>，表示有可读可执行权限，无写入权限。</p><p>这里再额外补充一点：</p><p>像 <code>root</code> 用户创建文件夹的默认权限为 <code>rwxr-xr-x</code>:</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze www]# mkdir test
[root@iZ2ze www]# ls -l

drwxr-xr-x  2 root root  6 12月 17 23:53 test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而创建文件的默认权限是 <code>rw-r--r--</code>，注意创建文件默认会去掉 <code>x</code> 权限：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze www]# touch index.html
[root@iZ2ze www]# ls -l

-rw-r--r--  1 root root  0 12月 17 23:54 index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是为什么我们有的时候需要在创建文件后，又加上执行权限。</p><h2 id="_3-chown-更改文件属主-也可以同时更改文件属组" tabindex="-1"><a class="header-anchor" href="#_3-chown-更改文件属主-也可以同时更改文件属组" aria-hidden="true">#</a> 3. chown 更改文件属主，也可以同时更改文件属组</h2><p><strong>chown (change owner)</strong> 语法：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># -R：递归更改文件属组
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>index.html</code> 的所有者更改为 <code>git</code>：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze www]# chown git index.html
[root@iZ2ze www]# ls -

-rw-r--r-- 1 git  root  0 12月 17 23:54 index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>index.html</code> 的所有者和群组都改为 <code>git</code>：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze www]# chown git:git index.html
[root@iZ2ze www]# ls -l

-rw-r--r-- 1 git  git   0 12月 17 23:54 index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-chmod-更改文件权限" tabindex="-1"><a class="header-anchor" href="#_4-chmod-更改文件权限" aria-hidden="true">#</a> 4. chmod 更改文件权限</h2><p>权限除了用 <code>r</code> <code>w</code> <code>x</code> 这种方式表示，也可以用数字表示，数组与字母的对应关系为：</p><ul><li>r:4</li><li>w:2</li><li>x:1</li></ul><p>之所有如此对应关系，主要还是为了方便推导，比如我们希望一个文件可读可写，那我们可以方便的设置权限为 6（4 + 2），同样，如果我们知道一个权限为 3，我们也可以推导出权限为可写可执行，因为只有 2 + 1 才可能等于 3。</p><p>我们看下 <strong>chmod （change mode）</strong> 的具体语法：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># -R：递归更改文件属组
chmod [-R] xyz 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 xyz 分别表示 Owner、Group、Others 的权限，如果我们这样设置一个文件的权限：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>chmod 750 index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以得知，Owner 的权限为 7，为可读可写可执行，Group 的权限为 5，为可读可执行，Others 的权限为 0，表示不可读写不可执行。对应字母为：<code>rwxr-x---</code>。</p><p>除了这种数字的方式，还有一种使用符号类型改变权限的方式：</p><p>在这种方式里，我们将三种身份 <code>Owner</code>、<code>Group</code>、<code>Others</code>，分别简写为 <code>u（User）</code>、<code>g</code>、<code>o</code>，用 <code>a</code> 表示所有身份，再使用 <code>+</code> <code>-</code> <code>=</code> 表示加入、去除、设定一个权限，<code>r</code> <code>w</code> <code>x</code> 则继续表示读，写，执行权限，举个例子：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>chmod u+x,g-x,o-x index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思就是 <code>Owner</code> 加上执行权限，<code>Group</code> 和 <code>Others</code> 去除执行权限。</p><p>当然我们也可以直接设定权限</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>chmod u=rwx,g=rx,o=r index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时文件的权限就相当于 <code>-rwxr-xr--</code>。</p><p>此外，我们还可以省略不写 <code>ugoa</code> 这类身份内容，直接写：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>chmod +x index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时相当于使用了 <code>a</code>，会给所有身份添加执行权限。</p><h2 id="_5-su-切换身份" tabindex="-1"><a class="header-anchor" href="#_5-su-切换身份" aria-hidden="true">#</a> 5. su 切换身份</h2><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 切换为 git 用户
su git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-whoami-显示用户名" tabindex="-1"><a class="header-anchor" href="#_6-whoami-显示用户名" aria-hidden="true">#</a> 6. whoami 显示用户名</h2><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># whoami 
root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-pwd-显示当前目录" tabindex="-1"><a class="header-anchor" href="#_7-pwd-显示当前目录" aria-hidden="true">#</a> 7. pwd 显示当前目录</h2><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[git@iZ2ze www]$ pwd
/home/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-cd-切换工作目录" tabindex="-1"><a class="header-anchor" href="#_9-cd-切换工作目录" aria-hidden="true">#</a> 9. cd 切换工作目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 进入 /home/www/
cd /home/www

# 进入自己的主目录
cd ~

# 进入当前目录的上上两层 :
cd ../..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-mkdir-创建目录" tabindex="-1"><a class="header-anchor" href="#_10-mkdir-创建目录" aria-hidden="true">#</a> 10. mkdir 创建目录</h2><ol><li><code>mkdir</code> 创建目录：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir new_folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><code>mkdir -p</code> 递归创建目录：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p one/two/three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-touch-创建文件" tabindex="-1"><a class="header-anchor" href="#_11-touch-创建文件" aria-hidden="true">#</a> 11. touch 创建文件</h2><p>用于修改文件或者目录的时间属性，当文件不存在，系统会创建空白文件</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>touch new_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-echo-打印输出" tabindex="-1"><a class="header-anchor" href="#_12-echo-打印输出" aria-hidden="true">#</a> 12. echo 打印输出</h2><p>echo 是 Shell 命令，用于打印输出：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 显示转义字符
echo &quot;\\&quot;test content\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建或覆盖文件内容为 &quot;test content&quot;：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>echo &quot;test content&quot; &gt; index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是想追加内容，就用 <code>&gt;&gt;</code> ：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>[root@iZ2ze www]# echo &quot;test content&quot; &gt; index.html
[root@iZ2ze www]# cat index.html
test content
[root@iZ2ze www]# echo &quot;test content&quot; &gt;&gt; index.html
[root@iZ2ze www]# cat index.html
test content
test content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-cat-连接文件并打印输出" tabindex="-1"><a class="header-anchor" href="#_13-cat-连接文件并打印输出" aria-hidden="true">#</a> 13. cat 连接文件并打印输出</h2><p>查看文件内容：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>cat ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清空 index.html 内容：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>cat /dev/null &gt; index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 index.html 的内容写入 second.html：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>cat index.html &gt; second.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 index.html 的内容追加写入 second.html：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>cat index.html &gt;&gt; second.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 index.html 和 second.html 追加写入 third.html：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>cat index.html second.html &gt;&gt; third.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-cp-复制文件或目录" tabindex="-1"><a class="header-anchor" href="#_14-cp-复制文件或目录" aria-hidden="true">#</a> 14. cp 复制文件或目录</h2><p>将目录 website/ 下的所有文件复制到新目录 static 下：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件。
cp –r website/ static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-mv-移动并重命名" tabindex="-1"><a class="header-anchor" href="#_15-mv-移动并重命名" aria-hidden="true">#</a> 15. mv 移动并重命名</h2><p>文件改名：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>mv index.html index2.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>隐藏文件：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 文件名上加上 .
mv index.html .index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>移动文件：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 仅仅移动
mv  /home/www/index.html   /home/static/
# 移动又重命名
mv /home/www/index.html   /home/static/index2.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量移动：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>mv  /home/www/website/*  /home/www/static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_16-rm-删除一个文件或者目录" tabindex="-1"><a class="header-anchor" href="#_16-rm-删除一个文件或者目录" aria-hidden="true">#</a> 16. rm 删除一个文件或者目录</h3><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># 系统会询问
rm file

# -f 表示直接删除
# -r 表示目录下的所有文件删除

# 删除当前目录下的所有文件及目录
rm -r  * 

# 跑路
rm -rf /*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-vi-vim" tabindex="-1"><a class="header-anchor" href="#_17-vi-vim" aria-hidden="true">#</a> 17. vi/vim</h2><p>Linux 内建 vi 文书编辑器，Vim 是从 vi 发展出来的一个文本编辑器。</p><p>基本上 vi/vim 共分为三种模式，分别是<strong>命令模式（Command mode）</strong>，<strong>输入模式（Insert mode</strong>）和<strong>底线命令模式（Last line mode）</strong>。我们边操作边介绍这三种模式： ​ 我们执行 <code>vim index.html</code>，如果没有该文件，则会创建文件：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>vim index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时界面为：</p><p><img src="`+h+'" alt="img" loading="lazy"></p><p>此时是<strong>命令模式</strong>，在命令模式下，输入的任何字符都会被视为命令，接下来几个常用的命令：</p><ul><li>i 切换到输入模式。</li><li>x 删除当前光标所在处的字符。</li><li>: 切换到底线命令模式。</li></ul><p>我们按下 <code>i</code>，便会进入<strong>输入模式</strong>：</p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>输入模式下，左下角有 <code>-- INSERT --</code> 标志：</p><p>此时我们可以进行各种输入，当输入完毕后，按下 ESC 回到命令模式：</p><p><img src="'+v+'" alt="img" loading="lazy"></p><p>此时左下角的 INSERT已经消失不见了，如果我们要保存退出，我们先输入 <code>:</code> ，进入<strong>底线命令模式</strong>：</p><p><img src="'+m+`" alt="img" loading="lazy"></p><p>在底线命令模式中，常见的命令有：</p><ul><li>w 保存文件</li><li>q 退出程序</li></ul><p>我们输入 <code>wq</code>，表示保存并退出，此时我们就会发现并创建了一个 HTML 文件。</p><h2 id="_18-ssh-远程连接工具" tabindex="-1"><a class="header-anchor" href="#_18-ssh-远程连接工具" aria-hidden="true">#</a> 18. ssh 远程连接工具</h2><p>注意 ssh 监听是 22 端口。</p><p>其基本语法为：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>ssh [OPTIONS] [-p PORT] [USER@]HOSTNAME [COMMAND]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监听端口示例：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code>ssh -p 300 git@8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开调试模式：</p><div class="language-ssh line-numbers-mode" data-ext="ssh"><pre class="language-ssh"><code># -v 冗详模式，打印关于运行情况的调试信息
ssh -v git@8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系列文章" tabindex="-1"><a class="header-anchor" href="#系列文章" aria-hidden="true">#</a> 系列文章</h2>`,141),b={href:"https://github.com/BornforthisHJB/BornforthisHJB.github.io",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"如果有错误或者不严谨的地方，请务必给予指正，十分感谢。如果喜欢或者 有所启发，欢迎 star，对作者也是一种鼓励。",-1),w=e("p",null,"欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！",-1),_=e("details",{class:"custom-container details"},[e("summary",null,"公众号：AI悦创【二维码】"),e("p",null,[e("img",{src:n,alt:"",loading:"lazy"})])],-1),f={class:"custom-container info"},L=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),z=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),A=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),y={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"方法二：微信：Jiabcdefh",-1),O=e("p",null,[e("img",{src:a,alt:"",loading:"lazy"})],-1);function k(Z,R){const s=o("ExternalLinkIcon");return l(),c("div",null,[g,e("p",null,[d("系列文章目录地址："),e("a",b,[d("https://github.com/BornforthisHJB/BornforthisHJB.github.io"),i(s)])]),x,w,_,e("div",f,[L,z,A,e("p",null,[d("方法一："),e("a",y,[d("QQ"),i(s)])]),q]),O])}const N=r(p,[["render",k],["__file","02.html.vue"]]);export{N as default};
