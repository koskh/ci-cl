# Использование travis-ci для fullstack js проекта (express.js, react.js)
[![Build Status](https://travis-ci.org/koskh/ci-cl.svg?branch=master)](https://travis-ci.org/koskh/ci-cl)

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

3. начальный `.travis.yml`

3.1 Хочу, что бы Travis билдил, собирал докер с билдом, выкоадывал докер-образ на heroku

4. Решение проблем

Если при диплое вохвращает такую ошибку:

```
    Installing deploy dependencies
    dpl.2
    Preparing deploy
    No stash entries found.
    missing api_key
    failed to deploy
```
проблема с  api-key.  Запускаем: `travis encrypt heroku:key --org -r koskh/ci-cl --add deploy.api.key`

`--org` если на travis-ci.org, `--pro` если на travis-ci.com
