jQuery(document).ready(function(){
	var desktopImgHeight = 0;
			var deskScroll = jQuery('.desktop-wrapper').scrollTop(desktopImgHeight);

	jQuery('.item-selector span').click(function(){
		jQuery('.item-selector span').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.mobile-wrapper img').css('top','-'+'0px');
		jQuery('.desktop-wrapper img').scrollTop(0);

		var selectorIndex = jQuery('.item-selector span.active').index();
		//desktop
		jQuery('.desktop-wrapper img').removeClass('active');
		jQuery('.desktop-wrapper img').eq(selectorIndex).addClass('active');

		//mobile

		jQuery('.mobile-wrapper img').removeClass('active');
		jQuery('.mobile-wrapper img').eq(selectorIndex).addClass('active');

	});

	//scroll event


	jQuery('.desktop-wrapper').scroll(function(){
		var scrollVal = jQuery(this).scrollTop();
		var mobHeight = 0;
		var desktopImgHeight = 0;

		 if(jQuery(window).width() < 830){
			mobHeight = jQuery('.mobile-wrapper img.active').innerHeight() - 150;
			desktopImgHeight = jQuery('.desktop-wrapper img.active').innerHeight() - 300;

		 }
		 if(jQuery(window).width() > 830){

			mobHeight = jQuery('.mobile-wrapper img.active').innerHeight() - 400;
			desktopImgHeight = jQuery('.desktop-wrapper img.active').innerHeight() - 640;

		}
		mobHeight = Math.round(mobHeight);
		desktopImgHeight = Math.round(desktopImgHeight);


		//desktop view scroll
		ratioHeight = (mobHeight / desktopImgHeight);
		scrollVal = scrollVal * ratioHeight;
		scrollVal = Math.round(scrollVal) ;
		console.log('mob scrollVal',scrollVal)
		jQuery('.mobile-wrapper img').css('top','-'+(scrollVal)+'px');



	})

		
});