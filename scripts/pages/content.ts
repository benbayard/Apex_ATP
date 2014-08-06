$("./body"){
	add_class("mw-details")
	$('./div[@id="container"]/div[@class="page"]'){
		add_class_to("./h2","mw-h1")
		add_class_to("./p", "mw-content-style")
		add_class_to("./div", "mw-content-style")
		add_class_to("./ol", "mw-content-style")
	}
	remove("./script[contains(@src,'http://resources.infolinks.com')]")
}
$('./head'){
	remove("./script[contains(@src,'http://resources.infolinks.com')]")
}
