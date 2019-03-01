$(document).ready(function () {

	$('.info_menu a').click(function (e) {
		e.preventDefault();
		var ind = $(this).parent().index();
		$('.info_menu li').removeClass('active').eq(ind).addClass('active');
		$('.tab_valet').each(function () {
			$(this).find('.valt_block').removeClass('active').eq(ind).addClass('active');
		});
		$('.radioblock label').eq(ind).click();
		if (ind > 0) {
			$('.wrapper').addClass('orange');
		} else {
			$('.wrapper').removeClass('orange');
		}
	});

	$('.radioblock input').change(function () {
		var ind = $(this).parent().index();
		$('.radioblock').each(function () {
			$(this).find('label').find('input').click();
			$('.info_menu li').eq(ind).find('a').click();
		});
	});

	$('.param a').click(function (e) {
		e.preventDefault();
		var ind = $(this).parent().index();
		$('.param li').toggleClass('active');
		$('.tab_body .tab_block').slideToggle();
	});

	$('.openblock').click(function (e) {
		e.preventDefault();
		$(this).parent().slideUp();
		$('.mobwrap').slideDown();
	});

	$('.close').click(function (e) {
		e.preventDefault();
		$(this).parents('.mobwrap').slideUp();
		$('.showmob').slideDown();
	});

	$('.pageblock .title').click(function () {
		$(this).parent().toggleClass('active').find('.body').slideToggle();
	});

	$('.result_table .top').click(function () {
		$(this).parent().toggleClass('active').find('.openinfo').slideToggle();
	});

	$('.wrap_step .site_button').click(function (e) {
		e.preventDefault();
		$(this).parents('.step_block').removeClass('active').next().addClass('active')
	});

	baron({
		root: '.baron',
		scroller: '.baron__scroller',
		bar: '.baron__bar',
	});

	function CopyToClipboard(containerid) {
		if (document.selection) {
			var range = document.body.createTextRange();
			range.moveToElementText(document.getElementById(containerid));
			range.select().createTextRange();
			document.execCommand("Copy");

		} else if (window.getSelection) {
			var range = document.createRange();
			range.selectNode(document.getElementById(containerid));
			window.getSelection().addRange(range);
			document.execCommand("Copy");
			$('.infocopy').fadeIn();
			setTimeout(function () {
				$('.infocopy').fadeOut();
			}, 2000);
		}
	}

	$('.copybufer').click(function (e) {
		e.preventDefault();
		CopyToClipboard('copylink');
	});

	timer();

	function timer() {
		d = new Date();
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		var now = new Date(utc + (3600000 * 7));
		var newDate = new Date((now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + " 23:59:59");
		var totalRemains = (newDate.getTime() - now.getTime());
		if (totalRemains > 1) {
			var Days = (parseInt(parseInt(totalRemains / 1000) / (24 * 3600)));
			var Hours = (parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) / 3600));
			var Min = (parseInt(parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) - Hours * 3600) / 60));
			var Sec = parseInt((parseInt(totalRemains / 1000) - Days * 24 * 3600) - Hours * 3600) - Min * 60;
			if (Days < 10) {
				Days = "0" + Days
			}
			if (Hours < 10) {
				Hours = "0" + Hours
			}
			if (Min < 10) {
				Min = "0" + Min
			}
			if (Sec < 10) {
				Sec = "0" + Sec
			}
			$(".day").each(function () {
				$(this).text(Days);
			});
			$(".hour").each(function () {
				$(this).text(Hours);
			});
			$(".min").each(function () {
				$(this).text(Min);
			});
			$(".sec").each(function () {
				$(this).text(Sec);
			});
			setTimeout(timer, 1000);
		}
	}

	$('.openmodal').click(function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).fadeIn();
	});

	$('.closebut').click(function () {
		$('.popup_wrap').fadeOut();
		setTimeout(function () {
			$('.popup_wrap .step_popup').removeClass('active').eq(0).addClass('active');
		}, 1000);
	});


	$('.popup_wrap').click(function (e) {
		if ($(e.target).closest('.wrap').length == 0) {
			$(this).fadeOut();
		}
	});

	$('.send').on('submit', function (e) {
		e.preventDefault();
		$('.send').parent().removeClass('active').next().addClass('active');
	});

	$('.faq_block .title').click(function () {
		if ($(this).next().css('display') == 'block') {
			$(this).next().slideUp();
		} else {
			$('.faq_block .body').slideUp();
			$(this).next().slideDown();
		}
	});
});
	