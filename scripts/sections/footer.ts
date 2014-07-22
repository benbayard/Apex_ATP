  $("./body") {
    $("./*[@id='footer']"){
    name("footer")
    add_class("mw-footer")

    #### Insert app logo
    insert("div", class: "mw-app-logo"){
      move_here("../../div[@id='header']/div[@class='wrapper']/div[@id='logo']")
    }
   
    $("./div[@class='wrapper']/div[@class='left']"){
      move_to("../div[@class='right']", "top")
    }
      #### Hiding Subscribe to Rss
    $("./div[@class='wrapper']/div[@class='right']"){
      remove_text_nodes()
      $("./a[3]/strong"){
        inner(){
          set("Terms of Use " + " / ")
        }
      }
      $("./a[4]/strong"){
        inner(){
          set(" Privacy Policy  " + " / ")
        }
      }
      $("./a[position()<3]") {
        add_class("mw-hide")
      }
      insert("div", class: "mw-anchors"){
        move_here("./../a")
      }
       #### Insert MoovWeb Logo
      insert("div", class: "mw-logo"){
        inner(){
          set('
            Powered by <span >Moovweb</span>
            ')
        }
      }
    }  
    $("./div[@class='mw-app-logo']"){
      move_to("../div[@class='wrapper']/div[@class='right']","before")
    }
    $("./div[@class='wrapper']/div[@class='mw-app-logo']/div[@id='logo']"){
      $("./a"){
        $("./strong"){
          add_class("mw-hide")
        }
        $("./img"){
          attribute('src'){
            value(){
              replace('pixel.gif','logo.png')
            }              
          }
        }
      }
    }
    #### Footer google ad
    insert("div",class: "mw-google-footer-ad"){
      insert_anchor_ad(320, 50, '')
    }
  }
}
