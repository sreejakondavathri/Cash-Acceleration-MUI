import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { CashKick } from "../../../types/cashAcceleration.types";

import styles from "./CashKicksTable.module.css";

interface CashKicksTableProps {
  cashKicks: CashKick[];
}

const CashKicksTable = ({
  cashKicks,
}: CashKicksTableProps) => {
  return (
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell
            className={`${styles.headerCell} ${styles.firstHeader}`}
          >
            Name
          </TableCell>

          <TableCell className={styles.headerCell}>
            Status
          </TableCell>

          <TableCell className={styles.headerCell}>
            Maturity
          </TableCell>

          <TableCell className={styles.headerCell}>
            Total Received
          </TableCell>

          <TableCell
            className={`${styles.headerCell} ${styles.lastHeader}`}
          >
            Total Financed
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {cashKicks.map((cashKick) => (
          <TableRow key={cashKick.id}>
            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {cashKick.name}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Chip
                label={cashKick.status}
                className={styles.pendingChip}
              />
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {cashKick.maturity}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {cashKick.totalReceived}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {cashKick.totalFinanced}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CashKicksTable;