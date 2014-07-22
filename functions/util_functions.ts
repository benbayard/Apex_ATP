@func XMLNode.add_class_to(Text %xpath, Text %class) {
  $(%xpath) {
    add_class(%class)
    yield()
  }
}
@func XMLNode.move_to_bottom(Text %sourcepath, Text %destinationpath) {
  $(%sourcepath) {
     move_to(%destinationpath, position("bottom")) 
  }
}
@func XMLNode.hide(Text %xpath){
	
	$(%xpath){
	add_class("mw-hide")

	}
}
@func XMLNode.insert_anchor_ad(Text %ad_width, Text %ad_height, Text %ad_slot) {
  #### Google Fixed ad
  insert("script", src: "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"){
    attributes(async: "async")
  }
  insert("ins", class: "adsbygoogle", style: "width:"+ %ad_width + "px; height:"+ %ad_height + "px;",data-ad-client: "ca-pub-0912248666910376"){
    match(%ad_slot, /[a-zA-Z0-9]*/) {
      attributes(data-ad-slot: %ad_slot)
    }     
  }
  insert("script"){
    inner(){
      set("(adsbygoogle = window.adsbygoogle || []).push({});")
    }
  }
  #### End Google Fixed ad
}
@func XMLNode.remove_duplicate_scripts(){
  $("/html/head") {
    $("./script[contains(@src,'jquery/')]"){
      #Remove only if duplicate jquery lib scripts exist
      match(index(),2){
        log('Duplicate JQuery Exists')
        remove("../script[contains(@src,'jquery/1.4.4/jquery.min.js')]")
      }      
    }    
  }
}