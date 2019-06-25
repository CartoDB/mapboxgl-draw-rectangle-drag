# Mapbox GL Draw Rectangle Drag
A Mapbox GL Draw plugin to create a rectangle via click &amp; drag.

Based on [`thegisdev/mapbox-gl-draw-rectangle-mode`](https://github.com/thegisdev/mapbox-gl-draw-rectangle-mode) plugin code.

### Demo
Try out this demo to see the plugin's behaviour: https://codepen.io/jesusbotella/pen/zVdxGM

How to install
-----
You can install this plugin either using npm or JSDeliver.

### Using npm
We deliver ESM compatible code through our npm module, so that you can import it in your project and compile it without issues.
```shell
npm i mapboxgl-draw-rectangle-drag --save
```
The module exports a default binding to the module, so you can import it like:
```js
import mapboxGLDrawRectangleDrag from 'mapboxgl-draw-rectangle-drag';
```

### Using JSDeliver
We have a script-compatible version of the plugin as well, ready to be imported in your HTML code using a `<script>` tag.

Use this URL to get the latest version: 

```html
<script src="https://cdn.jsdelivr.net/gh/CartoDB/mapboxgl-draw-rectangle-drag/build/mapboxgl-draw-rectangle-drag.browser.js"></script>
```

Or add your own version number to the URL:

```html
<script src="https://cdn.jsdelivr.net/gh/CartoDB/mapboxgl-draw-rectangle-drag@1.0.1/build/mapboxgl-draw-rectangle-drag.browser.js"></script>
```

A variable named `mapboxGLDrawRectangleDrag` is defined within the global scope to be included in your Mapbox GL Draw modes.

Add mode to Mapbox GL Draw
----
Once the module/script is imported, you need to include the new mode within Mapbox GL's predefined modes.

To do so, you need to include `modes` property in your Mapbox GL Draw configuration options.
```js
var MapboxGLDraw = new MapboxDraw({
  modes: {
    ...MapboxDraw.modes,
    'draw_rectangle_drag': mapboxGLDrawRectangleDrag
  }
});
```

How to enable rectangle drag mode
---
To enable the rectangle drag mode, you need to execute [`changeMode`](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md#changemodemode-string-options-object-draw) method on your Mapbox GL Draw instance.
```js
drawInstance.changeMode('draw_rectangle_drag');
```

Unfortunately, custom modes cannot add custom controls to Mapbox GL Draw plugins. So, if you want to have a custom button to enable the control you need to create one by yourself. You can take some ideas from [this CodePen](https://codepen.io/roblabs/pen/zJjPzX).
