import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  input: 'src/scripts/index.js',
  output: {
    file: isProduction ? 'dist/bundle.js' : 'src/bundle.js',
    format: 'esm',
    sourcemap: isProduction ? 'true' : 'inline',
  },
  plugins: [resolve(), styles()],
});
