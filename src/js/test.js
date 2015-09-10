(function() {
  var articleHeight, contentsHeight, handleNum, i, item, itemContent, results, _i, _len;

  $('.tb_category_tree_content').on('click', '.tb_fake_link', function(e) {
    var $target, currentIndex;
    currentIndex = $(e.delegateTarget).index() - 1;
    if (currentIndex === 2) {
      $target = $('.tb_category_tree_content_3 .tb_filed_title a')[0];
    } else {
      $target = $('.category-list a')[currentIndex];
    }
    $target.click();
    return false;
  });

  $('.tb_check_all').on('click', function() {
    $('.category-list a')[1].click();
    return false;
  });

  contentsHeight = $('.contents').height();

  articleHeight = [];

  itemContent = [];

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
      itemContent.push(item);
      _results.push($(item).height());
    }
    return _results;
  })();

  for (i = _i = 0, _len = results.length; _i < _len; i = ++_i) {
    item = results[i];
    handleNum(i);
    $('aside').find('li:first-child').addClass('active');
  }

  $(window).on("scroll", function(e) {
    var articleItem, j, tbScrollTop, _j, _len1, _results;
    tbScrollTop = $(window).scrollTop();
    if (tbScrollTop > 20) {
      $('.tb_sideBar').addClass('shouldFixed');
    } else {
      $('.tb_sideBar').removeClass('shouldFixed');
    }
    _results = [];
    for (j = _j = 0, _len1 = articleHeight.length; _j < _len1; j = ++_j) {
      articleItem = articleHeight[j];
      $('.tb_sideBar li').removeClass('active');
      $('.tb_sideBar li').eq(j).addClass('active');
      if (tbScrollTop < articleItem) {
        break;
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  });

  $('.tb_sideBar li').on("click", function(e) {
    var currentIndex;
    currentIndex = $(e.currentTarget).index();
    return $('body').animate({
      scrollTop: $('.section-tree article').eq(currentIndex).offset().top
    }, 1000);
  });

}).call(this);
