import React, { useState } from "react";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import TabPanel from "./TabPanel.js";
import "./About.css";
import VerticalTabs from "./TabPanel.js";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const About = () => {
    const [hover, setHover] = useState({ phoneHover: false, webHover: false, eshopHover: false });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInHover = (icon) => {
        console.log("IN");
        switch (icon) {
            case "phone":
                setHover({ ...hover, phoneHover: true });
                break;
            case "web":
                setHover({ ...hover, webHover: true });
                break;
            case "eshop":
                setHover({ ...hover, eshopHover: true });
        }
    };
    const handleOutHover = (icon) => {
        console.log("OUT");

        switch (icon) {
            case "phone":
                setHover({ ...hover, phoneHover: false });
                break;
            case "web":
                setHover({ ...hover, webHover: false });
                break;
            case "eshop":
                setHover({ ...hover, eshopHover: false });
        }
    };

    return (
        <section id="about">
            About
            <div className="services-container">
                <div
                    className="service-app"
                    onMouseEnter={() => handleInHover("phone")}
                    onMouseLeave={() => handleOutHover("phone")}>
                    <div className={hover.phoneHover ? "icons flip-in" : "icons"}>
                        <BsPhone style={{ color: "#06A77D" }} className="img-phone" />
                    </div>
                    <div className="text-app">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service-websites"
                    onMouseEnter={() => handleInHover("web")}
                    onMouseLeave={() => handleOutHover("web")}>
                    <div className={hover.webHover ? "icons flip-in" : "icons"}>
                        <BsGlobe2 style={{ color: "#9395D3" }} />
                    </div>
                    <div className="text-websites">We develop custom mobile apps that can help your bussiness.</div>
                </div>
                <div
                    className="service-eshop"
                    onMouseEnter={() => handleInHover("eshop")}
                    onMouseLeave={() => handleOutHover("eshop")}>
                    <div className={hover.eshopHover ? "icons flip-in" : "icons"}>
                        <AiOutlineShopping style={{ color: "#F1A208" }} />
                    </div>
                    <div className="text-eshop">We develop custom mobile apps that can help your bussiness.</div>
                </div>
            </div>
            <div>
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
                        {/* <Tab label="Ποιοι ειμαστε?" {...a11yProps(0)} />
                        <Tab label="Τι κανουμε??" {...a11yProps(1)} />
                        <Tab label="Γιατι την Orana?" {...a11yProps(2)} /> */}
                    </Tabs>
                    {/* {/* <TabPanel value={value} index={0}>
                        Ποίοι είμαστε?
                    </TabPanel> */}
                    {/* <TabPanel value={value} index={1}>
                        Τι κάνουμε?
                    </TabPanel> */}
                    <TabPanel value={value} index={2}>
                        Γιατί την Orana?
                    </TabPanel>
                </Box>
            </div>
        </section>
    );
};

export default About;
