import {
  VerticalTimeline,VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
//import { experiences } from "../constants";

import { textVariant } from "../utils/motion";


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience and Projects
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className="vertical-timeline-element-title">Contributor</h3>
        <h4 className="vertical-timeline-element-subtitle">GSSOC</h4>
        <p>
          Contributed to many JS Projects in GSSOC
          </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className="vertical-timeline-element-title">Hackshetra'23</h3>
        <p>
        Participated in Hackshetra'23 a hackathon at National Level where
        more than 100 teams participated and our team was among the
        top 20 teams in the event
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className="vertical-timeline-element-title">
        2nd runner up in MICROEXPLORER</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
        In the captivating competition of Microexplorer, we embarked on a thrilling quest to guide our self-built bots across the ultimate finish line. Amidst the intense journey, we encountered a diverse array of hurdles, including tunnels, sand rocks, and even challenging flyovers. 
        As a team of four, we engineered an autonomous bot using an Arduino microcontroller. With Bluetooth control at our fingertips, we triumphantly guided our creation through a series of hurdles, conquering the ultimate finish line.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className="vertical-timeline-element-title">Contributor</h3>
        <h4 className="vertical-timeline-element-subtitle">Fossasia</h4>
        <p>
          Contributed to its project of SUSI.AI Web Application
          SUSI.AI is an artificial intelligence system, combining pattern matching, internet data, data flow, and inference engine principles. 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className="vertical-timeline-element-title">Media-Player-Controlling-by-HandGestures</h3>
        
        <p>
        In this Project we try to control our media player using hand gestures with the help of OpenCV and Python.
        </p>
      </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience