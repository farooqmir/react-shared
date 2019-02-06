var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "sass-loader", options: { includePaths: ["node_modules"] } }
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {} // name: "[path][name].[ext]?[hash]"
          }
        ]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
// rules: [
//   {
//     test: /\.js$/,
//     include: path.resolve(__dirname, "src"),
//     exclude: /(node_modules|bower_components|build)/,
//     use: {
//       loader: "babel-loader",
//       options: {
//         presets: ["env"]
//       }
//     }
//   },
//   {
//     test: /\.(scss)$/,
//     use: [
//       {
//         loader: "style-loader" // inject CSS to page
//       },
//       {
//         loader: "css-loader" // translates CSS into CommonJS modules
//       },
//       // ,
//       // {
//       //   loader: "postcss-loader", // Run post css actions
//       //   options: {
//       //     plugins: function() {
//       //       // post css plugins, can be exported to postcss.config.js
//       //       return [require("precss"), require("autoprefixer")];
//       //     }
//       //   }
//       // },
//       {
//         loader: "sass-loader" // compiles Sass to CSS
//       }
//     ]
//   }
// ]
