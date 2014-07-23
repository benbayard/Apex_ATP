jQuery(document).ready(function() {
  jQuery("body.mw-home").each(function(){
  	jQuery('.ljt_ad_300_250').addClass('primary_ad');
    jQuery('.rounded-10')[0].addEventListener('DOMNodeInserted', CallBack,false);
  });

  function CallBack(e){
    if (e.target.nodeName == "DIV") {
        if(e.target.classList.contains('ob_strip_container')) {
          doTransformation(e.target);
        }
      }
  }

  function doTransformation(target){
    jQuery(".ob_strip_container  style").remove();
    jQuery(".ob_container_shadow_outer").remove();
    var length = $(target).find('div.ob_container .ob_container_recs a').length; 
    if(length > 5){
      var carousel_class = 'carousel_container';
      var ob_container = $(target).find('div.ob_container');
      ob_container.append('<div class="'+carousel_class+' mw-carousel" data-ur-set="carousel">');
      var carousel_container = jQuery(target).find('.carousel_container');
      carousel_container.append('<a data-ur-carousel-component="button" data-ur-carousel-button-type="prev">Prev</a><a data-ur-carousel-component="button" data-ur-carousel-button-type="next">Next</a><div class="scroll_container" data-ur-carousel-component="scroll_container">');  

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
});