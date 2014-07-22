$('./body') {
	 insert_top("header", class: "mw-header") {
	 	insert("div",class:"mw-header-title"){
			inner(){
			set('Amazingly Timed Photos')
			}
		}
	 	remove("../div[@id='header']/div[@class='wrapper']/div[@class='ad']")
	 	insert('div', class:  "mw-google-ad"){
	 		insert_anchor_ad(320, 100, "8577018380")
	 	}
	 	
	}
}
