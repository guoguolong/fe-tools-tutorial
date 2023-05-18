import NodePath from 'path';
import RollupJson from '@rollup/plugin-json';
import RollupNodeResolve from '@rollup/plugin-node-resolve';
import RollupCommonjs from '@rollup/plugin-commonjs';
import RollupTypescript from 'rollup-plugin-typescript2';
import RollupCopy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resolveFile = path => NodePath.resolve(__dirname, path);
const flexGapPolyfill = require('flex-gap-polyfill');

const externalpkgs = [
  'react',
  'react-dom'
];
const tsconfigOverride = {
  compilerOptions: {
    allowJs: true
  }
};

export default {
  input: resolveFile(pkg.source),
  output: [
    {
      file: resolveFile(pkg.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(pkg.module),
      format: 'es',
      sourcemap: true
    },
    {
      file: resolveFile(pkg.umd),
      format: 'umd',
      name: 'NationSelect',
      sourcemap: true
    }    
  ],
  treeshake: {
    moduleSideEffects: false
  },
  external: externalpkgs,
  plugins: [
    postcss({
      extract: 'index.css',
      plugins: [
        flexGapPolyfill(),
        autoprefixer({
          // grid: "autoplace"
        })
      ]
    }),
    // StylesWeed(),
    image(),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json'),
      tsconfigOverride,
      include: [
        'src/**/*',
        'node_modules/**/query-string/**/*'
      ]
    }),
    // RollupCopy({
    //   targets: [
    //     {
    //       src: [
    //         `src/*.less`,
    //       ],
    //       dest: resolveFile('dist')
    //     },        {
    //       src: [
    //         `src/*.less`,
    //       ],
    //       dest: resolveFile('lib')
    //     },
    //   ]
    // })
  ]
};
