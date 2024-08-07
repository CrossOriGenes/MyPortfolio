import React, { useEffect } from "react";

const DownloadSection = () => {
  const googleLogin = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const onLoginSuccess = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/googleLogin", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      const result = await response.json();
      console.log(result);

      // if (response.ok) {
      //   // authCtx.login(result.token);
      //   // toast.success(result.msg);
      //   // setErrors(null);
      // } else {
      //   toast.error(result.msg || 'Failed to SignIn!);
      //   console.log(result);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onLoginSuccess();
  }, []);

  return (
    <section id="downloads" className="s-download target-section">
      <div className="s-download__section s-download__section--login">
        <div className="right-vert-line" />
        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-aos="fade-up">
              <h3 className="subhead" id="details-header">
                Authenticate
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
                Please Login to download my docs
              </h1>
            </div>
            <div className="large-full column mt-6" data-aos="fade-right">
              <button
                type="button"
                className="login-sc-btns"
                id="google-login-btn"
                onClick={googleLogin}
              >
                <i className="fa-brands fa-google-plus-g" />
                <span>Login with Google</span>
              </button>
              <button type="button" className="login-sc-btns" id="fb-login-btn">
                <i className="fa-brands fa-facebook-f" />
                <span>Login with Facebook</span>
              </button>
              <button
                type="button"
                className="login-sc-btns"
                id="github-login-btn"
              >
                <i className="fa-brands fa-github" />
                <span>Login with Github</span>
              </button>
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
                data-aos="fade-left"
              >
                <button type="button" className="btn btn--primary mb-0">
                  Download CV
                </button>
                <hr id="action-divider" />
                <button type="button" className="btn btn--stroke">
                  My certificates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
