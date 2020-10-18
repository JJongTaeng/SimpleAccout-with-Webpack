const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: { // 로더 설정하는 곳 바벨이랑 css-loader 설정하면될거같음
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpg|png|svg|gif0)$/,
        loader: 'file-loader',
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
        },
      },

    ]
  },
  // resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [ // HtmlWebpackPlugin, BannerPlugin, CleanWebpackPlugin, MiniCssExtractPlugin
    new webpack.BannerPlugin({
      banner: JSON.stringify(new Date().toLocaleString()),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin({})
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: '/',
    overlay: true,
    port: 3030,
    stats: "errors-only",
    hot: true,
    before: (app, server, compiler) => {
      app.get('/user', (req, res)=>{
        res.end(JSON.stringify([
          {id: 'intae', pwd: '0000'}
        ]))
      })
    }
  }
}