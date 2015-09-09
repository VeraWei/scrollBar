contentsHeight = $('.contents').height()
$asideLi = $('aside li')
articleHeight = []

handleNum = (i) ->
  if i==0
    articleHeight[0] = results[0]
  else
    articleHeight[i] = results[i]+articleHeight[i-1]
results = for item in $('article')
  $(item).height()
for item,i in results
  handleNum i
  $('<li>item '+(i+1)+'</li>').appendTo($('aside ul'))
  $('aside').find('li:first-child').addClass('active')
$(window).on "scroll", (e) ->
  tbScrollTop = $(window).scrollTop()
  if tbScrollTop>20
    $('.sideBar').addClass('shouldFixed')
  else
    $('.sideBar').removeClass('shouldFixed')
  for articleItem,j in articleHeight
    $('aside li').removeClass('active')
    $('aside li').eq(j).addClass('active')
    if tbScrollTop<articleItem
      break