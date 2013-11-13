Package.describe({
  summary: "A utility library delivering consistency, customization, performance, & extras. Can be a drop-in place replacement for Underscore.js."
});

Npm.depends({'lodash': '2.3.0'});

Package.on_use(function (api) {
  api.use('meteor', {unordered: true});
  api.export('_');
  api.add_files(["lib/lodash.js"], ["client", "server"]);
});