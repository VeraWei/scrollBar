(function() {
  var $asideLi, articleHeight, contentsHeight, handleNum, i, item, results, _i, _len;

  contentsHeight = $('.contents').height();

  $asideLi = $('aside li');

  articleHeight = [];

  handleNum = function(i) {
    if (i === 0) {
      return articleHeight[0] = results[0];
    } else {
      return articleHeight[i] = results[i] + articleHeight[i - 1];
    }
  };

  results = (function() {
    var _i, _len, _ref, _results;
    _ref = $('article');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      _results.push($(item).height());
    }
    return _results;
  })();

  for (i = _i = 0, _len = results.length; _i < _len; i = ++_i) {
    item = results[i];
    handleNum(i);
    $('<li>item ' + (i + 1) + '</li>').appendTo($('aside ul'));
    $('aside').find('li:first-child').addClass('active');
  }

  $(window).on("scroll", function(e) {
    var articleItem, j, tbScrollTop, _j, _len1, _results;
    tbScrollTop = $(window).scrollTop();
    if (tbScrollTop > 20) {
      $('.sideBar').addClass('shouldFixed');
    } else {
      $('.sideBar').removeClass('shouldFixed');
    }
    _results = [];
    for (j = _j = 0, _len1 = articleHeight.length; _j < _len1; j = ++_j) {
      articleItem = articleHeight[j];
      $('aside li').removeClass('active');
      $('aside li').eq(j).addClass('active');
      if (tbScrollTop < articleItem) {
        break;
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  });

}).call(this);
