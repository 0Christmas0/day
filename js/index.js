//banner 轮播图
var swiper1 = new Swiper(".ban", {
	pagination: ".swiper-pagination",
	autoplay: 2000,
	loop: true,
	paginationClickable: true,
	autoplayDisableOnInteraction: false,
	prevButton: ".swiper-button-prev",
	nextButton: ".swiper-button-next",
	speed: 500,
	observerParents: true,
	observer: true,
	effect: 'fade',
	fade: {
		crossFade: false,
	}
})
//内容区左右点击轮播
var swiper2 = new Swiper(".ban2", {
	autoplay: 5000,
	nextButton: ".nextButton2",
	prevButton: ".prevButton2",
	autoplayDisableOnInteraction: false,
	slidesPerView: 1,
})

$(function() {
	
//底部选项卡1
	$('.ul1').width($('.ul1 li').length * $('.ul1 li').width());
	$('.ol1 li').click(function() {
		$('.ol1 li').removeClass('active');
		$(this).addClass('active');
		$('.ul1').stop().animate({
			left: -$(this).index() * $('.ul1 li').width()
		})
	})
	
//底部选项卡2
	$('.ul2').width($('.ul2 li').length * $('.ul2 li').width());
	$('.ol2 li').click(function() {
		$('.ol2 li').removeClass('active');
		$(this).addClass('active');
		$('.ul2').stop().animate({
			left: -$(this).index() * $('.ul2 li').width()
		})
	})
	
//底部选项卡3	
	$('.ul3').width($('.ul3 li').length * $('.ul3 li').width());
	$('.ol3 li').click(function() {
		$('.ol3 li').removeClass('active');
		$(this).addClass('active');
		$('.ul3').stop().animate({
			left: -$(this).index() * $('.ul3 li').width()
		})
	})
	
//底部选项卡4
	$('.ul4').width($('.ul4 li').length * $('.ul4 li').width());
	$('.ol4 li').click(function() {
		$('.ol4 li').removeClass('active');
		$(this).addClass('active');
		$('.ul4').stop().animate({
			left: -$(this).index() * $('.ul4 li').width()
		})
	})
	
//底部选项卡按钮显示/隐藏
	$(".nr .reyi_con1").mouseenter(function() {
		$(".pre").eq($(this).index()).fadeIn(300)
	})
	$(".nr .reyi_con1").mouseleave(function() {
		$(".pre").eq($(this).index()).fadeOut(300)
	})

//底部选项卡按钮显示/隐藏
	$(".nr .reyi_con1").mouseenter(function() {
		$(".nex").eq($(this).index()).fadeIn(300)
	})
	$(".nr .reyi_con1").mouseleave(function() {
		$(".nex").eq($(this).index()).fadeOut(300)
	})	
		
//底部选项卡左按钮	
	$(".pre").click(function(){
		
	})
	
//底部选项卡右按钮	
	$(".nex").click(function(){
	
	})		
	
//banner 侧边栏移入	
	$(".banner ul>li").mouseenter(function() {
		$(this).addClass('ce').siblings().removeClass('ce')
		$(".banner ul>li>div").hide().eq($(this).index()).show()
	})

//banner 侧边栏移出	
	$(".banner ul>li").mouseleave(function() {
		$(this).removeClass('ce')
		$(".banner ul>li>div").css("display", "none")
	})

//导航 hover 效果	
	$.each($(".nav_xj"), function(a) {
		$(this).hover(function() {
			$(".nav_xlk").stop().slideDown()
			$(".nav_xlk ul").eq(a).show().siblings().hide()
		}, function() {
			$(".nav_xlk").stop().slideUp()
		})
	})

//左按钮背景显示
	$(".swiper-button-prev").mouseenter(function() {
		$(".prev-wrap").css("display", "block")
	})

//左按钮背景隐藏	
	$(".swiper-button-prev").mouseleave(function() {
		$(".prev-wrap").css("display", "none")
	})

//右按钮背景显示	
	$(".swiper-button-next").mouseenter(function() {
		$(".next-wrap").css("display", "block")
	})

//右按钮背景隐藏		
	$(".swiper-button-next").mouseleave(function() {
		$(".next-wrap").css("display", "none")
	})

})