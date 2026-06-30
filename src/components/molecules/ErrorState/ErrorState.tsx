import Alert from "@mui/material/Alert";

import styles from "./ErrorState.module.css";

interface ErrorStateProps {
  message: string;
}

const ErrorState = ({
  message,
}: ErrorStateProps) => {
  return (
    <Alert
      severity="error"
      className={styles.error}
    >
      {message}
    </Alert>
  );
};

export default ErrorState;