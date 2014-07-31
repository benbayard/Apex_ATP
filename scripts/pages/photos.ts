$("./body"){
	add_class("mw-home")
	$("./div[@id='container']"){
	    $("./div[@class='left rounded-8']"){
	    	$("./div[@class='buttons']"){
				add_class_to("./div[@id='floating-box']","mw-hide")
				add_class_to("./a[@class='prev']","sprites-icon-S-left_arrow")
				add_class_to("./a[@class='next']","sprites-icon-S-right_arrow")
			}
			$("./div[@class='pic rounded-8']"){
				add_class("mw-photo-frame")
				move_here("../div[@class='buttons']/a","top"){
                    match(index(),1){
                        wrap("div", class: 'prev_main')
                    }match(index(),2){
                        wrap("div", class: 'next_main')
                        $next_link = fetch("@href")
                    }
                }
                add_class_to("./div[@class='thumbnail']/img","mw-photo-main"){
					wrap("a", href: $next_link)
				}
			}
			add_class_to("./h1","mw-h1")
		}
		$("./div[@class='right']"){
			add_class_to("./div[@class='pics rounded-8']","mw-hide")
			add_class("mw-browse-share")
			add_class_to("./div[@class='pics rounded-8']","mw-browse")
			add_class_to("./div[@class='f-page']","mw-share"){
                add_class_to('./h2', 'mw-share-title')
                hide('./div[@class="textwidget"][2]')
			}
		}
		$('./div[not(@class)]/div[@class="textwidget"][1]'){
			$('..'){
				attribute("style"){
					remove()
				}
				
			}
			remove('./iframe')			
		}
		## Share with friends moved to bottom
		move_here("./div[contains(@class, 'mw-browse-share')]","bottom")		
	}
}
