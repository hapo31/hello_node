module.exports = {
    entry: "./src/index.js", // プログラムのエントリーポイント
    output: {
        path: __dirname + "/dist/", // ファイルの出力先
        filename: "app.bundle.js" // 生成するファイル名
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // 読み込むファイルのマッチ条件。ここではjsファイルを指定
                loader: "babel-loader" // 読み込んだファイルを渡すプラグイン名
            }
        ]
    }
};