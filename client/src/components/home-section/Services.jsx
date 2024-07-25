const Services = () => {
  return (
    <section id="services" className="s-services target-section h-dark-bg">
      <div className="row s-services__content">
        <div className="vert-line" />
        <div className="column large-6 s-services__leftcol">
          <div className="section-intro" data-num="02" data-aos="fade-up">
            <h3 className="subhead">Expertise</h3>
            <h1 className="display-1">
              I focus on crafting web experiences and designs that works.
            </h1>
          </div>
          <p className="lead" data-aos="fade-up">
            Designs of the appliactions are the highest lookup in modern-day
            real-time softwares. When when it comes to us, it's no-doubtebly the
            best I try to offer. All the UI works, presentation and seamless
            work-flow are performed with high precision and skills keeping both
            the taste of users and according to the current market strategies in
            mind.
          </p>
        </div>
        {/* end  s-services--leftcol */}
        <div className="column large-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" data-aos="fade-down">
              <h5 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>Frontend Development</span>
                </button>
              </h5>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  High quality, Environment-oriented, React and native-based
                  frontends are created, providing the flexiblity for various
                  server plugins like <strong>Express, Django</strong> or{" "}
                  <strong>Laravel</strong> like frameworks
                </div>
              </div>
            </div>
            <div className="accordion-item" data-aos="fade-down">
              <h5 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>Application Design</span>
                </button>
              </h5>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  High quality UI/UX/wireframe designs supprting features like
                  <strong>"material-icons", "AnimeJS"</strong> and much more
                  that comes in all supported{" "}
                  <strong>'.psd','.jpeg','.gif'</strong> or{" "}
                  <strong>'.png'</strong> formats.
                </div>
              </div>
            </div>
            <div className="accordion-item" data-aos="fade-down">
              <h5 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>Database design & Analysis</span>
                </button>
              </h5>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  An all user-friendly, managable and structured data-flow is
                  demonstrated using the UML, Sequential, DFD and ERD diagrams
                  providing the flexibility to switch between any Database
                  approach whether it may be <strong>SQL</strong> or{" "}
                  <strong>MongoDB</strong> no matter what you choose.
                </div>
              </div>
            </div>
            <div className="accordion-item" data-aos="fade-down">
              <h5 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>E-Commerce</span>
                </button>
              </h5>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  When it comes to the point of payment and credentials, the
                  most important thing to be looked after is security. I as a
                  developer provide the highly secured and smooth cryptographic
                  currency conversion features conjuncted with{" "}
                  <strong>RazorPay</strong> payment system to unlock all the
                  possible payment methods to smoothly carry out your
                  transactions, no matter where you are sitting now! Its all
                  verified and the most secured system provided.
                </div>
              </div>
            </div>
          </div>

          {/* end services-list */}
        </div>
      </div>
      {/* s-services__content */}
    </section>
  );
};

export default Services;
