import React, { useRef } from "react";
import { Collapse } from "antd";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import useIsInViewport from "../../utils/inViewport";

import "./Experience.css";
const Experience = () => {
    const { Panel } = Collapse;

    const onChange = (key) => {
        console.log(key);
    };

    const faqRef = useRef();
    const timelineRef = useRef();
    const faqTxtRef = useRef();
    const timelineTxtRef = useRef();

    return (
        <section id="experience">
            <div ref={faqTxtRef} className="flex-experience container">
                <span className={useIsInViewport(faqTxtRef) ? "faq-txt-animation titles" : "titles"}>
                    Συχνές ερωτήσεις
                </span>
                <div ref={faqRef} className="faq-container">
                    <Collapse
                        defaultActiveKey={["1"]}
                        onChange={onChange}
                        className={useIsInViewport(faqRef) ? "collapse faq-animation" : "collapse"}>
                        <Panel header="Γιατί χρειάζομαι website;" key="1" className="panel">
                            <p>Το website είναι κάτι πολύ καλό.</p>
                        </Panel>
                        <Panel header="Πόσο θα μου κοστίσει;" key="2" className="panel">
                            <p>Έχουμε τις χαμηλότερες τιμές τις αγοράς!</p>
                        </Panel>
                        <Panel header="Σε πόσο καιρό θα είναι έτοιμο το website μου;" key="3" className="panel">
                            <p>Το πολύ σε δύο εβδομάδες το website θα βρίσκεται online!</p>
                        </Panel>
                    </Collapse>
                </div>
                <div ref={timelineTxtRef}>
                    <span className={useIsInViewport(timelineTxtRef) ? "timeline-txt-animation titles" : "titles"}>
                        Η πορεία με την Orana
                    </span>
                </div>
                <div ref={timelineRef} className="timeline-container">
                    <Timeline
                        mode="left"
                        className={useIsInViewport(timelineRef) ? "timeline timeline-animation" : "timeline"}>
                        <Timeline.Item label="Σήμερα" className="timeline-item">
                            Επικοινωνείτε μαζί μας .
                        </Timeline.Item>
                        <Timeline.Item label="Αύριο" className="timeline-item">
                            Συζητούμε αναλυτικά για το τι ζητάτε.
                        </Timeline.Item>
                        <Timeline.Item label="Σε δύο εβδομάδες" className="timeline-item">
                            Σας παρουσιάζουμε το προιόν που φτιάξαμε ειδικά για εσάς.
                        </Timeline.Item>
                        <Timeline.Item label="Τελικά" className="timeline-item">
                            Βλέπουμε μαζί τι αλλαγές χρειάζεται για να το φέρουμε ακριβώς στα μέτρα σας.
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </section>
    );
};

export default Experience;
