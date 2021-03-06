// optimisticUI

import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267692ea8255b002988cb2f" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "62681dcea8255b002988cfa2" },
      // ๐ ๊ฒฐ๊ณผ๋ฐ์์ state์ ๋ฃ์ด์ ํ๋ ๋ฐฉ๋ฒ
      // ๐ refetch  ํ๋ ๋ฐฉ๋ฒ refetchQueries(์์ฒญ ๋๋ฒ)
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "62681dcea8255b002988cfa2" },
      //   },
      // ],

      // ๐ optimisticResponse
      // cache ์กฐ์์ ์ฌ์ฉํ๋ฉด optimisticResponse๋ฅผ ๊ฐ์ด ์ฌ์ฉํ  ์ ์์
      // ๋๊ด์ ์ผ๋ก ๋ฐ๊ฒ ๋ค ! ์๋ต์ ๋ฐ๊ธฐ ์ ์ ๋๊ด์ ์ธ ์๋ต์ ๋จผ์  ๋ฐ๊ฒ ๋ค! ๊ฐ์ง! ๋ผ์ดํฌ๋ฅผ ๋จผ์  ๋ฐ์๋ณด๊ฒ ๋ค !
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // ๊ธฐ์กด์ ์์๋ like ๊ฐ์ + 1
      },
      // ๐ cache ์ ์๋ ๊ฒ์ ์ง์  ์กฐ์ํ๋ฉด์ refetch ์ํด๋จ !
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "62681dcea8255b002988cfa2" },
          data: {
            fetchBoard: {
              _id: "62681dcea8255b002988cfa2",
              __typename: "Board",
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>์ตํฐ๋ฏธ์คํฑUI</h1>
      <div>ํ์ฌ์นด์ดํธ(์ข์์):{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>์ข์์ ์ฌ๋ฆฌ๊ธฐ !!! </button>
    </div>
  );
}
