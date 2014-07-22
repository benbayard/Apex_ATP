/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($page_type) {

      with(/^Photo$/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import "pages/photos.ts"
      }
       with(/^Content$/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import "pages/content.ts"
      }
      else() {
        log("--> Did not match page_type = " + $page_type + " in mappings.ts")
      }
    }  
  }



}
