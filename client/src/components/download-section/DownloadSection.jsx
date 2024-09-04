import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import UserDetailsPopupForm from "./UserDetailsPopupForm";
import { createDownloadLink } from "../../utils/Utilities";

const DownloadSection = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const submitToDownloadCVHandler = async (userData) => {
    try {
      const response = await toast.promise(
        fetch("https://crossorigenes148.onrender.com/downloads", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          pending: "Getting the download link...",
        }
      );

      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        createDownloadLink(process.env.REACT_APP_CV_LINK, "Snehodipto-CV");
        setTimeout(() => {
          toast.info(result.msg);
        }, 1500);
      }
    } catch (error) {
      toast.error("Failed to download!😢 Please try again later");
      console.error(error);
    }
  };

  const submitToDownloadZipHandler = async (userData) => {
    try {
      const response = await toast.promise(
        fetch("https://crossorigenes148.onrender.com/downloads", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          pending: "Getting the download link...",
        }
      );

      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        createDownloadLink(process.env.REACT_APP_ZIP_LINK, "Certificates");
        setTimeout(() => {
          toast.info(result.msg);
        }, 1500);
      }
    } catch (error) {
      toast.error("Failed to download!😢 Please try again later");
      console.error(error);
    }
  };

  return (
    <>
      <section id="downloads" className="s-download target-section">
        <div className="s-download__section s-download__section--login">
          <div className="right-vert-line" />
          <div className="row">
            <div className="column large-6 medium-8 tab-full">
              <div className="section-intro" data-aos="fade-up">
                <h3 className="subhead" id="details-header">
                  Know Me
                </h3>
                <h1
                  className="display-1"
                  style={{
                    fontWeight: "700",
                    fontSize: "5rem",
                    marginTop: "-1.5rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Here you get my work identity
                </h1>
              </div>
              <div className="large-full mt-6" data-aos="fade-right">
                <p
                  className="intro-description"
                  style={{ fontWeight: "300", color: "#222" }}
                >
                  Here is the actual downloadable CV describing myself and my
                  bio in short. You can also download and view my technical achievement
                  certificates from here just by providing your name and email
                  for so that I can thank you with an email confirmation.
                </p>
              </div>
            </div>

            <div className="column large-5 tab-full" data-aos="fade-left">
              <div className="download-wrapper d-flex flex-column container">
                <div className="preview-box d-flex justify-content-center align-items-center">
                  <div className="blur-backdrop">
                    <span>Preview</span>
                  </div>
                </div>
                <div
                  className="download-wrapper__actions d-flex flex-column"
                  data-aos="fade-up"
                >
                  <button
                    type="button"
                    className="btn btn--primary mb-0"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    Download CV
                  </button>
                  <hr id="action-divider" />
                  <button
                    type="button"
                    className="btn btn--stroke"
                    onClick={() => setOpen2((prev) => !prev)}
                  >
                    My certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <UserDetailsPopupForm
            onClose={() => setOpen(false)}
            onSubmit={submitToDownloadCVHandler}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open2 && (
          <UserDetailsPopupForm
            onClose={() => setOpen2(false)}
            onSubmit={submitToDownloadZipHandler}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DownloadSection;
