import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
function ModalComponent({ title = "", isOpen = false, children, ...rests }) {
  return (
    <Modal title={title} open={isOpen} {...rests}>
      {children}
    </Modal>
  );
}

export default ModalComponent;