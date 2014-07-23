$("./body"){
	add_class("mw-home")
	$("./div[@id='container']"){
	    $("./div[@class='left rounded-8']"){
	    	$("./div[@class='buttons']"){
				add_class_to("./div[@id='floating-box']","mw-hide")
				add_class_to("./a[@class='prev']","sprites-icon-L-left_arrow")
				add_class_to("./a[@class='next']","sprites-icon-L-right_arrow")
			}
			$("./div[@class='pic rounded-8']"){
				add_class("mw-photo-frame")
				add_class_to("./img","mw-photo-main")
				insert_top("div",class:"mw-buttons"){
					move_here("./../../div[@class='buttons']/a","top")
				}
			}
			add_class_to("./h1","mw-h1")
		}
		$("./div[@class='right']"){
			add_class_to("./div[@class='pics rounded-8']","mw-hide")
			add_class("mw-browse-share")
			add_class_to("./div[@class='pics rounded-8']","mw-browse")
			add_class_to("./div[@class='f-page']","mw-share")
		}
		$('./div[not(@class)]/div[@class="textwidget"][1]'){
			$('..'){
				attribute("style"){
					remove()
				}
				attribute("style","text-align: center")
			}
			remove('./iframe')			
		}
		
	}
}
