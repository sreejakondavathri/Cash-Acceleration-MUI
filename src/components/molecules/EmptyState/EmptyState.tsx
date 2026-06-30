import Typography from "@mui/material/Typography";

import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({
  message,
}: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <Typography className={styles.message}>
        {message}
      </Typography>
    </div>
  );
};

export default EmptyState;