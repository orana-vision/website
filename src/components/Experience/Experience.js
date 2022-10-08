import React, { useRef } from "react";
import { Collapse } from "antd";
import { Timeline } from "antd";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import useIsInViewport from "../../utils/inViewport";

import "./Experience.css";
import translate from "../../utils/translations";
const Experience = ({ language }) => {
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
        <span className={useIsInViewport(faqTxtRef) ? "faq-txt-animation titles" : "titles"}>{translate(language).experience.faq}</span>
        <div ref={faqRef} className="faq-container">
          <Collapse defaultActiveKey={["1"]} onChange={onChange} className={useIsInViewport(faqRef) ? "collapse faq-animation" : "collapse"}>
            <Panel header={translate(language).experience.question_1} key="1" className="panel">
              <p>{translate(language).experience.answer_1}</p>
            </Panel>
            <Panel header={translate(language).experience.question_2} key="2" className="panel">
              <p>{translate(language).experience.answer_2}</p>
            </Panel>
            <Panel header={translate(language).experience.question_3} key="3" className="panel">
              <p>{translate(language).experience.answer_3}</p>
            </Panel>
            <Panel header={translate(language).experience.question_4} key="4" className="panel">
              <p>{translate(language).experience.answer_4}</p>
            </Panel>
            <Panel header={translate(language).experience.question_5} key="5" className="panel">
              <p>{translate(language).experience.answer_5}</p>
            </Panel>
            <Panel header={translate(language).experience.question_6} key="6" className="panel">
              <p>{translate(language).experience.answer_6}</p>
            </Panel>
          </Collapse>
        </div>
        <div ref={timelineTxtRef}>
          <span className={useIsInViewport(timelineTxtRef) ? "timeline-txt-animation titles" : "titles"}>{translate(language).experience.timeline_title}</span>
        </div>
        <div ref={timelineRef} className="timeline-container">
          <Timeline pending mode="left" className={useIsInViewport(timelineRef) ? "timeline timeline-animation" : "timeline"}>
            <Timeline.Item label={translate(language).experience.timeline_1_label} color="green" className="timeline-item">
              {translate(language).experience.timeline_1_desc}
            </Timeline.Item>
            <Timeline.Item label={translate(language).experience.timeline_2_label} className="timeline-item">
              {translate(language).experience.timeline_2_desc}
            </Timeline.Item>
            <Timeline.Item label={translate(language).experience.timeline_3_label} className="timeline-item">
              {translate(language).experience.timeline_3_desc}
            </Timeline.Item>
            <Timeline.Item label={translate(language).experience.timeline_4_label} className="timeline-item">
              {translate(language).experience.timeline_4_desc}
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
