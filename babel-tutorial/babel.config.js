module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          // "edge": "17",
          // "firefox": "60",
          // "chrome": "58",
          // "safari": "11.1"
        },
        // "useBuiltIns": "usage",
        // "corejs": "3"
      }
    ]
  ],
 "plugins": [
     ["@babel/plugin-transform-runtime", {
        "corejs": 3
      }]
  ]
}