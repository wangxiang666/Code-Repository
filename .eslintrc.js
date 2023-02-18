module.exports = {
  root: true,
  env: {
    jquery: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
    'eslint:recommended'
  ],
  globals: {
    joint: true,
    App: true,
    _: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 0,
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'comma-spacing': 0, //逗号前后的空格
    'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
    complexity: [0, 11] //循环复杂度
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}