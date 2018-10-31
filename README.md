# sell-food

> A Vue.js project



4-2 项目资源准备
1、切图，量尺寸
2、因为webpack，尽量切小图
3、dpr（dips） 公式：window.devicePixelRatio = 物理像素/dips）
4、svg图片 ->图标字体

4-3 图标字体制作
1、打开IcoMoon

4-5 模拟后台数据
1、？

5-1 组件拆分
1、在static/css/下 建立reset.css文件
HTML标签在浏览器中都有默认的样式，不同的浏览器的默认样式之间存在差别。
例如ul默认带有缩进样式，在IE下，它的缩进是由margin实现的，
而在Firefox下却是由padding实现的。
开发时浏览器的默认样式可能会给我们带来多浏览器兼容性问题，影响开发效率。
现在很流行的解决方式是一开始就将浏览器的默认样式全部覆盖掉，这就是css reset。

2、在index.html中引入<link rel="stylesheet" type="text/css" href="static/css/reset.css">