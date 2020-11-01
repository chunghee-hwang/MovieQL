# GraphQL로 영화 웹 앱 만들기

Movie app build with React, Apollo and GraphQL

## 개발 환경 구성

- Apollo: https://www.apollographql.com/docs/react/get-started/
- styled-components: https://styled-components.com/docs/basics#installation
- react-router-dom: https://reactrouter.com/web/guides/quick-start
- reset css: https://meyerweb.com/eric/tools/css/reset
- Apollo dev tools: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm

```bash
npx create-react-app frontend
cd frontend
yarn add styled-components react-router-dom @apollo/react-hooks apollo-boost graphql --dev
```

## Apollo

- GraphQL 쿼리를 fetch, json(), parse 할 필요 없이 요청하고 응답받는 즉시, 데이터를 받을 수 있는 모듈
- 내부적으로 캐시가 구현되어 있기 때문에, 한 번 요청한 데이터를 다시 요청할 경우, 캐시에서 가져온다.
- 백엔드에 존재하지 않는 데이터를 프론트엔드에서 추가할 수 있고, 프론트엔드에서 만든 데이터를 mutation, query를 통해 변경, 조회할 수 있다.
