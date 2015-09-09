$('.tb_category_tree_content').on('click', '.tb_fake_link', function(e) {

    var currentIndex = $(e.delegateTarget).index() - 1;
    if (currentIndex == 2) {
        var $target = $('.tb_category_tree_content_3 .tb_filed_title a')[0];
    }else{
        var $target = $('.category-list a')[currentIndex];
    }

    $target.click();
    return false;
})
$('.tb_check_all').on('click',function  () {
	 $('.category-list a')[1].click();
	 return false;
})