import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

// 동적라우팅

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
  const router = useRouter();
  console.log(router); // 라우터내용확인

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }, // 이부분이 이해가 안가
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
