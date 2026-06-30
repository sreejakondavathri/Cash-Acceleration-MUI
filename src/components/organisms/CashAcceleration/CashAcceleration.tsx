import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Tabs from "../../molecules/Tabs/Tabs";
import ContractsTable from "../../molecules/ContractsTable/ContractsTable";
import CashKicksTable from "../../molecules/CashKicksTable/CashKicksTable";
import LoadingSkeleton from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import EmptyState from "../../molecules/EmptyState/EmptyState";
import ErrorState from "../../molecules/ErrorState/ErrorState";

import {
  getContracts,
  getCashKicks,
} from "../../../services/cashAccelerationService";

import type {
  Contract,
  CashKick,
} from "../../../types/cashAcceleration.types";

import styles from "./CashAcceleration.module.css";

const CashAcceleration = () => {
  const [activeTab, setActiveTab] = useState<
    "contracts" | "cashKicks"
  >("contracts");

  const [contracts, setContracts] = useState<Contract[]>([]);
  const [cashKicks, setCashKicks] = useState<CashKick[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const contractsData = await getContracts();

        const cashKickData = await getCashKicks();

        setContracts(contractsData);

        setCashKicks(cashKickData);

        setError("");
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Box className={styles.container}>
      <Paper className={styles.paper}>
        <div className={styles.header}>
          <Typography
            variant="h5"
            className={styles.title}
          >
            Cash Acceleration
          </Typography>

          <InfoOutlinedIcon
            className={styles.infoIcon}
          />
        </div>

        <Tabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {loading && <LoadingSkeleton />}

        {!loading && error && (
          <ErrorState message={error} />
        )}

        {!loading &&
          !error &&
          activeTab === "contracts" && (
            <>
              {contracts.length === 0 ? (
                <EmptyState message="No Contracts Found" />
              ) : (
                <ContractsTable
                  contracts={contracts}
                />
              )}
            </>
          )}

        {!loading &&
          !error &&
          activeTab === "cashKicks" && (
            <>
              {cashKicks.length === 0 ? (
                <EmptyState message="No Cash Kicks Found" />
              ) : (
                <CashKicksTable
                  cashKicks={cashKicks}
                />
              )}
            </>
          )}
      </Paper>
    </Box>
  );
};

export default CashAcceleration;