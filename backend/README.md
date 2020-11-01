# GraphQL로 영화 API 만들기

## 서버 개발환경 구성

```bash
yarn init
yarn add graphql-yoga
```

- 파일을 수정할 때마다 서버를 재시작하는 모듈 설치
  ```bash
  yarn global add nodemon
  ```
- ES6 코드로 동작하도록 babel 설치

  ```bash
  yarn global add babel-cli
  ```

- nodejs에서 동작하는 fetch 모듈 설치

  ```bash
  yarn add axios --dev
  ```

- package.json에 scripts 추가

  ```js
  "scripts": {
      "start": "nodemon --exec babel-node index.js"
  }
  ```

- .babelrc 파일 추가 후 다음 내용 추가
  ```js
  {
      "presets": ["env", "stage-3"]
  }
  ```

```bash
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

yarn start
```

## 서버 실행해보기

- index.js 작성
- graphql 폴더에 schema.graphql와 resolver.js(DAO와 비슷) 작성 (스키마와 리졸버에 있는 컬럼 내용은 동일해야한다.)
- localhost:4000 으로 접속
