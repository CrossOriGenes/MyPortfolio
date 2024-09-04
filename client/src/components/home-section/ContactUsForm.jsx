import { useRef } from "react";

const ContactUsForm = ({ onSubmitData }) => {
  const nameRef = useRef();
  const subjectRef = useRef();
  const mailBodyRef = useRef();
  const formRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const emailData = {
      username: nameRef.current.value,
      subject: subjectRef.current.value || "I have an idea..💡",
      content: mailBodyRef.current.value,
    };
    onSubmitData(emailData);
    formRef.current.reset();
  }

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div
        className="row form-row justify-content-center"
        style={{ columnGap: "6rem" }}
      >
        <div className="form-group col-sm-5 pl-0">
          <input
            type="text"
            className="form-control p-4"
            ref={nameRef}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group col-sm-5 pr-0">
          <input
            type="text"
            className="form-control p-4"
            ref={subjectRef}
            placeholder="Subject:  Hiring for a special web-design"
          />
        </div>
      </div>
      <div className="form-group col-md-11 d-flex justify-content-center m-auto">
        <textarea
          className="form-control p-4"
          ref={mailBodyRef}
          rows={5}
          placeholder="Your Message..."
          defaultValue={""}
          required
        />
      </div>
      <div className="d-flex justify-content-center footer-email-us">
        <button className="btn btn--primary h-full-width">Let's Talk</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
