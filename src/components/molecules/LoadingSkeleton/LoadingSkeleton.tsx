import Skeleton from "@mui/material/Skeleton";

import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Skeleton data-testid="loading-skeleton"
          key={item}
          variant="rounded"
          height={56}
          className={styles.skeleton}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;