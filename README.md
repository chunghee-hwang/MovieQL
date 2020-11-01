# MovieQL

Movie API with Graphql
노마드 코더의 [GraphQL로 영화 API 만들기](https://nomadcoders.co/graphql-for-beginners/) 를 참고하고 정리한 레포지토리입니다.

## Graphql로 해결할 수 있는 문제들

1. Overfetching
   요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것.
   `GET /users/`
   RESTAPI는  
    유저 정보 중 이름만 가져오고 싶은데, 성, 이메일, 성별 등이 포함된 패키지를 가져올 수 밖에 없다.  
    이는 Database에 사용하지 않을 영역을 요청하는 것이라 효율적이지 않다.  
    이러면 Database가 필요없는 영역을 보게 만들고 고객들이 앱에서 필요없는 정보를 받게 한다.  
    이럴 경우를 Overfetching이라고 한다.

2. Underfetching
   하나를 완성하기위해 많은 요청하는 것

   예를 들어 인스타그램의 경우

   ```
   /feed/
   /notifications/
   /user/1/
   ```

   위와 같이 앱을 시작할 때 피드, 알림, 유저 정보를 받기 위해 서버에 3번 요청한다.

## Graphql에서 URL 체계

Graphql에서는 URL 체계가 존재하지 않는다.  
오직 하나의 요청, 하나의 엔드포인트만 있다.

### 요청 예시

```graphql
query {
  feed {
    comments
    likeNumber
  }
  notification {
    isRead
  }
  user {
    username
    profilePic
  }
}
```

### 응답 예시

```js
{
    feed: [
        {
            comments:1,
            likeNumber: 20
        }
    ],
    notifications: [
        {
            isRead: true
        },
        {
            isRead: false
        }
    ],
    user:{
        username: "Kim",
        profilePic: "https://..."
    }
}
```

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
