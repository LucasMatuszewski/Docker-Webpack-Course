#Docker + Webpack - Sii course

##Modules in JS
Separate scopes in modules (e.g. functions) - IIFE to secure scopes and immediately invoke.
We return what we want from our module. We don't need ES6, it could be done with IIFE.

We can use also **AMD** (Asynchronous Module Definition) `define(['property1', 'property2'], function($, ) { ... })`

We can use `module.exports` and `import`.

We can use UMD with AMD function. **Universal Module Definition**.

In ES6 we can use import / export / export default (new syntax)

## Webpack

### 5 Modules included by default:

1. Compiler + Dependency Graph
2. Resolver (listens events inside Webpack, search for files from entry point)
3. Module Factory (creates module wrapped with filename, other code from Resolver etc.)
4. Parser (creates ready code, injects dependencies)
5. Template (creates functions readable for Webpack)

### Plugins:

1. Define own plugin: `new webpack.DefinePlugin({ ... })` in webpack.config.js
2. webpack-visualizer-plugin - to analyze bundle, like bundle-analyzer. Renders nice chart: file:///C:/Users/HP.TABLET-IKEJ8LMC/Documents/DEV/DockerWebpackSii/dist/stats.html

# Virtualization

- complete OS on your host (multiple OS possible)
- heavy resources consuming

# Containerization

- only a kernel of OS on your host
