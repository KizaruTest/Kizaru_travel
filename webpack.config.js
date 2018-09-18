// In Webpack 4, the output path must be an absolute path.Using node's path module to handle it.
var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    // In Webpack 4 the "mode" param needs to be setted('production' or 'development').
    mode: "development",
    output: {
        // Using the path module here.
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },

    /*
     * https://github.com/babel/babel-loader/blob/master/README.md
     * Change "modules" to "module",and it finally works.
     */

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
