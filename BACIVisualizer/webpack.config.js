module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
        ],
    },
    vue: {
        loaders: {
            js: 'babel',
            sass: 'vue-style-loader!css-loader!sass?indentedSyntax',
        },
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime'],
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
    },
};
