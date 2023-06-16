import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
function ModalItem({ title = "", isOpen = false, children, ...rests }) {
  return (
    <Modal title={title} open={isOpen} {...rests}>
      {children}
    </Modal>
  );
}

export default ModalItem;
