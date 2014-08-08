$('./body') {
	 insert_top("header", class: "mw-header") {
	 	remove("../div[@id='header']/div[@class='wrapper']/div[@class='ad']")
	 	insert('div', class:  "mw-google-ad"){
	 		insert_anchor_ad(300, 100, "8577018380")
	 	}
	}
}