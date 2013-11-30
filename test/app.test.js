var Browser = require("zombie");
var expect = require('expect.js');
var server  = require('../server');

var PORT = 14011;

describe('アンケート入力', function() {
  var browser;
  var window;
  var $;

  beforeEach(function(done) {
    server.listen(PORT, function() {
      browser = new Browser();
      browser.visit('http://localhost:' + PORT + '/').then(function() {
        window = browser.window;
        $      = window.$;

        done();
      });
    });
  });

  it('デフォルトで、" JSDojoはもちろん楽しかったですよね" がチェックされていること', function() {
    expect($('li:eq(0) input:checked').length, 1);
  });
});
