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
            Suspendisse eu ligula. Duis arcu tortor, suscipit eget, imperdiet
            nec, imperdiet iaculis, ipsum. Nulla facilisi. Etiam rhoncus.
            Praesent blandit laoreet nibh. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Cras sagittis. Praesent egestas
            tristique nibh.
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
                  Suspendisse non nisl sit amet velit hendrerit rutrum. Etiam
                  vitae tortor. Ut tincidunt tincidunt erat.
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
                  Fusce egestas elit eget lorem. Donec venenatis vulputate
                  lorem. Nam at tortor in tellus interdum sagittis. Vestibulum
                  fringilla pede sit amet augue..
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
                  Ut id nisl quis enim dignissim sagittis. Pellentesque egestas,
                  neque sit amet convallis pulvinar, justo nulla eleifend augue,
                  ac auctor orci leo non est
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
                  Praesent ac sem eget est egestas volutpat. Nam pretium
                  turpiset arcu. Quisque ut nisi.
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
}

export default Services;
