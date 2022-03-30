// 모달커스텀
import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false); // 초기값이 false 인데 클릭을 하면 true로 바뀜

  // 이 아래가 트루로 바뀐거야
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* 모달 삭제하고 새로 만드는 방법 조건부 렌더링 방식 */}

      {/* {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true} // 항상 true
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )} */}

      {/* 모달 숨겼다가 나타나게 하는 방법  */}
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal>
    </>
  );
}
// 최소화
// visible이 참이면 보여주고
// 거짓이면 우리 눈에서 안보이는거야
// 데이터는 그대로 남아있는거야
