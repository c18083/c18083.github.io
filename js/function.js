// su kien cuon trang
$(window).scroll(function(){
	var top  = $(window).scrollTop();
	if(top >= 200){
		$('#back-top').css({right: '10px'});
	}else{
		$('#back-top').css({right: '-100px'});
	}
	if(top >=300){
		$('.navbar-inverse').addClass('navbar-fixed-top');
		$('.navbar-inverse').css({
			background:'green'
		});
	}else{
		$('.navbar-inverse').removeClass('navbar-fixed-top');
		$('.navbar-inverse').css({
			background:'darkblue'
		});
	}
});

// su kien click back to top
$('#back-top').click(function(){
	$('body,html').animate({scrollTop:0});
})