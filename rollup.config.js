import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const input = 'src/index.mjs'
const output = 'dist/react-immer-hooks'

const sourcemap = true
const external = []
const plugins = [ resolve() ]
const babelConfig = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: ['@babel/preset-env']
}

export default [{
  input,
  output: {
    file: `${output}.mjs`,
    format: 'es',
    sourcemap
  },
  external,
  plugins
},
{
  input,
  output: {
    file: `${output}.js`,
    format: 'cjs',
    sourcemap
  },
  external,
  plugins
},
{
  input,
  output: {
    file: `${output}.min.js`,
    format: 'iife',
    name: 'ReactImmerHooks'
  },
  plugins: [
    ...plugins,
    babel(babelConfig)
  ]
}]
