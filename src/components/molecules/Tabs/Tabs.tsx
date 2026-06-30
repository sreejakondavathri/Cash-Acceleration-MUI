import { Tab, Tabs as MuiTabs } from "@mui/material";
import styles from "./Tabs.module.css";

interface TabsProps {
  activeTab: "contracts" | "cashKicks";
  onTabChange: (
    value: "contracts" | "cashKicks"
  ) => void;
}

const Tabs = ({
  activeTab,
  onTabChange,
}: TabsProps) => {
  return (
    <MuiTabs
      value={activeTab}
      onChange={(_, value) => onTabChange(value)}
      className={styles.tabs}
      sx={{
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      <Tab
        value="contracts"
        label="My Contracts"
        className={styles.tab}
      />

      <Tab
        value="cashKicks"
        label="My Cash Kicks"
        className={styles.tab}
      />
    </MuiTabs>
  );
};

export default Tabs;