$(document).ready(function () {
	var cssSourceHref = 'https://cdn.jsdelivr.net/gh/jitendersandhu/rc-test@a0a80f3e93638e4dd83ee52460222a8adbc32332/custom.css',
		cssLinkElm = '<link rel="stylesheet" href="' + cssSourceHref + '">'
		comparePlansHTML = '<a class="compare-plans"><span>Compare plans</span>' +
							'<svg id="svg--2055864217" viewBox="0 0 19 11" class="compare-plans-arrow">' +
							'<g id="Page-1" stroke-width="1" fill-rule="evenodd" stroke="none">' +
    						'<polygon points="9.544 0.0002 9.514 0.0302 9.486 0.0002 0 9.5442 1.485 11.0302 9.514 3.0012 17.544 11.0302 19.03 9.5442" id="arrow"></polygon>' +
				    		'</g></svg></a>',
		slidersSectionHeading = '<h3 class="slider_top_heading sliders-new-heading">select your pricing preferences:</h3>',
		$plansAndPricingTiles = $('.plansTable.price_section .plansExtHeader.CId-sticky-range--1.IId-sticky-range--1'),
		$yearMonthToggleBtn = $('.firstItemContent.slider_content_wrapper .toggle_btn .paySelect'),
		$yearMonthToggleAnnuallyLabel = $yearMonthToggleBtn.children('.ann_txt').clone(),
		$yearMonthToggleAnnuallySaveMsg = $yearMonthToggleBtn.children('.ann_savetxt').clone(),
		$yearMonthToggleMonthlyLabel = $yearMonthToggleBtn.children('.mon_tx').clone(),
		$userScaleSliderWrapper = $('.user_scale_inner_slider');

	$('body').eq(0).addClass('plans-and-pricing-v5');

	$yearMonthToggleBtn.children('.mon_tx').remove();
	$yearMonthToggleBtn.children('.ann_txt').remove();
	$yearMonthToggleBtn.children('.ann_savetxt').remove();
	$('.plansTable:not(.price_section)').prepend(slidersSectionHeading);
	$yearMonthToggleAnnuallyLabel.text('Pay annually');
	$yearMonthToggleMonthlyLabel.text('Pay monthly');
	$yearMonthToggleBtn.prepend('<span id="custom-price-slider"></span>');
	$('#custom-price-slider').append($yearMonthToggleAnnuallyLabel);
	$('#custom-price-slider').append($yearMonthToggleAnnuallySaveMsg);
	$yearMonthToggleBtn.append($yearMonthToggleMonthlyLabel);
	$userScaleSliderWrapper.prepend('<p class="slider_top_heading sliders-new-heading"># of users</p>');
	$plansAndPricingTiles.find('.perUser').html('/user/month *');

	$('head').append(cssLinkElm);
	$(comparePlansHTML).insertAfter($plansAndPricingTiles);
	$('.compare-plans').click(function() {
		setTimeout(function() {
            $('html, body').animate({
                scrollTop: ($('.plansExtBody.CId-plans-information-wrapper--1').offset().top)
            }, 500);
        }, 500);
	});
});
