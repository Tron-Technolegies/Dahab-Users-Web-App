import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

export default function LeaderBoardTabs({ item1, item2, item3 }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        typography: "body1",
        marginTop: "20px",
        width: "100%",
        minWidth: "100%",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              backgroundColor: "#011532",
              width: "fit-content",
              marginX: "auto",
              marginBottom: "30px",
              borderRadius: "7px",
              padding: "5px",
            }}
          >
            <Tab label="Most Machines" value="1" sx={{ color: "#76C6E066" }} />
            <Tab label="Most BTC" value="2" sx={{ color: "#76C6E066" }} />
            <Tab label="Most Hashrate" value="3" sx={{ color: "#76C6E066" }} />
          </TabList>
        </Box>
        <TabPanel value="1">{item1}</TabPanel>
        <TabPanel value="2">{item2}</TabPanel>
        <TabPanel value="3">{item3}</TabPanel>
      </TabContext>
    </Box>
  );
}
