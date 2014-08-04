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
      var imgWidth = (((screenWidth-60)/2)- 20); //70 is width of the buttons and 20 is the margin
      var photoItemHeight = imgWidth + ((12 + 2) * 2) + 30 ; //image height + title height
      console.log('Item Width :' + imgWidth + "item Height : " + photoItemHeight);    
      var scrollcontainer = jQuery(this).children('.ob_container');
      applyUraniumAttr(jQuery(this),scrollcontainer);
      scrollcontainer.find('a.item-link-container').attr("data-ur-carousel-component", "item");
      scrollcontainer.find('a.item-link-container').find('.ob-text-content').addClass('mw-text-content');
      (scrollcontainer).before(jQuery(this).children('.next'));
      (jQuery(this).children('.next')).before(jQuery(this).children('.prev'));
      jQuery(this).before(jQuery(this).children('.ob_org_header'));
      jQuery(this).parent().addClass("mw-carousel-holder").removeAttr('style');
      jQuery('a.item-link-container').addClass('car_item').css({width: imgWidth, height: photoItemHeight})
      jQuery(".item-container").css('height',   photoItemHeight);
      jQuery(".scroll_container").css('height', photoItemHeight);
      jQuery('.ob_what').addClass('mw-ob-what');
      jQuery('.ob-rec-link-img').css('height',imgWidth);
      jQuery(target).find(".carousel-button").css('margin-top', ((imgWidth /2) - 10));    
      $(this).Uranium();

    });
   
  }
});
