function getw1 () {
  var text = $('.webplus .articlecontent').text()
  $('.garden-overview p').html(text)
  var href = $('#wp_news_w6 .i1 a').attr('href')
  if (href)
  $('.garden-overview h1 a').attr('href', href)
}

function getw2 () {
  if (w2imgJsons) {
    var as = ''
    var spans = ''
    w2imgJsons.forEach(function (v, i) {
      as += '<a href="' + v.url + '"><img src="' + v.src + '"><p>' + v.title + '</p></a>'
      spans += i === 0 ? ('<span class="hover">' + (i + 1) + '</span>') : ('<span>' + (i + 1) + '</span>')
    })
    $('.pic-news .list').html(as)
    $('.pic-news .num').html(spans)
    var reder = function (hover) {
      $('.pic-news .list a').hide()
      $('.pic-news .list a').eq(hover).css({
        display: 'block'
      })
      $('.pic-news .num span').removeClass('hover')
      $('.pic-news .num span').eq(hover).addClass('hover')
    }
    var hover = 0
    var flag = setInterval(function () {
      hover++
      if (hover === w2imgJsons.length) {
        hover = 0
      }
      reder(hover)
    }, 5000)
    $('.pic-news .num span').click(function () {
      clearInterval(flag)
      hover = $(this).html() - 1
      reder(hover)
    })
  }
}

function getw3 () {
  if (w3imgJsons) {
    var as = ''
    w3imgJsons.forEach(function (v, i) {
      as += '<a href="' + v.url + '"><img src="' + v.src + '"></a>'
    })
    $('.banner-swipe').html(as)
    var reder = function (hover) {
      $('.banner-swipe a').hide()
      $('.banner-swipe a').eq(hover).css({
        display: 'block'
      })
    }
    var hover = 0
    var flag = setInterval(function () {
      hover++
      if (hover === w3imgJsons.length) {
        hover = 0
      }
      reder(hover)
    }, 5000)
  }
}

function getw4 () {
  var href = $('#wp_news_w4 .more-link').attr('href')
  if (href) {
    $('.news-info h1 a').attr('href', href)
  } else {
    $('.news-info h1 a').hide()
  }
  var as = ''
  var list = $('#wp_news_w4 .list_item')
  Array.prototype.slice.call(list).forEach(function (v) {
    var a = $(v).find('a')
    var href = a.attr('href')
    var text = a.attr('title')
    var time = $(v).find('.Article_PublishDate').text()
    as += '<a href="' + href + '"><p><i></i>' + text + '</p><span>' + time + '</span></a>'
  })
  $('.news-info .list').html(as)
}

function getw5 () {
  var href = $('#wp_news_w5 .more-link').attr('href')
  if (href) {
    $('.notice-info h1 a').attr('href', href)
  } else {
    $('.notice-info h1 a').hide()
  }
  var as = ''
  var list = $('#wp_news_w5 .list_item')
  Array.prototype.slice.call(list).forEach(function (v) {
    var a = $(v).find('a')
    var href = a.attr('href')
    var text = a.attr('title')
    var time = $(v).find('.Article_PublishDate').text()
    as += '<a href="' + href + '"><p><i></i>' + text + '</p><span>' + time + '</span></a>'
  })
  $('.notice-info .list').html(as)
}

function getw7 () {
  var href = $('#wp_news_w7 .more-link').attr('href')
  if (href) {
    $('.health-column h1 a').attr('href', href)
  } else {
    $('.health-column h1 a').hide()
  }
  var as = ''
  var list = $('#wp_news_w7 .list_item')
  Array.prototype.slice.call(list).forEach(function (v) {
    var a = $(v).find('a')
    var href = a.attr('href')
    var text = a.attr('title')
    var time = $(v).find('.Article_PublishDate').text()
    as += '<a href="' + href + '"><p><i></i>' + text + '</p><span>' + time + '</span></a>'
  })
  $('.health-column .list').html(as)
}

(function() {
  try {
    if (!$ || !$.ajax) return
    getw1()
    getw2()
    getw3()
    getw4()
    getw5()
    getw7()
    $('#app').show()
  } catch (e) {
    console.log(e)
  }
})()
