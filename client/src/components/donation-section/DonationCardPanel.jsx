import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

const DonationCardPanel = ({ onPaymentRequest }) => {
  const [emjKbdIsOpen, setemjKbdIsOpen] = useState(false);
  const [amount, setAmount] = useState(3);
  const nameRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const placeEmoji = (emojiData, e) => {
    messageRef.current.value += emojiData.emoji;
    setemjKbdIsOpen((prev) => !prev);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value * 3);
  };

  let amountInvalid = false;
  if (isNaN(amount) || amount <= 0) {
    amountInvalid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: nameRef.current.value,
      message: messageRef.current.value,
    };

    onPaymentRequest(userData);
    formRef.current.reset();
  };

  return (
    <div className="card column donation-card">
      <h3 className="header-text">
        Buy <span>me</span> a coffee
      </h3>
      <div className="position-relative container no-chooser">
        <div className="position-relative d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <span className="coffee-icon">☕</span>
            <i className="fas fa-xmark" />
          </div>
          <div className="nof-items__btns">
            <div>
              <input
                type="radio"
                id="1"
                name="nof-coffee"
                value={1}
                defaultChecked
                onChange={onAmountChange}
              />
              <label htmlFor="1" className="item-btn">
                1
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="2"
                name="nof-coffee"
                value={2}
                onChange={onAmountChange}
              />
              <label htmlFor="2" className="item-btn">
                2
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="3"
                name="nof-coffee"
                value={3}
                onChange={onAmountChange}
              />
              <label htmlFor="3" className="item-btn">
                3
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="4"
                name="nof-coffee"
                value={4}
                onChange={onAmountChange}
              />
              <label htmlFor="4" className="item-btn">
                4
              </label>
            </div>
          </div>
        </div>
        <input
          type="tel"
          id="coffee-nos"
          placeholder="10"
          maxLength={4}
          onChange={onAmountChange}
        />
      </div>
      <form onSubmit={submitHandler} ref={formRef} className="mb-0">
        <input
          type="text"
          ref={nameRef}
          placeholder="Your Name"
          id="username"
          required
        />
        <div className="position-relative">
          <EmojiPicker
            open={emjKbdIsOpen}
            style={{ position: "absolute", bottom: "0", right: "0" }}
            searchDisabled
            skinTonesDisabled
            theme="dark"
            onEmojiClick={placeEmoji}
          />
          <i
            className="far fa-face-smile-beam"
            onClick={() => setemjKbdIsOpen((prev) => !prev)}
          />
          <textarea
            ref={messageRef}
            id="message-input"
            maxLength={100}
            cols={5}
            placeholder="A Message for me... (optional)"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn--primary pay-btn"
            disabled={amountInvalid}
          >
            Pay ${amount}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationCardPanel;
