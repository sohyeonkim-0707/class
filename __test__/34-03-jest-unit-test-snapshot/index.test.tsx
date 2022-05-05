import { render } from "@testing-library/react";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot/indes";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보기 -스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
});
