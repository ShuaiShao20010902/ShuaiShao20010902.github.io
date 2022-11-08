export const data = JSON.parse("{\"key\":\"v-8ce654f6\",\"path\":\"/posts/10.html\",\"title\":\"Python os 模块详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python os 模块详解\",\"date\":\"2021-09-29T15:27:09.000Z\",\"author\":\"AI悦创\",\"isOriginal\":true,\"category\":[\"技术杂谈\"],\"tag\":[\"Python\",\"os\",\"Python 库\"],\"icon\":\"blog\",\"sticky\":false,\"star\":true,\"password\":false,\"article\":true,\"timeline\":true,\"image\":false,\"navbar\":true,\"sidebarIcon\":true,\"headerDepth\":5,\"comment\":true,\"lastUpdated\":true,\"editLink\":true,\"prev\":\"09.md\",\"next\":\"11.md\",\"backToTop\":true,\"toc\":true,\"summary\":\"你好，我是悦创。 此篇文章，是为了完善 Python 办公自动化的课程，有兴趣的报名一对一办公自动化的小伙伴，可以加 V：Jiabcdefh。 如果我们要操作文件、目录，可以在命令行下面输入操作系统提供的各种命令来完成。比如 dir、cp 等命令。 如果要在 Python 程序中执行这些目录和文件的操作怎么办？ 其实操作系统提供的命令只是简单地调用了操作系统\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://bornforthis.cn/posts/10.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AI悦创\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Python os 模块详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://bornforthis.cn/\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2022-09-26T13:15:36.000Z\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Python os 模块详解\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"AI悦创\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"os\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python 库\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-09-29T15:27:09.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2022-09-26T13:15:36.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1. 简介\",\"slug\":\"_1-简介\",\"link\":\"#_1-简介\",\"children\":[]},{\"level\":2,\"title\":\"2. 常用功能\",\"slug\":\"_2-常用功能\",\"link\":\"#_2-常用功能\",\"children\":[{\"level\":3,\"title\":\"2.1 os.name\",\"slug\":\"_2-1-os-name\",\"link\":\"#_2-1-os-name\",\"children\":[]},{\"level\":3,\"title\":\"2.2 环境变量 os.environ\",\"slug\":\"_2-2-环境变量-os-environ\",\"link\":\"#_2-2-环境变量-os-environ\",\"children\":[]},{\"level\":3,\"title\":\"2.3 os.walk()\",\"slug\":\"_2-3-os-walk\",\"link\":\"#_2-3-os-walk\",\"children\":[]},{\"level\":3,\"title\":\"2.4 os.listdir()\",\"slug\":\"_2-4-os-listdir\",\"link\":\"#_2-4-os-listdir\",\"children\":[]},{\"level\":3,\"title\":\"2.5 os.mkdir()\",\"slug\":\"_2-5-os-mkdir\",\"link\":\"#_2-5-os-mkdir\",\"children\":[]},{\"level\":3,\"title\":\"2.6 os.remove()\",\"slug\":\"_2-6-os-remove\",\"link\":\"#_2-6-os-remove\",\"children\":[]},{\"level\":3,\"title\":\"2.7 os.rename()\",\"slug\":\"_2-7-os-rename\",\"link\":\"#_2-7-os-rename\",\"children\":[]},{\"level\":3,\"title\":\"2.8 os.getcwd()\",\"slug\":\"_2-8-os-getcwd\",\"link\":\"#_2-8-os-getcwd\",\"children\":[]},{\"level\":3,\"title\":\"2.9 os.chdir()\",\"slug\":\"_2-9-os-chdir\",\"link\":\"#_2-9-os-chdir\",\"children\":[]}]},{\"level\":2,\"title\":\"3. os.path 模块\",\"slug\":\"_3-os-path-模块\",\"link\":\"#_3-os-path-模块\",\"children\":[{\"level\":3,\"title\":\"3.1 os.path.join()\",\"slug\":\"_3-1-os-path-join\",\"link\":\"#_3-1-os-path-join\",\"children\":[]},{\"level\":3,\"title\":\"3.2 os.path.abspath()\",\"slug\":\"_3-2-os-path-abspath\",\"link\":\"#_3-2-os-path-abspath\",\"children\":[]},{\"level\":3,\"title\":\"3.3 os.path.basename()\",\"slug\":\"_3-3-os-path-basename\",\"link\":\"#_3-3-os-path-basename\",\"children\":[]},{\"level\":3,\"title\":\"3.4 os.path.dirname()\",\"slug\":\"_3-4-os-path-dirname\",\"link\":\"#_3-4-os-path-dirname\",\"children\":[]},{\"level\":3,\"title\":\"3.5 os.path.split()\",\"slug\":\"_3-5-os-path-split\",\"link\":\"#_3-5-os-path-split\",\"children\":[]},{\"level\":3,\"title\":\"3.6 os.path.exists() 路径是否存在\",\"slug\":\"_3-6-os-path-exists-路径是否存在\",\"link\":\"#_3-6-os-path-exists-路径是否存在\",\"children\":[]},{\"level\":3,\"title\":\"3.7 os.path.isabs()\",\"slug\":\"_3-7-os-path-isabs\",\"link\":\"#_3-7-os-path-isabs\",\"children\":[]},{\"level\":3,\"title\":\"3.8 os.path.isfile() 和 os.path.isdir()\",\"slug\":\"_3-8-os-path-isfile-和-os-path-isdir\",\"link\":\"#_3-8-os-path-isfile-和-os-path-isdir\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 总结\",\"slug\":\"_4-总结\",\"link\":\"#_4-总结\",\"children\":[]}],\"git\":{\"createdTime\":1664198136000,\"updatedTime\":1664198136000,\"contributors\":[{\"name\":\"AndersonHJB\",\"email\":\"aiyuechuang@gmail.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":21.89,\"words\":6568},\"copyright\":\"著作权归黄家宝|AI悦创所有\\n原文链接：https://bornforthis.cn/posts/10.html\",\"filePathRelative\":\"posts/10.md\",\"localizedDate\":\"2021年9月29日\"}")
