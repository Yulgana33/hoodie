// Generated by CoffeeScript 1.3.3

Hoodie.User = (function() {

  function User(hoodie) {
    var _this = this;
    this.hoodie = hoodie;
    return function(userHash, options) {
      if (options == null) {
        options = {};
      }
      $.extend(options, {
        prefix: '$public'
      });
      return _this.hoodie.open("user/" + userHash + "/public", options);
    };
  }

  return User;

})();
