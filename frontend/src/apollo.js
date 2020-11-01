import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  // 백엔드에서 제공하는 api에 프론트엔드 데이터를 합치는 resolver
  resolvers: {
    // Movie: apollo 개발자 툴의 cache에 있는 이름과 동일해야함
    Movie: {
      isLiked: () => false,
    },
    // 서버에서 제공하지 않는 Mutation 추가
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: { isLiked: !isLiked },
        });
      },
    },
  },
});

export default client;
