$('.tb_category_tree_content').on 'click', '.tb_fake_link', (e) ->
  currentIndex = $(e.delegateTarget).index() - 1
  if currentIndex == 2
    $target = $('.tb_category_tree_content_3 .tb_filed_title a')[0]
  else
    $target = $('.category-list a')[currentIndex]
  $target.click()
  return false
$('.tb_check_all').on 'click', () ->
  $('.category-list a')[1].click()
  return false
contentsHeight = $('.contents').height()
articleHeight = []
itemContent = []

handleNum = (i) ->
  if i==0
    articleHeight[0] = results[0]
  else
    articleHeight[i] = results[i]+articleHeight[i-1]
results = for item in $('article')
  itemContent.push(item)
  $(item).height()
for item,i in results
  handleNum i
  $('aside').find('li:first-child').addClass('active')
$(window).on "scroll", (e) ->
  tbScrollTop = $(window).scrollTop()
  if tbScrollTop>20
    $('.tb_sideBar').addClass('shouldFixed')
  else
    $('.tb_sideBar').removeClass('shouldFixed')
  for articleItem,j in articleHeight
    $('.tb_sideBar li').removeClass('active')
    $('.tb_sideBar li').eq(j).addClass('active')
    if tbScrollTop<articleItem
      break
$('.tb_sideBar li').on "click", (e) ->
  currentIndex = $(e.currentTarget).index()
  $('body').animate({scrollTop: $('.section-tree article').eq(currentIndex).offset().top},1000)