module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false,
    'ecmaFeatures': {
      'jsx': true,
      'classes': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    },
    'env': {
      'browser': true,
      'node': true,
      'es6': true
      // 'mocha': true
    },
    'rules': {}
  }
}
