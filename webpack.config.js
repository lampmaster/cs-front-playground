const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/canvas/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: './src/resources/[name].[ext]'
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/},
            {
                test: /\.(png|jpeg|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[hash][ext][query]'
                }
             }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/canvas/index.html'
    })]
}