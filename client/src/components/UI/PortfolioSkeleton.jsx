import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

const PortfolioSkeleton = () => {
  return (
    <>
      <div className="column">
        <div className="folio-item" style={{ marginBlock: "2rem" }}>
          <div
            className="folio-item__thumb"
            style={{
              background: grey[500],
              height: "25rem",
              padding: "0.5rem 1.5rem",
            }}
          >
            <Skeleton width={200} height={50} sx={{ bgcolor: grey[100] }} />
            <h4 className="folio-item__title">
              <Skeleton width={300} sx={{ bgcolor: grey[300] }} />
            </h4>
            <Skeleton
              sx={{ marginTop: "10rem", bgcolor: grey[200] }}
              width={120}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectSkeletonSection = () => {
  return (
    <>
      <PortfolioSkeleton />
      <PortfolioSkeleton />
      <PortfolioSkeleton />
      <PortfolioSkeleton />
    </>
  );
};

export default ProjectSkeletonSection;
