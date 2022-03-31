import { useQuery, gql } from "@apollo/client";
import Board from "../../src/components/units/board/14-05-board-pagination/Board";
import PageNation from "../../src/components/units/board/14-05-board-pagination/Pagination";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <div>
      <Board data={data} />
      <PageNation refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
