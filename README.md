[![Build Status](https://travis-ci.org/fbukevin/testTravis.svg?branch=master)](https://travis-ci.org/fbukevin/testTravis)



* 至少要有三個檔案:
1. package.json
```
{
  "scripts": {
    "test": "mocha testMocha.js testChai.js testSinon.js"
  },
  "dependencies": {
    "chai": "^3.2.0",
    "sinon": "^1.16.1"
  }
}
```
2. .travis.yml
```
language: node_js
node_js:
  - "0.10"
before_install: npm install mocha -g &&
                npm install chai &&
                npm install sinon
```
3. test.js


* 接著你要到 Travis-CI 上去開起這個專案的 GitHub 連接
* 最後，每當你 push 一版到 GitHub，Travis 就會自動啟動測試，並將測試結果寄送到你的 email
* 如果測試程式沒有變動的(例如 README.md, package.json 的變動)，不會觸發 Travis-CI