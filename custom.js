$(document).ready(function () {
	var cssSourceHref = 'https://cdn.jsdelivr.net/gh/jitendersandhu/rc-test@86ab8cd819dfb31db63fe41505f1c126b7f96ab9/custom.css',
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
		yearMonthToggleAnnuallySaveMsgNumber = $yearMonthToggleBtn.find('.ann_savetxt .saveup').html(),
		yearMonthToggleAnnuallySaveMsg = '<span class="ann_savetxt"><strong> (save <span class="saveup">' +
										yearMonthToggleAnnuallySaveMsgNumber + '</span>%)</strong></span>',
		$yearMonthToggleMonthlyLabel = $yearMonthToggleBtn.children('.mon_tx').clone(),
		$userScaleSliderWrapper = $('.user_scale_inner_slider');

	// Add custom class to Body to customize the styles by targeting this class in custom Css
	$('body').eq(0).addClass('plans-and-pricing-v5');

	// Remove current Text helpers from Price Slider, to add in new order as per new design later
	$yearMonthToggleBtn.children('.mon_tx').remove();
	$yearMonthToggleBtn.children('.ann_txt').remove();
	$yearMonthToggleBtn.children('.ann_savetxt').remove();

	// Add Combined heading for both Sliders
	$('.plansTable:not(.price_section)').prepend(slidersSectionHeading);

	// Add helper texts to the price slider as per the new design
	$yearMonthToggleAnnuallyLabel.text('Pay annually');
	$yearMonthToggleMonthlyLabel.text('Pay monthly');
	$yearMonthToggleBtn.prepend('<span id="custom-price-slider"></span>');
	$('#custom-price-slider').append($yearMonthToggleAnnuallyLabel);
	$('#custom-price-slider').append($(yearMonthToggleAnnuallySaveMsg));
	$yearMonthToggleBtn.append($yearMonthToggleMonthlyLabel);

	// Add new helper text to the Users slider as per new design
	$userScaleSliderWrapper.prepend('<p class="slider_top_heading sliders-new-heading"># of users</p>');

	// Update perUser helper text in pricing tiles as per new design
	$plansAndPricingTiles.find('.perUser').html('/user/month *');

	// Append the custom (hosted) css in the head using link
	$('head').append(cssLinkElm);

	// Add Compare Plans anchor to indicate more content below the fold
	$(comparePlansHTML).insertAfter($plansAndPricingTiles);

	// On click handler for the "Compare Plans" down arrow anchor to handle
	// smoth scrolling user to the Pricing compare table section on click
	$('.compare-plans').click(function() {
		setTimeout(function() {
            $('html, body').animate({
                scrollTop: ($('.plansExtBody.CId-plans-information-wrapper--1').offset().top)
            }, 500);
        }, 500);
	});
});
