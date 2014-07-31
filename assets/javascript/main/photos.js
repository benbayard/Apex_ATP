jQuery(document).ready(function() {
  var item = 0;
  var jWindow = jQuery(window);
  var screenWidth = jWindow.width() < jWindow.height()? jWindow.width() : jWindow.height();
  var imgWidth = (((screenWidth-70)/2) - 5); //70 is width of the buttons and 20 is the margin
  var photoItemHeight = imgWidth + ((12 + 2) * 2) ; //image height + title height
  var itemHeight = (photoItemHeight * 2) + 10;
  console.log('Item Width :' + imgWidth + "item Height : " + itemHeight);    
  jQuery("body.mw-home").each(function(){
    var mainContainer = jQuery('#container');    
    mainContainer.find('.OUTBRAIN').each(function(){
      var dynaContainer= jQuery(this).children('.ob_strip_container')
      if(dynaContainer.length > 0){
        onOBContentLoad(this);
      }else{
        jQuery(this)[0].addEventListener('DOMNodeInserted', CallBack,false);
      }      
    })
    jQuery('div:not(class) > .textwidget:first-child > .adsbygoogle').wrap("<div class='primary-ad'></div>");
    jQuery('.primary-ad').append('<div class="mw-border"></div>');
  });

  function CallBack(e){
  	if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_strip_container')) {
          onOBContentLoad(e.target);
        	
        }
      }
  }
  function onOBContentLoad(target){
    jQuery(target).find('.ob_container, .ob_what').hide();
    jQuery(target).append('<div class="mw-loading"></div>');
    item++;
    if(item == 2){
      transformTwoRowCarousel(target);
    }else if(item==3){
      transformSingleRowCarousel(target);
    }
    if(item>4) {
      mergeRecommendations();
    }
  }

  function transformTwoRowCarousel(target){
  	var length = jQuery(target).find('div.ob_container .ob_container_recs a').length; 
    //if(length > 5){
      var carousel_container = jQuery(target);
      var scroll_container = jQuery(carousel_container).find('div.ob_container');
      applyUraniumAttr(carousel_container,scroll_container);
      
      var carousel_item = 2;        
      scroll_container.find('.ob_container_recs a').each(function() {
        if(carousel_item>1){
          scroll_container.append('<div data-ur-carousel-component="item" class="car_item">');
        }
        var detachedElement = jQuery(this).detach();
        scroll_container.find('.car_item:last').append(detachedElement);
        carousel_item--;
        if(carousel_item==0){
          carousel_item = 2;
        }
      });
      //jQuery(".ob_strip_container  style, .ob_container_shadow_outer").remove();
      jQuery(target).find(".ob_container_recs, .strip-rec-link-source").remove();
    //}
    jQuery(target).find(".car_item").css({width: imgWidth, height: itemHeight});
    jQuery(target).find(".item-container").css('height',  photoItemHeight );
    jQuery(target).find(".scroll_container").css('height', itemHeight );
    jQuery(target).find(".carousel-button").css('margin-top', photoItemHeight + 10);
        
  }
  function applyUraniumAttr(carousel_container,scroll_container){
    carousel_container.addClass('mw-carousel-container').attr({'data-ur-set' : 'carousel', 'data-ur-infinite': "enabled"})
    scroll_container.addClass('scroll_container').attr({'data-ur-carousel-component' : 'scroll_container'});
      
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

      carousel_container.prepend(leftButton).prepend(rightButton);
  }

  function mergeRecommendations(){

    
    var carousel_container = jQuery('.ob_strip_container:first');
    var scroll_container = jQuery(carousel_container).find('div.ob_container');
    scroll_container.css('height', itemHeight );
    
    applyUraniumAttr(carousel_container,scroll_container);
    
    carousel_container.find('.ob_container .ob_container_recs a').each(function() {  	
      var item_container = jQuery('<div data-ur-carousel-component="item" class="car_item"  style="width:'+imgWidth+'px;height: '+ itemHeight + 'px">');
      jQuery(this).children('.item-container').css('height',  photoItemHeight);
  	 	item_container.append(this);
      scroll_container.append(item_container);
  	});
     
  	var recommendationsContainer = jQuery('.ob_strip_container:last');
  	jQuery(recommendationsContainer).find('.ob_container .ob_container_recs a').each(function(index) {
      jQuery(this).children('.item-container').css('height',  photoItemHeight );
    	scroll_container.find('.car_item').eq(index).append(this);
  	});
    

    carousel_container.find(".carousel-button").css('margin-top', photoItemHeight+ 10);
    carousel_container.find(".ob_container_recs, .strip-rec-link-source").remove();
    jQuery('.ob_strip_container:last, .mw-loading').remove();
  	jQuery('.ob_container, .ob_what').show();
  	
    jQuery('.AR_1 span:nth-child(4)').addClass("mw-ob-org-header");
    jQuery('.AR_4').parent().parent().parent().remove();
    var around_web_recommendations = jQuery('center .OUTBRAIN').detach();
    jQuery('.OUTBRAIN:first').append(around_web_recommendations);
    jQuery('.primary-ad').detach().insertAfter('.ob_strip_container:first');
    jQuery('.textwidget br').remove();
    jQuery('.ob_what').addClass('mw-ob-what');
    jQuery('.ob_what:first').detach().insertAfter(scroll_container);
    jQuery('.mw-carousel-container').append('<div class="mw-border"></div>');
    jQuery(".scroll_container").find('a.item-link-container').find('.ob-text-content').addClass('mw-text-content')
    $('.mw-carousel-container').Uranium();//Works only with $ and not with jQuery
  }
  function transformSingleRowCarousel(target){
        jQuery(target).addClass("mw-carousel-container");
        var scrollcontainer = jQuery(target).children('.ob_container');
        scrollcontainer.find('a.item-link-container').attr("data-ur-carousel-component", "item");
        applyUraniumAttr(jQuery(target),scrollcontainer);
        jQuery(target).children('.ob-custom-css').addClass('mw-hide');

        jQuery(target).children('.ob_org_header').addClass('mw-h1');
        jQuery(target).before(jQuery(target).children('.ob_org_header'));
        jQuery('.mw-item-link-frame').css("width",((screen.width-70)/2 - 10))
        jQuery(target).find(".strip-rec-link-source").remove();

        jQuery(target).find("a.item-link-container").css({width: imgWidth, height: photoItemHeight});
        jQuery(target).find(".item-container").css('height',  photoItemHeight );
        jQuery(target).find(".scroll_container").css('height', photoItemHeight );
        jQuery(target).find(".carousel-button").css('margin-top', ((imgWidth /2) - 10));
    }
});