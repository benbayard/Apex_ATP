jQuery(document).ready(function() {
  jQuery("body.mw-home").each(function(){
    jQuery('#container')[0].addEventListener('DOMNodeInserted', CallBack,false);
    jQuery('div:not(class) > .textwidget:first-child > .adsbygoogle').wrap("<div class='mw-google-ads'></div>");
    jQuery('.mw-google-ads').append('<div class="mw-border"></div>');
    
  	
  });

  var item = 0;
  function CallBack(e){
  	if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_strip_container')) {
        	$(e.target).find('.ob_container, .ob_what').hide();
        	$(e.target).append('<div class="mw-loading"></div>');
          $(e.target).append('<div class="mw-border"></div>');
        	item++;
          if(item==3){
            transformSingleRowCarousel(e.target);
          }else{
            transformTwoRowCarousel(e.target);
          }
          if(item>4) {
            mergeRecommendations();
          }
        }
      }
  }

  function transformTwoRowCarousel(target){
  	var length = $(target).find('div.ob_container .ob_container_recs a').length; 
    if(length > 5){
      var ob_container = $(target).find('div.ob_container');
      ob_container.append('<div class="carousel_container mw-carousel" data-ur-set="carousel" data-ur-infinite="enabled">');
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

      carousel_container.append(leftButton).append(rightButton).append('<div class="scroll_container" data-ur-carousel-component="scroll_container">');
      
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
     // jQuery(".ob_strip_container  style, .ob_container_shadow_outer").remove();
      $(target).find(".ob_container_recs, .strip-rec-link-source").remove();
    }
  }

  function mergeRecommendations(){

    var imgWidth = (((screen.width-70)/2) - 5); //70 is width of the buttons and 20 is the margin
    var photoItemHeight = imgWidth + 40 ; //image height + title height
    var itemHeight = (photoItemHeight + 20 )*2;
    console.log('Item Width :' + imgWidth + "item Height : " + itemHeight);    
    
    var carousel_container = $('<div class="carousel_container mw-carousel" data-ur-set="carousel" data-ur-infinite="enabled">');
    var scroll_container = $('<div class="scroll_container" data-ur-carousel-component="scroll_container">');

    var leftButton = jQuery('<div></div>').addClass('prev').attr({
	    "data-ur-carousel-component": "button",
	    "data-ur-carousel-button-type":"prev"
  	});
  	var rightButton = jQuery('<div></div>').addClass('next').attr({
	    "data-ur-carousel-component": "button",
	    "data-ur-carousel-button-type":"next"
  	});

  	var spritesLeft = jQuery('<div style="margin-top:'+(photoItemHeight-10)+'px"></div>').addClass('sprites-icon-S-left_arrow carousel-button');
    var spritesRight = jQuery('<div style="margin-top:'+(photoItemHeight-10)+'px"></div>').addClass('sprites-icon-S-right_arrow carousel-button');
    leftButton.append(spritesLeft);
    rightButton.append(spritesRight);

    carousel_container.append(leftButton).append(rightButton).append(scroll_container);
  	carousel_container.append(scroll_container);
    
    var recommendationsContainer = jQuery('.ob_strip_container:first');
  	$(recommendationsContainer).find('.ob_container .ob_container_recs a').each(function() {
  		var item_container = $('<div data-ur-carousel-component="item" class="car_item"  style="width:'+imgWidth+'px;height: '+ itemHeight + 'px">');
      jQuery(this).children('.item-container').css('height',  photoItemHeight);
  	 	item_container.append(this);
  	 	scroll_container.css('height', itemHeight ).append(item_container);
    	});
     
  	recommendationsContainer = jQuery('.ob_strip_container:last');
  	$(recommendationsContainer).find('.ob_container .ob_container_recs a').each(function(index) {
      jQuery(this).children('.item-container').css('height',  photoItemHeight );
    	jQuery(scroll_container).find('.car_item').eq(index).append(this);
  	});
    
    jQuery(".car_item").css({width: imgWidth, height: itemHeight});
    jQuery(".item-container").css('height',  photoItemHeight );
    jQuery(".scroll_container").css('height', itemHeight );
    jQuery(".carousel-button").css('margin-top', photoItemHeight-10);
  	jQuery('div.ob_strip_container:first .ob_container').append(carousel_container);
    jQuery('.ob_strip_container:last, .mw-loading').remove();
  	jQuery('.ob_container, .ob_what').show();
  	
    jQuery('.AR_1 span:nth-child(4)').addClass("mw-ob-org-header");
    jQuery('.AR_4').parent().parent().parent().remove();
    var around_web_recommendations = jQuery('center .OUTBRAIN').detach();
    jQuery('.OUTBRAIN:first').append(around_web_recommendations);
    jQuery('.mw-google-ads').detach().insertAfter('.ob_strip_container:first');
    jQuery('.textwidget br').remove();

     $('.carousel_container, .mw-you-like-container').Uranium();
  }
  function transformSingleRowCarousel(target){
        jQuery(target).addClass("mw-you-like-container");
        jQuery(target).attr(
            {"data-ur-set" : "carousel", "data-ur-infinite" : "enabled"}
        );
        var scrollcontainer = jQuery(target).children('.ob_container');
        scrollcontainer.addClass("mw-you-like").attr("data-ur-carousel-component", "scroll_container");
        scrollcontainer.find('a.item-link-container').attr("data-ur-carousel-component", "item");
        var leftButton = jQuery('<div></div>').addClass('prev carousel-button-container').attr("data-ur-carousel-component", "button");
        var rightButton = jQuery('<div></div>').addClass('next carousel-button-container').attr("data-ur-carousel-component", "button");
        jQuery(target).append(leftButton);
        jQuery(target).append(rightButton);

        var spritesLeft = jQuery('<div></div>').addClass('sprites-icon-S-left_arrow carousel-btn');
        var spritesRight = jQuery('<div></div>').addClass('sprites-icon-S-right_arrow carousel-btn');
        jQuery(target).children('.prev').append(spritesLeft);
        jQuery(target).children('.prev').attr("data-ur-carousel-button-type","prev");
        jQuery(target).children('.next').append(spritesRight);

        jQuery(target).children('.next').attr("data-ur-carousel-button-type","next");
        jQuery(target).children('.ob-custom-css').addClass('mw-hide');

        scrollcontainer.find('a.item-link-container').addClass('mw-item-link-frame');
        scrollcontainer.find('a.item-link-container').find('img.strip-img').addClass('mw-strip-img');
        scrollcontainer.find('a.item-link-container').find('.ob-text-content').addClass('mw-text-content');
        (scrollcontainer).before(jQuery(target).children('.next'));
        (jQuery(target).children('.next')).before(jQuery(target).children('.prev'));
        jQuery(target).children('.ob_org_header').addClass('mw-h1');
        jQuery(target).before(jQuery(target).children('.ob_org_header'));
        jQuery('.mw-item-link-frame').css("width",((screen.width-70)/2 - 10))
        jQuery(target).find(".strip-rec-link-source").remove();
    }
});