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
      // 💛 결과받아서 state에 넣어서 하는 방법
      // 💚 refetch  하는 방법 refetchQueries(요청 두번)
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "62681dcea8255b002988cfa2" },
      //   },
      // ],

      // 💙 optimisticResponse
      // cache 조작을 사용하면 optimisticResponse를 같이 사용할 수 있음
      // 낙관적으로 받겠다 ! 응답을 받기 전에 낙관적인 응답을 먼저 받겠다! 가짜! 라이크를 먼저 받아보겠다 !
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 기존에 있었던 like 개수 + 1
      },
      // 💙 cache 에 있는 것을 직접 조작하면서 refetch 안해됨 !
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
      <h1>옵티미스틱UI</h1>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기 !!! </button>
    </div>
  );
}
