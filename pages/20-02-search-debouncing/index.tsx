// debouncing
// 검색하기 버튼 없애기
// lodash 사용

import { useQuery, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyColumn = styled.div`
  width: 400px;
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {/* 글목록 */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {/* 페이지네이션 */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
