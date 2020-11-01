# MovieQL

Movie API & App with Graphql

## 참고 강의

- 노마드코더의 [GraphQL로 영화 API 만들기](https://nomadcoders.co/graphql-for-beginners)
- 노마드코더의 [GraphQL로 영화 웹 앱 만들기](https://nomadcoders.co/react-graphql-for-beginners)

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

## 학습 목록

1. [GraphQL로 영화 API 만들기](./backend)
2. [GraphQL로 영화 웹 앱 만들기](./frontend)
