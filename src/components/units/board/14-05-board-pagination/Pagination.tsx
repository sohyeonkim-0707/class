import { useState } from "react";

export default function PageNation(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };

  // 이전페이지
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  // 다음페이지
  const onClickNextPage = () => {
    if (!(startPage + 10 <= props.lastPage)) return; // 이것에 반대되는 것은 리턴 불가
    setStartPage((prev) => prev + 10); // 기존것에다가 +10
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {` `}
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}

      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
