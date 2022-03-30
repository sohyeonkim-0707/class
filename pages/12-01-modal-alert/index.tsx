// 경고메세지
import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClcikSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다!!" });
  };

  const onClcikFailButton = () => {
    Modal.error({ content: "비밀번호가 틀렸습니다!!" });
  };

  return (
    <div>
      <button onClick={onClcikSuccessButton}>성공했을때!</button>
      <button onClick={onClcikFailButton}>실패했을때!</button>
    </div>
  );
}
