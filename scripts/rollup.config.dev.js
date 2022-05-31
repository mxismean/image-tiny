import baseConfig from './rollup.config.base'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8080,
      contentBase: ['dist', 'examples/'],
      openPage: 'index.html'
    }),
    livereload({
      watch: 'examples/'
    })
  ]
}
