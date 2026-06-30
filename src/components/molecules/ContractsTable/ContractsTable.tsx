import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { Contract } from "../../../types/cashAcceleration.types";

import styles from "./ContractsTable.module.css";

interface ContractsTableProps {
  contracts: Contract[];
}

const ContractsTable = ({
  contracts,
}: ContractsTableProps) => {
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
            Type
          </TableCell>

          <TableCell className={styles.headerCell}>
            Per Payment
          </TableCell>

          <TableCell className={styles.headerCell}>
            Term Length
          </TableCell>

          <TableCell
            className={`${styles.headerCell} ${styles.lastHeader}`}
          >
            Payment Amount
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {contracts.map((contract) => (
          <TableRow key={contract.id}>
            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {contract.name}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {contract.type}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Typography className={styles.bodyText}>
                {contract.perPayment}
              </Typography>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Box>
                <Typography className={styles.bodyText}>
                  {contract.termLength}
                </Typography>

                <Typography className={styles.caption}>
                  {contract.fee}
                </Typography>
              </Box>
            </TableCell>

            <TableCell className={styles.bodyCell}>
              <Box>
                <Typography className={styles.bodyText}>
                  {contract.paymentAmount}
                </Typography>

                <Typography className={styles.caption}>
                  {contract.financedAmount}
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContractsTable;