jQuery(document).ready(function() {
  jQuery("body.mw-details").each(function(){
    jQuery('.page')[0].addEventListener('DOMNodeInserted', CallBack,false);
  });

  function CallBack(e){
    if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_brnStrip_container')) {
          AddCarousel(e.target);
        }
        else if(e.target.classList.contains('ljt_ad_300_250')){
          jQuery(this).addClass('primary_ad');
        }
      }
  }
   function AddCarousel(target){ 
    jQuery(".ob_brnStrip_container").each(function(){
      console.log(":::::AddCarousel Called");
        jQuery(this).addClass("mw-you-like-container");
        jQuery(this).attr("data-ur-set", "carousel");
        var scrollcontainer = jQuery(this).children('.ob_container');
        scrollcontainer.addClass("mw-you-like").attr("data-ur-carousel-component", "scroll_container");
        scrollcontainer.find('a.item-link-container').attr("data-ur-carousel-component", "item");
        var leftButton = jQuery('<div></div>').addClass('prev').attr("data-ur-carousel-component", "button");
        jQuery(this).append(leftButton);
        $(this).Uranium()
    });
   
  }
});
