import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',

  output: {
    file: 'build/mapboxgl-draw-rectangle-drag.module.js',
    format: 'esm',
    name: 'mapboxGLDrawRectangleDrag'
  },

  plugins: [
    resolve(),
    terser()
  ]
};
