$(document).ready(function(){
	$('.openmodal').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).fadeIn();
	});

	$('.closebut , .closef').click(function(){
		$('.popup_wrap video').trigger('pause');
		$('.popup_wrap').fadeOut();
	});

	$('.popup_wrap').click(function(e){
		if($(e.target).closest('.wrap').length == 0){
			$('.popup_wrap video').trigger('pause');
			$(this).fadeOut();
		}
	});

	$('.faq .title').click(function(){
		if($(this).next().css('display') == 'block'){
			$(this).next().slideUp();
			$(this).parent().removeClass('active');
		}else{
			$('.faq .block').removeClass('active');
			$('.faq .body').slideUp();
			$(this).next().slideDown();
			$(this).parent().addClass('active');
		}
	})

	$(function() {
		$({numberValue: 0}).animate({numberValue: 1280}, {
			duration: 2000, 
			easing: "linear",
			step: function(val) {
				$("#count").html(Math.ceil(val));
			}
		});
	});
	(function() {
		function isVisible(tag) {
			var t = $(tag);
			var w = $(window);
			var wt = w.scrollTop();
			var tt = t.offset().top;
			var tb = tt + t.height();
			return ((tb <= wt + w.height()) && (tt >= wt));
		}

		$(window).scroll(function () {
			var block = $("#count1");
			if (!block.prop("shown") && isVisible(block)) {
				block.prop("shown", true);
				$({numberValue: 0}).animate({numberValue: 1536}, {
					duration: 2000, 
					easing: "linear",
					step: function(val) {
						$("#count1").html(Math.ceil(val));
					}
				});
			}
			var block1 = $("#count2");
			if (!block1.prop("shown") && isVisible(block1)) {
				block1.prop("shown", true);
				$({numberValue: 0}).animate({numberValue: 10854}, {
					duration: 2000, 
					easing: "linear",
					step: function(val) {
						$("#count2").html(Math.ceil(val));
					}
				});
			}
			var block2 = $("#count3");
			if (!block2.prop("shown") && isVisible(block2)) {
				block2.prop("shown", true);
				$({numberValue: 0}).animate({numberValue: 3072}, {
					duration: 2000, 
					easing: "linear",
					step: function(val) {
						$("#count3").html(Math.ceil(val));
					}
				});
			}
		});
	})();
});
	