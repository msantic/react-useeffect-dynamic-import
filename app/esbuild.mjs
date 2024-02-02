import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/main.jsx'],
  bundle: true,
  format: 'esm',
  outfile: './dist/main.js',
  minify: true,
})