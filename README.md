# Использование travis-ci для fullstack js проекта (express.js, react.js)
[![Build Status](https://travis-ci.org/koskh/travis-ci.svg?branch=master)](https://travis-ci.org/koskh/ravis-ci)

1. Подключили travis-ci.org к githab, дали разрешения на требуемые  действия. 
Создали `.travis.yml` в корне репозитория, с содержимым:
```
language: node_js
node_js:
  - stable
install:
  - npm install
script:
  - npm test
```  
Запушили. Получили ошибку сборки с описанием и package.json

2. Установили зависимости и собрали локально базовую сборку приложения.
`npm install express ... babel.... react... wwebpack... и далее по списку...`
