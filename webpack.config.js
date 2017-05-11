const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: "./src/index.js", // プログラムのエントリーポイント
    output: {
        path: __dirname, // ファイルの出力先
        filename: "dist/app.bundle.js" // 生成するファイル名
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,  // 読み込むファイルのマッチ条件。ここではjsファイルを指定
                loader: "babel-loader", // 読み込んだファイルを渡すプラグイン名
                query: {
                    presets: ["es2015"]
                },
            }
        ]
    },
    devServer: {
        contentBase: "./",
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
};