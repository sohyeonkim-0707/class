// 모달커스텀
import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState();

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        충전하기
      </Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}
