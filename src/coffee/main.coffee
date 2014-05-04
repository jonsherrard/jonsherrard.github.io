class App extends Backbone.View
  initialize: ->
    words = $('.top-row')
    width = $(window).width()
    fontSize = 0
    for word in words
      $word = $(word)
      increaseSize = ->
        wordWidth = $word.width()
        if wordWidth <= $('.parent').width()-200
          console.log wordWidth + ": ", width-300
          fontSize = fontSize + 10
          $word.css
            "font-size": "#{fontSize}px"
            "line-height": "#{fontSize}px"
            "height": "#{fontSize}px"
          increaseSize()
        else
          console.log "Done"
        

window.App = App

new App
