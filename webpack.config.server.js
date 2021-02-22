const path = require('path')
const nodeExternals = require('webpack-node-externals')

const entry = { server: './src/server/index.js' }

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    target: 'node',
    devtool: 'inline-source-map',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // don't compile node_modules
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
}
