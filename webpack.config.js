const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(`Running in ${process.env.NODE_ENV || "production"} mode`);

const config = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./qpm/src"),
    filename: "index.min.js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  externals: {
    "qilin-manager": "require('../node_modules/qilin-manager')"
  },

  watchOptions: {
    ignored: [
      path.resolve(__dirname, "./node_modules"),
      path.resolve(__dirname, "./demos"),
      path.resolve(__dirname, "./build"),
      path.resolve(__dirname, "./cache"),
      path.resolve(__dirname, "./qpm"),
      path.resolve(__dirname, "./bin")
    ]
  },

  devtool: "source-map",
  context: __dirname,
  target: "node-webkit",

  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ["url-loader?limit=1000"]
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require("autoprefixer")],
        devServer: {
          inline: true
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    new MiniCssExtractPlugin({
      filename: "./index.min.css"
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};

if (process.env.NODE_ENV === "development") {
  config.mode = "development";
}

if (process.env.NODE_ENV === "production") {
  config.mode = "production";
  config.plugins.push(new Webpack.optimize.ModuleConcatenationPlugin());
  config.plugins.push(new Webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
