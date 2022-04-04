// @apollo/client의 useQuery 훅을 불러와 사용한다.
import { useQuery, gql } from "@apollo/client";
// graphql-tag 패키지에서 제공하는 gql이라는 temperal literal tag을 사용해서
// 일반 자바스크립트 문자열을 Graphql 구문으로 바꿔준다.
// 그 다음 @apolo/react-hooks 패키지에서 import한 useQuery 리액트 함수에
// 이 graphql 쿼리를 인자로 넘겨서 호출!!!
// 그러면 useQuery 함수는 응답데이터(data) 뿐만 아니라, 로딩(loading)여부와 오류(error)까지 함께 리턴한다

// 정적라우팅

// 세팅부분
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  // useQuery 조회 실행부분
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83011 },
  });

  console.log(data); // 데이터확인

  return (
    <div>
      <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</div>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목:{data?.fetchBoard.title}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
    </div>
  );
}
