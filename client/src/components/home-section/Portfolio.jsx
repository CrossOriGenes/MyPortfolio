import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectSkeletonSection from "../UI/PortfolioSkeleton";
import { toast } from "react-toastify";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProjects() {
    try {
      setLoading(true);
      // const response = await fetch("https://crossorigenes148.onrender.com/api/allProjects");
      const response = await fetch("http://localhost:8000/api/allProjects");
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.msg || "Failed to fetch available posts!");
      }
      setLoading(false);
      setData(result || []);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProjects();
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
        {loading ? (
          <ProjectSkeletonSection />
        ) : (
          data.map((image) => (
            <div className="column" data-aos="fade-up" key={image._id}>
              <div className="folio-item">
                <div className="folio-item__thumb">
                  <a
                    className="folio-item__thumb-link"
                    href={image.largeURL.src}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={`my-project__gallery-${image._id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.thumbnailURL.src} alt="" />
                  </a>
                </div>
                <div className="folio-item__info">
                  <div className="folio-item__cat">{image.category}</div>
                  <h4 className="folio-item__title">{image.title}</h4>
                </div>
                <Link
                  to={image.projectLink}
                  title="Project Link"
                  className="folio-item__project-link"
                  target="_blank"
                >
                  Project Link
                </Link>
                <div className="folio-item__caption">
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* folio-list */}
    </section>
  );
};

export default Portfolio;
