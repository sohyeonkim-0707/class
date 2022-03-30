// ant 디자인 css 복사해서 넣어야 별이 안깨짐
import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);
  // useState(별개수)

  // 함수형 컴포넌트로 바꿔

  // state = {
  //   value: 3,
  // };

  // handleChange = (value) => {
  //   this.setState({ value });
  // };

  const handleChange = (value: number) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}

// ant 디자인 개발자가 만든 onchange 우리 것이 아님
