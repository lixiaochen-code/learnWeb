module.exports = {
    mode: "development",
    module: {
        rules: [
            // loader   运行顺序 从右向左   css-loader先运 => “...” style-loader => "<style>    css-loader结果转化为字符串    </style>"
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.png$/, use: "file-loader" }
        ]
    }
}