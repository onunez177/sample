# lavab-plugins
Sample plugin

## General information

Each plugin sits in a separate repo,
https://github.com/lavab-plugins/[plugin-name]
https://github.com/lavab/web-[plugin-name]

plugins from https://github.com/lavab-plugins/ can be referenced by name instead of specifying the full plugin url

## Internal structure

blocks - contains functional build blocks of the plugin which includes:

blocks/*.jade - template files,

blocks/*.less - styles for templates used within the block,
	
blocks/ctrl*.js - angular.js controllers for templates used within the block
	
configs - angular.js configurations

decorators - angular.js decorators

directives - angular.js directives

factories - angular.js factories

filters - angular.js filters

runs - angular.js runs

services - angular.js services

controllers - angular.js controllers(normally something you'd use across the blocks)

translations - groups of toml translation files with names of `[lang_code].toml` kind

less - styles global for plugin

img - images

## Plugin manifest file

Each plugin has a index.toml manifest, shortly about it
2 sections - MANIFEST and PLUGIN

```
[MANIFEST]
	// manifest version, currently only 1.0 supported
	version = '1.0'

[PLUGIN]
	// plugin name, must be unique
	name = 'plgLavaboomSample'
	// plugin type - angular or custom
	type = 'angular'
	// plugin version
	version = '1.0'
	// to which app this plugin belongs and bundled with (LavaLoader, LavaUtils, LavaMain, LavaLogin)
	belongsTo = 'Utils'
	// short description of this plugin and it's awesome features
	description = 'Sample plugin'

	// ANGULAR ONLY params

	// list of angular.js modules this plugin depends on
	dependencies = [
	]

	// list of angular.js modules this plugin depends on in production environment only
	productionOnlyDependencies = [
		'plugin-templates'
	]
```

Manifest file is being processed by a `lavab/web` gulp build system in order to embed the plugin and
all required information to `web` at compile time. Currently all plugins must be defined at compile time as `web`
supports only static plugin linkage.
