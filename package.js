Package.describe({
  summary: "A utility library delivering consistency, customization, performance, & extras. Can be a drop-in place replacement for Underscore.js."
});

Package.on_use(function (api) {
  api.export('_');
  api.add_files(['pre.js', 'lodash.js', 'post.js']);
});