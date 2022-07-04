jQuery(document).ready(function(){

	"use strict";
	
	
	/************************* Carousels *********************/
	
	
	function kairo_service_carousel(){
	
		var carousel4			= jQuery('.kairo_partners .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:3},
					1600:{items:3},
					1920:{items:3}
				}
		});
		
	}
	kairo_service_carousel();
		
	
	/************************* Svg *********************/
	
	
	function kairo_svg(){
		
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}
kairo_svg();
	
	
	/*** Mobile Menu ***/
	
	function grax_mobile_menu(){
		
	var trigger			= jQuery('.grax_topbar .trigger');
	var triggerMenu		= jQuery('.grax_topbar .trigger .menu');
	var triggerClose	= jQuery('.grax_topbar .trigger .close');
	var dropdown		= jQuery('.grax_topbar .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('opened');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('opened');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}
grax_mobile_menu();	
	
	/*** Anchor ***/
	
	function grax_anchor(){
	
	jQuery('.grax_topbar .dropdown .main ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-78
			}, 1000);
		}
		return false;
	});
}
grax_anchor();
	
	
	/************************* Progress *********************/
	
	
	function tdss(container){
		
		container.find('.progress_inner').each(function(i) {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.bar');
			var pBar 			= progress.find('.bar_in');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');},(i*300));
		});
	}
	function allProgress(){
		jQuery('.kairo_progress').each(function() {
			
			var pWrap 			= jQuery(this);
			pWrap.waypoint({handler: function(){tdss(pWrap);},offset:'90%'});	
		});
	}
		
	allProgress();
	
	
	/************************* Images *********************/
	
	
	function kairo_images(){
		
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element		= jQuery(this);
		var url			= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}
kairo_images();
	
	
	/************************* Animate Text *********************/
	
	
	function kairo_animate_text(){
		
	var animateSpan1			= jQuery('.kairo_tm_animation_text_word');
	
		animateSpan1.typed({
			strings: ["Developer", "Freelancer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}
kairo_animate_text();
	
	
	/************************* Preloader *********************/
	
	function kairo_preloader(){
		
	var mainPreloader	 = $(".kairo_loader-wrapper .loader");
	var WinWidth 		 = $(window).width();
    var WinHeight		 = $(window).height();
    var zero = 0;

    mainPreloader.css({
        top: WinHeight / 2 - 2.5,
        left: WinWidth / 2 - 200
    });

    do {
        mainPreloader.animate({
            width: zero
        }, 10);
        zero += 3;
    } while (zero <= 400);
    if (zero === 402) {
        mainPreloader.animate({
            left: 0,
            width: '100%'
        });
        mainPreloader.animate({
            top: '0',
            height: '100vh'
        });
    }
		
    setTimeout(function() {
        $(".kairo_loader-wrapper").fadeOut('fast');
        (mainPreloader).fadeOut('fast');
    }, 4500);
}
	jQuery(window).on('scroll',function(){
		kairo_content_scroll();
	});

	jQuery(window).on('resize',function(){
		kairo_content_scroll();
		kairo_single_scroll();
	});

	jQuery(window).load('body', function(){
		setTimeout(function(){kairo_preloader();},1000);
		
		$('.flexslider').flexslider({
			animation: "fade",
			smoothHeight: "false",
			dots: "false"
		  });
		
	});
	
	
	/************************* Content Scroll *********************/
	
	function kairo_content_scroll(){
		
		var WW				= jQuery(window).width();
		var allScrollable	= jQuery('.kairo_centered_box .mainpart .scrollable > div');
		var scrollable		= jQuery('.kairo_centered_box .mainpart .scrollable > div.visible');
		var Inner   		= jQuery('.kairo_centered_box .mainpart .mainpart_inner');
		
		if(WW >= 1100){
			

//			Inner.css({height:550});

			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: 550});
				allScrollable.getNiceScroll().remove();
				element.niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:false,
					cursorborder:"3px solid rgba(255,255,255,0.05)"
				});
			});
		}else{
			Inner.css({height:'auto'});
			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: 'auto'});

				element.niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:false,
					cursorborder:"0px solid rgba(255,255,255,0.05)"
				});
			});
		}
}
	kairo_content_scroll();
	
	function kairo_single_scroll(){
		
		var WW				= jQuery(window).width();
		var scrollable		= jQuery('.kairo_news_single.scrollable');
		var Inner   		= jQuery('.kairo_news_single');
		
		if(WW >= 1100){
			

//			Inner.css({height:550});

			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: 472});
				element.niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:false,
					cursorborder:"0px solid rgba(255,255,255,0.05)"
				});
			});
		}else{
			Inner.css({height:'auto'});
			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: 'auto'});

				element.niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:false,
					cursorborder:"0px solid rgba(255,255,255,0.05)"
				});
			});
		}
}
	kairo_single_scroll();
	
	
	/************************* Filter *********************/
	
	
	function kairo_portfolio_filter(){

	if(jQuery().isotope) {

		var list 		 = jQuery('.kairo_portfolio .portfolio');
		var filter		 = jQuery('.kairo_portfolio .filter');

		if(filter.length){
			
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}
	kairo_portfolio_filter();
	
	
	/************************* Menu Transition *********************/
	
	function menuTransition(){
		var button 			= jQuery('.kairo_centered_box .menubox ul li .link');
		var allScrollable	= jQuery('.kairo_centered_box .mainpart .scrollable > div');
		button.off().on('click',function(){
			var clickedBtn 	= jQuery(this);
			var href		= clickedBtn.attr('href');
			href			= href.substring(1);
			allScrollable.getNiceScroll().remove();
			if(!jQuery('#'+href).hasClass('visible')){
				jQuery('.kairo_sections_wrap.visible').removeClass('visible');
				jQuery('#'+href).addClass('visible');
				jQuery('.kairo_centered_box .mainpart .mainpart_inner').scrollTop(0);
				setTimeout(function(){
					jQuery('.kairo_centered_box .mainpart .mainpart_inner').getNiceScroll().resize();
					allProgress();
					kairo_content_scroll();
				},500);
				
			}
			
			return false;
		});
	}
	menuTransition();
	
		
	/************************* Switcher *********************/
	
	function kairo_switcher(){
		
		var button		= jQuery('.kairo_tools .switcher .link');
		var box			= jQuery('.kairo_tools .switcher_inner');
		
		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				box.removeClass('opened');
			}else{
				element.addClass('opened');
				box.addClass('opened');
			}
			return false;
		});
		
	}
	kairo_switcher();
	
	function kairo_tools_bg(){
		var allBtnParents 		= jQuery('.kairo_tools .main_bg_tool li');
		var wrapper				= jQuery('.kairo_wrap_all');
		var btn 				= jQuery('.kairo_tools .main_bg_tool li a');
		btn.on('click',function(){
			var clickedBtn 		= jQuery(this);
			var clickedClass 	= clickedBtn.data('class');
			if(!clickedBtn.parent().hasClass('active')){
				allBtnParents.removeClass('active');
				clickedBtn.parent().addClass('active');
				if(clickedClass === 'no_bg'){
					wrapper.removeClass('kairo_main_bg_slider kairo_main_bg_image');
				}else if(clickedClass === 'image'){
					wrapper.removeClass('kairo_main_bg_slider').addClass('kairo_main_bg_image');
				}else if(clickedClass === 'slider'){
					wrapper.removeClass('kairo_main_bg_image').addClass('kairo_main_bg_slider');
				}
			}
			return false;
		});
	}
	kairo_tools_bg();
	
	function kairo_tools_animation(){
		var allBtnParents 		= jQuery('.kairo_tools .main_animation_tool li');
		var wrapper				= jQuery('.kairo_wrap_all');
		var btn 				= jQuery('.kairo_tools .main_animation_tool li a');
		btn.on('click',function(){
			var clickedBtn 		= jQuery(this);
			var clickedClass 	= clickedBtn.data('class');
			if(!clickedBtn.parent().hasClass('active')){
				allBtnParents.removeClass('active');
				clickedBtn.parent().addClass('active');
				if(clickedClass === 'animation_1'){
					wrapper.removeClass('kairo_main_animation_2 kairo_main_animation_3 kairo_main_animation_4').addClass('kairo_main_animation_1');
					doAnimate();
				}else if(clickedClass === 'animation_2'){
					wrapper.removeClass('kairo_main_animation_1 kairo_main_animation_3 kairo_main_animation_4').addClass('kairo_main_animation_2');
					doAnimate();
				}else if(clickedClass === 'animation_3'){
					wrapper.removeClass('kairo_main_animation_2 kairo_main_animation_1 kairo_main_animation_4').addClass('kairo_main_animation_3');
					doAnimate();
				}else if(clickedClass === 'animation_4'){
					wrapper.removeClass('kairo_main_animation_2 kairo_main_animation_3 kairo_main_animation_1').addClass('kairo_main_animation_4');
					doAnimate();
				}
				
			}
				
			return false;
		});
	}
	function doAnimate(){
		var index = jQuery('.kairo_sections_wrap.visible').index();
		if(index > 0){
			jQuery('.kairo_sections_wrap').removeClass('visible');
			jQuery('.kairo_sections_wrap:first').addClass('visible');
		}else{
			jQuery('.kairo_sections_wrap').removeClass('visible');
			jQuery('.kairo_sections_wrap:nth-child(2)').addClass('visible');
		}
		console.log(index);
	}
	kairo_tools_animation();
	
	
	function kairo_contact_form(){
		
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}
	kairo_contact_form();
	
	/************************* Map *********************/
	
	
	function kairo_map() {
		var mapOptions = {  
    center: new google.maps.LatLng(51.5, -0.12),  
    zoom: 10,  
    mapTypeId: google.maps.MapTypeId.HYBRID  
	};  
	var map = new google.maps.Map(document.getElementById("map"), mapOptions); 
	}
	kairo_map();
	
});