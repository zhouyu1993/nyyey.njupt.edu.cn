# gulp

不支持 ES6

# dev

``` bash
npm run dev
```

open `localhost:8080/main.htm`

# build

``` bash
npm run build

npm run zip
```

# 适应移动端

``` js
(function () {
  var screenWidth = window.screen.width
  var htmlWidth = 1100
  // 比较屏幕宽度与页面宽度大小
  if (screenWidth < htmlWidth) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=' + (screenWidth / htmlWidth) + ', user-scalable=no, viewport-fit=cover');
    document.head.insertBefore(meta, document.querySelector('title'));
  }
})()
```
