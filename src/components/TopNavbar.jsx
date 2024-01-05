
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  tNavbar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2), // Adjust the spacing as needed
  },
  tab: {
    marginRight: theme.spacing(2), // Adjust the spacing between tabs as needed
  },
}));

const TopNavbar = ({getTabNumber}) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    getTabNumber(activeTab)
  }, [activeTab]);

  return (
    <div className={classes.tNavbar}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Inbox" className={classes.tab} />
        <Tab label="All Calls" className={classes.tab} />
      </Tabs>
    </div>
  );
};

export default TopNavbar;