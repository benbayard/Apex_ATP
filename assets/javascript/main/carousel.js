function applyUraniumAttr(carousel_container,scroll_container){
  carousel_container.addClass('mw-carousel-container').attr({'data-ur-set' : 'carousel', 'data-ur-fill': "2"})
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
  carousel_container.parent().addClass('carousel-wrapper');
}

 