import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import { pswpImages } from "../../utils/Utilities";

const Portfolio = () => {
  useEffect(() => {
    /* photoswipe
     * ----------------------------------------------------- */
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-project__gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-6 medium-8 tab-full">
          <div className="section-intro" data-num="03" data-aos="fade-up">
            <h3 className="subhead">Portfolio</h3>
            <h1 className="display-1">
              A selection of recent projects I have worked on.
            </h1>
          </div>
        </div>
      </div>
      {/* s-porfolio__header */}
      <div
        className="row s-porfolio__list block-large-1-2 collapse-col"
        id="my-project__gallery"
      >
        {pswpImages.map(
          (image) => (
            <div className="column" data-aos="fade-up" key={image.id}>
              <div className="folio-item">
                <div className="folio-item__thumb">
                  <a
                    className="folio-item__thumb-link"
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={`my-project__gallery-${image.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={image.thumbnailURL}
                      // srcSet={image.thumbnailURLSets}
                      alt=""
                    />
                  </a>
                </div>
                <div className="folio-item__info">
                  <div className="folio-item__cat">{image.info.category}</div>
                  <h4 className="folio-item__title">{image.info.title}</h4>
                </div>
                <a
                  href={image.info.projectLink}
                  title="Project Link"
                  className="folio-item__project-link"
                >
                  Project Link
                </a>
                <div className="folio-item__caption">
                  <p>{image.info.description}</p>
                </div>
              </div>
            </div>
          )
          // {/* end column */}
        )}
      </div>
      {/* folio-list */}
    </section>
  );
};

export default Portfolio;
