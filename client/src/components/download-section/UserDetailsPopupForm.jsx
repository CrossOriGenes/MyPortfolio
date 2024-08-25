import { useRef } from "react";
import Modal from "../UI/Modal";

const UserDetailsPopupForm = ({ onClose, onSubmit }) => {
  const nameRef = useRef();
  const mailRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: nameRef.current.value,
      email: mailRef.current.value,
    };
    onSubmit(userData);
    onClose();
  };

  return (
    <Modal
      title="Let me know you..."
      className="modal-content userdetails-modal"
      onClose={onClose}
    >
      <div className="modal-body py-2 px-4">
        <form onSubmit={submitFormHandler}>
          <div className="d-flex flex-column">
            <div className="col-md-12 mt-4 mb-0">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                minLength={3}
                ref={nameRef}
                required
              />
            </div>
            <div className="col-md-12 mt-0">
              <label htmlFor="mail">Your Email</label>
              <input
                type="email"
                id="mail"
                minLength={10}
                ref={mailRef}
                required
              />
            </div>
          </div>
          <div className="modal-footer" style={{ marginBottom: "-1rem" }}>
            <button type="reset" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-style">
              Submit & Download
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UserDetailsPopupForm;
