import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { VscChromeClose } from "react-icons/vsc";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    border: "none",
    background: "transparent",
    inset: 0,
    overflow: "visible",
  },
};

function ImageModal({ value: { src, alt }, isOpen, onClose }) {
  return (
    <div>
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
        <img className={css.imageModal} src={src} alt={alt} />
        <button className={css.buttonClose} onClick={onClose}>
          <VscChromeClose />
        </button>
      </Modal>
    </div>
  );
}

export default ImageModal;
