Package.describe({
  summary: "A utility library delivering consistency, customization, performance, & extras. Can be a drop-in place replacement for Underscore.js."
});

// Use lodash NPM module for server-side
Npm.depends({"lodash" : "2.4.1"})

Package.on_use(function (api) {
  api.add_files(['server/lodash.js'], 'server');
  api.add_files(['lodash.js', 'post.js']);
  if(typeof api.export !== 'undefined')
  	api.export(['lodash'], 'server');
  	api.export('lodash');
});