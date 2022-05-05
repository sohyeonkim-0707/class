import axios from "axios";

export default function OpenGraphPreviewPage() {
  const onClickOpenGraph = async () => {
    const result = await axios.get("http://www.gmarket.co.kr");
    console.log(result.data);
    console.log(result.data.split("<meta"));
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };

  return (
    <div>
      <h1>사이트미리보기연습</h1>
      <button onClick={onClickOpenGraph}>미리보기 실행</button>
    </div>
  );
}
