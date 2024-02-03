import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/RemoteComponent.jsx'],
  bundle: true,
  format: 'esm',
  outfile: './dist/remotecomponent.js',
  external: ['react', 'react-dom'],
  minify: true,
})