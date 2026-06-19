module.exports = {
  extends: [
    "stylelint-config-recess-order", // CSSのプロパティ順序に関するルール
    "stylelint-config-recommended-scss", // SCSS固有のルール
    "stylelint-prettier/recommended", // Prettierとの統合
  ],
  ignoreFiles: ["**/*.js"], // JavaScriptファイルはStylelintの対象外にする
  rules: {
    "unit-disallowed-list": [
      "px", // px単位の使用を制限
      {
        ignoreMediaFeatureNames: {
          px: ["min-width", "max-width"], // メディアクエリでのpxを許可
        },
        ignoreProperties: {
          px: ["/^html$/", /^\$?border(?!-radius)/], // border系でのpxを許可
        },
      },
    ],
    "selector-pseudo-element-colon-notation": "double", // 擬似要素のコロン記法に対するルール
    "scss/selector-no-union-class-name": true, // SCSSのユニオンクラス名の使用禁止
  },
};

// stylelint必要設定コマンド;
// stylelintのプラグインが必要です　https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
// npm install --save-dev markuplint prettier stylelint stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-prettier stylelint-scss stylelint-order
