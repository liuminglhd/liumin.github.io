$(function(){
	point(0);
	var num = 0;
	var timer = null;
	var count = $('div.list').length;

	// 圆点按钮变化
	function point(index){
		$('.point ul li').eq(index).addClass('current').siblings().removeClass('current');
	}

	// 右按钮
	$('.arrow .right_btn').on("click",function(){
		if(num == count - 1){
			$('.listbox .list').eq(0).show().siblings('.list').hide();
			point(0);
			num = 0;
		}else{
			num ++;
			$('.listbox .list').eq(num).show().siblings('.list').hide();
			point(num);
		};
	});

	// 左按钮
	$('.arrow .left_btn').on("click",function(){
		if(num == 0){
			$('.listbox .list').eq(count-1).show().siblings('.list').hide();
			point(count-1);
			num = count - 1;
		}else{
			num --;
			$('.listbox .list').eq(num).show().siblings('.list').hide();
			point(num);
		};	
	});

	// 圆点显示对应div
	$('.point ul li').on("mouseover",function(){
		num = $(this).index();
		$('.listbox .list').eq(num).show().siblings('.list').hide();
		point(num);
	});
});