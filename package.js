Package.describe({
  summary: "A utility library delivering consistency, customization, performance, & extras. Can be a drop-in place replacement for Underscore.js."
});

Package.on_use(function (api) {
  api.export('lodash');
  api.add_files(['lodash.js', 'post.js']);
});