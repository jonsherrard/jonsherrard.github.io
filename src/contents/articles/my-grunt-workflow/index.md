---
title: My Grunt Workflow 
author: Jon
date: 2013-10-19
template: article.jade
---

I'm just making a quick note of my Grunt workflow. I've taken to putting a real chunk of time and effort into it now that I know the benefits.
I use Grunt to maintain 'source' and 'compiled' folder trees. I can then keep node_modules and compiled files out of my repositories.     



Here is the basic file structure of a Node Server and it's static files:      



```
├── package.json               <- app configuration
├── compiled
│   ├── server
│   │   │── app.js 
│   │   ├── routes
│   │   │   └── example-route.js
│   │   ├── modules
│   │   │   ├── example-modules.js
│   │   ├── views
│   │   │   └── index.jade
│   ├── static
│   │   ├── css
│   │   │   └── main.css
│   │   ├── js
│   │   │   └── client.js
├── src
│   ├── server
│   │   │── app.coffee
│   │   ├── routes
│   │   │   └── example-route.coffee
│   │   ├── modules
│   │   │   ├── example-modules.coffee
│   │   ├── views
│   │   │   └── index.jade
│   ├── static
│   │   ├── stylus
│   │   │   └── example-styling.styl
│   │   ├── coffee
│   │   │   └── example-script.coffee
│   │   ├── jade
│   │   │   ├── client-templates
│   │   │   │   └── example-template.jade
│   │   │   ├── server-view
│   │   │   │   └── example-view.jade
```

