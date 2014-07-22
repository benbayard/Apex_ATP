/*
  Page Type

  This file defines what you will call the page throughout the project.
  This will allow you to define the analytics page_type custom variable as well
  as clarify what page you're trying to map to which tritium file.  Also, if
  there are no mappings for the page, it will be perfect proxied!

  Example starting code:
*/
log("")
log("")
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("!! Detecting Page Type")
log("!! Path"+ $path)

match($path) {
  with(/^\/privacy-policy|terms-of-use|contact-us/){
    $page_type = "Content"     
  }
  else(){
    $page_type = "Photo"
  }
}

log("!! Page type is: " + $page_type)
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("")
log("")

