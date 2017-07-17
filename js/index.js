'use strict';
$(function(){
	// 图片索引值（0,1,2,3,4）
	var num = 0;
	// 页面加载默认第一个圆点显示蓝色
	point(0);
	// 存放定时器
	var timer = null;
	// div.list数量
	var count = $('div.list').length;
	// 圆点按钮变化 定义函数
	function point(index){
		$('.point ul li').eq(index).addClass('current').siblings().removeClass('current');
	}
	// ----------------------------------------------------------------------------------------------
	// 点击右按钮
	$('.arrow .right_btn').click(function(){
		// 图片按顺序显示和隐藏
		// 往右到最后一个，回到第一个
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
	// ----------------------------------------------------------------------------------------------
	// 点击左按钮
	$('.arrow .left_btn').click(function(){
		// 图片按顺序显示和隐藏
		// 往左到第一个，回到最后一个
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
	// ----------------------------------------------------------------------------------------------
	// 圆点显示对应图片
	$('.point ul li').on("mouseover",function(){
		num = $(this).index();
		$('.listbox .list').eq(num).show().siblings('.list').hide();
		point(num);
	});
});