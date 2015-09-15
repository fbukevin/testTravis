(function(root, undefined) {
  // ...
  if(typeof(module) != 'undefined') {
    module.exports = md5;
  } else if(root) {
    root.md5 = md5;
  }
}(this));
