(function() {
  var App,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var $word, fontSize, increaseSize, width, word, words, _i, _len, _results;
      words = $('.top-row');
      width = $(window).width();
      fontSize = 0;
      _results = [];
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        $word = $(word);
        _results.push(increaseSize = function() {
          var wordWidth;
          wordWidth = $word.width();
          if (wordWidth <= $('.parent').width() - 200) {
            console.log(wordWidth + ": ", width - 300);
            fontSize = fontSize + 10;
            $word.css({
              "font-size": "" + fontSize + "px",
              "line-height": "" + fontSize + "px",
              "height": "" + fontSize + "px"
            });
            return increaseSize();
          } else {
            return console.log("Done");
          }
        });
      }
      return _results;
    };

    return App;

  })(Backbone.View);

  window.App = App;

  new App;

}).call(this);
