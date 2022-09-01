import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            classname="tabs"
            sx={{ flexGrow: 1, bgcolor: "#41434e", display: "flex", height: "fit-content", marginTop: "4rem" }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 0, borderColor: "#333", color: "-webkit-linear-gradient(#eee, #333);" }}>
                <Tab label="Ποιοι ειμαστε?" {...a11yProps(0)} />
                <Tab label="Τι κανουμε??" {...a11yProps(1)} />
                <Tab label="Γιατι την Orana?" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Ποίοι είμαστε?
            </TabPanel>
            <TabPanel value={value} index={1}>
                Τι κάνουμε?
            </TabPanel>
            <TabPanel value={value} index={2}>
                Γιατί την Orana?
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}
