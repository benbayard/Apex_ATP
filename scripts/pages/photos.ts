$("./body"){
	add_class("mw-home")
	$("./div[@id='container']"){
	    $("./div[@class='left rounded-8']"){
	    	$("./div[@class='buttons']"){
				add_class_to("./div[@id='floating-box']","mw-hide")
			}
            $("./div[@class='pic rounded-8']"){
                add_class("mw-photo-frame")
                move_here("../div[@class='buttons']/a","top"){
                    match(index(),1){
                        add_class('prev_main')
                        insert('div', class: 'prev sprites-icon-S-left_arrow')
                    }match(index(),2){
                   		add_class('next_main')
                        insert('div', class: 'next sprites-icon-S-right_arrow')
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
		$('./div[not(@class)]'){
			attribute("style"){
					remove()
			}
			$('./div[@class="textwidget"][1]'){
				remove('./iframe')
				remove('./ins')
				insert('div', class:  "primary-ad "){
	 				insert_anchor_ad(300, 250, "7379774542")
	 				insert('div', class: "mw-border")
	 			}		
        $(".//div[@class='OUTBRAIN']") {
          wrap("section", class:"mw-carousel-holder")
        }
			}		
		}
		## Share with friends moved to bottom
		move_here("./div[contains(@class, 'mw-browse-share')]","bottom")		
	}
}
