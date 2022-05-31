import baseConfig from './rollup.config.base'
import filesize from 'rollup-plugin-filesize'

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, filesize()]
}
