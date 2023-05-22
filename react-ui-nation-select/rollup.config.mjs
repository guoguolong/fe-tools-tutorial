import NodePath from 'path';
import RollupJson from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild'
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
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDom'
      }
    },
    {
      file: resolveFile(pkg.module),
      format: 'es',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDom'
      }
    },
    {
      file: resolveFile(pkg.umd),
      format: 'umd',
      name: 'NationSelect',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDom'
      }
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
        moduleDirectories: ['node_modules']
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    // esbuild({
    //   // All options are optional
    //   include: /\.[jt]sx?$/, // default, inferred from `loaders` option
    //   exclude: [
    //     /!query-string/,
    //   ], // default
    //   sourceMap: true, // default
    //   minify: process.env.NODE_ENV === 'production',
    //   target: 'es2016', // default, or 'es20XX', 'esnext'
    //   jsx: 'transform', // default, or 'preserve'
    //   jsxFactory: 'React.createElement',
    //   jsxFragment: 'React.Fragment',
    //   // Like @rollup/plugin-replace
    //   define: {
    //     __VERSION__: '"x.y.z"',
    //   },
    //   tsconfig: 'tsconfig.json', // default
    //   // Add extra loaders
    //   loaders: {
    //     // Add .json files support
    //     // require @rollup/plugin-commonjs
    //     '.json': 'json',
    //     // Enable JSX in .js files too
    //     '.js': 'jsx',
    //   },
    // }),
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
