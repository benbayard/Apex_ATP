jQuery(document).ready(function() {
  jQuery("body.mw-home").each(function(){
  	jQuery('.ljt_ad_300_250').addClass('primary_ad');
    jQuery('.rounded-10')[0].addEventListener('DOMNodeInserted', CallBack,false);
  });

  item = 0;
  function CallBack(e){
  	if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_strip_container')) {
        	item++;
			doTransformation(e.target);
			if(item>4){
				mergeRecommendations();
			}
        }
      }
  }

  function doTransformation(target){
  	jQuery(".ob_strip_container  style").remove();
    jQuery(".ob_container_shadow_outer").remove();
    var length = $(target).find('div.ob_container .ob_container_recs a').length; 
    if(length > 5){
      var ob_container = $(target).find('div.ob_container');
      ob_container.append('<div class="carousel_container mw-carousel" data-ur-set="carousel">');
      var carousel_container = jQuery(target).find('.carousel_container');
      var leftButton = jQuery('<div></div>').addClass('prev').attr({
        "data-ur-carousel-component": "button",
        "data-ur-carousel-button-type":"prev"
      });
      var rightButton = jQuery('<div></div>').addClass('next').attr({
        "data-ur-carousel-component": "button",
        "data-ur-carousel-button-type":"next"
      });    

      var spritesLeft = jQuery('<div></div>').addClass('sprites-icon-S-left_arrow carousel-button');
      var spritesRight = jQuery('<div></div>').addClass('sprites-icon-S-right_arrow carousel-button');
      leftButton.append(spritesLeft);
      rightButton.append(spritesRight);

      carousel_container.append(leftButton);
      carousel_container.append(rightButton);
      carousel_container.append('<div class="scroll_container" data-ur-carousel-component="scroll_container">');  

      var scroll_container = $(carousel_container).find('.scroll_container');
      var carousel_item = 2;        
      $(target).find('.ob_container .ob_container_recs a').each(function() {
        if(carousel_item>1){
         scroll_container.append('<div data-ur-carousel-component="item" class="car_item">');
        }
        var detachedElement = $(this).detach();
        scroll_container.find('.car_item:last').append(detachedElement);
        carousel_item--;
        if(carousel_item==0){
          carousel_item = 2;
        }
      });
      $(target).find(".ob_container_recs").remove();
      $(target).find(".ob_container_shadow_outer").remove();
      $(target).find(".strip-rec-link-source").remove();
      $(target).find(".car_item").css('width', (screen.width/3)-30);
      ob_container.Uranium();
    }
  }

  function mergeRecommendations(){
  	var carousel_container = $('<div class="carousel_container mw-carousel" data-ur-set="carousel">');
	var carousel_navigation = $('<a data-ur-carousel-component="button" data-ur-carousel-button-type="prev">Prev</a><a data-ur-carousel-component="button" data-ur-carousel-button-type="next">Next</a>');
	var scroll_container = $('<div class="scroll_container" data-ur-carousel-component="scroll_container">');

	carousel_container.append(carousel_navigation).append(scroll_container);
	var recommendationsContainer = jQuery('.ob_strip_container:first');
	$(recommendationsContainer).find('.ob_container .ob_container_recs a').each(function() {
		var item_container = $('<div data-ur-carousel-component="item" class="car_item">');
	 	item_container.append(this);
	 	scroll_container.append(item_container);
  	});

	recommendationsContainer = jQuery('.ob_strip_container:last');
  	$(recommendationsContainer).find('.ob_container .ob_container_recs a').each(function(index) {
  		jQuery(scroll_container).find('.car_item').eq(index).append(this);
  	});

  	jQuery('div.ob_strip_container:first .ob_container').append(carousel_container);
  	jQuery('.ob_strip_container:last').remove();
  	jQuery.getScript( "http://downloads.moovweb.com/uranium/1.0.167/uranium-pretty.js", function( data, textStatus, jqxhr ) {
          console.log('Script Loaded')
          jQuery('.carousel_container').Uranium();
    });
  }
});