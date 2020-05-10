// const MemoryFs = require("memory-fs");
// const webpack = require('webpack');
// const serverConfig = require('../build/webpack.config.server');
// const serverCompiler = webpack(serverConfig);
// const mfs = serverCompiler.outputFileSystem = new MemoryFs();
// serverCompiler.watch({}, (err, stats) => {
//   if(err) throw err;
//   stats = stats.toJson();
//   stats.errors.forEach(err => console.error(err));
//   stats.warnings.forEach(war => console.warn(war));
//   const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);
//   const bundle = mfs.readFileSync(bundlePath,'utf-8');
// })