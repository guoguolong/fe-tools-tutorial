module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs"
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3",
      }
    ]
  ]
}
