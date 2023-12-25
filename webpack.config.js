module.exports = {
  // ... other webpack configuration options
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: 'postcss.config.js',
              },
            },
          },
        ],
      },
    ],
  },
};
