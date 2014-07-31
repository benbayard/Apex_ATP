jQuery(document).ready(function() {
  jQuery("body.mw-details").each(function(){
    jQuery('.page')[0].addEventListener('DOMNodeInserted', CallBack,false);
  });

  function CallBack(e){
    if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_brnStrip_container')) {
          AddCarousel(e.target);
        }
      }
  }
   function AddCarousel(target){ 
   jQuery(".ob_brnStrip_container").each(function(){
      console.log(":::::AddCarousel Called");
      var jWindow = jQuery(window);
      var screenWidth = jWindow.width() < jWindow.height()? jWindow.width() : jWindow.height();
      var imgWidth = (((screenWidth-70)/2) - 5); //70 is width of the buttons and 20 is the margin
      var photoItemHeight = imgWidth + ((12 + 2) * 2) ; //image height + title height
      console.log('Item Width :' + imgWidth + "item Height : " + photoItemHeight);    
    
      jQuery(this).addClass("mw-carousel-container");
      jQuery(this).attr(
        {"data-ur-set" : "carousel", "data-ur-infinite" : "enabled"}
      );
      var scrollcontainer = jQuery(this).children('.ob_container');
      scrollcontainer.addClass("scroll_container").attr("data-ur-carousel-component", "scroll_container");
      scrollcontainer.find('a.item-link-container').attr("data-ur-carousel-component", "item");
      var leftButton = jQuery('<div></div>').addClass('prev carousel-button-container').attr("data-ur-carousel-component", "button");
      var rightButton = jQuery('<div></div>').addClass('next carousel-button-container').attr("data-ur-carousel-component", "button");
      jQuery(this).append(leftButton);
      jQuery(this).append(rightButton);

      var spritesLeft = jQuery('<div style="margin-top:'+((photoItemHeight -10) /2)+'px"></div>').addClass('sprites-icon-S-left_arrow carousel-button');
      var spritesRight = jQuery('<div style="margin-top:'+((photoItemHeight -10) /2)+'px"></div>').addClass('sprites-icon-S-right_arrow carousel-button');
      jQuery(this).children('.prev').append(spritesLeft);
      jQuery(this).children('.prev').attr("data-ur-carousel-button-type","prev");
      jQuery(this).children('.next').append(spritesRight);

      jQuery(this).children('.next').attr("data-ur-carousel-button-type","next");
      jQuery(this).children('.ob-custom-css').addClass('mw-hide');

      //scrollcontainer.find('a.item-link-container').addClass('mw-item-link-frame');
      //scrollcontainer.find('a.item-link-container').find('img.strip-img').addClass('mw-strip-img');
      scrollcontainer.find('a.item-link-container').find('.ob-text-content').addClass('mw-text-content');
      (scrollcontainer).before(jQuery(this).children('.next'));
      (jQuery(this).children('.next')).before(jQuery(this).children('.prev'));

      jQuery(this).children('.ob_org_header').addClass('mw-h1');
      jQuery(this).before(jQuery(this).children('.ob_org_header'));

      jQuery('a.item-link-container').css({width: imgWidth, height: photoItemHeight})
      jQuery(".item-container").css('height',   photoItemHeight);
      jQuery(".scroll_container").css('height', photoItemHeight  );
      jQuery('.ob_what').addClass('mw-ob-what');
      $(this).Uranium();
    });
   
  }
});
