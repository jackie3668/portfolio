import React from 'react'
import './Project01.css'
import mockup_all from '../../../asset/project/project01/mockup-all.png'
import persona from '../../../asset/project/project01/persona.jpg'
import ideation from '../../../asset/project/project01/ideation.png'

const Project01 = () => {
  return (
    <div className='project01 project'>
      <div className="project01-overview">
        <div className="project01-overview-top">
          <h4>User Centered Design</h4>
          <h1>WinterBliss</h1>
          <h2>Understanding and Addressing Mental Health Challenges In the Winter Of Toronto</h2>
          <div className="project01-overview-top-details">
            <div className="project01-overview-top-details-overview">
              <h2>Overview</h2>
              <p>There is a simple fact that people’s life, working and study habits have drastically changed since the start of COVID-19 in 2020. While we do save a lot of time from commuting, but staying isolated at home, lacking physical interaction with peers, constant procrastination, and social media distractions throughout the day hinder our productivity and motivation.</p>
            </div>
            <div className="project01-overview-top-details-info">
              <p><span>Time Frame: </span> Sep 2023 to Dec 2023 (12 Weeks)</p>
              <p><span>Role: </span>Studio Lead during prototyping phase</p>
              <p><span>Contribution: </span>Primary research, secondary research, persona, affinity diagram, ideation, mid-fidelity prototyping, presentation, etc</p>
              <p><span>Key Competencies: </span>Figma, Canva, mobile interface design, qualitative research, quantitative research, etc</p>
            </div>
          </div>
        </div>
        <div className="project01-overview-bottom">
          <h1>Final Product</h1>
          <img src={mockup_all} alt="" />
        </div>
        <div className="project01-details">
          <div className="project01-details-research">
            <h1>Primary and Secondary Research</h1>
            <p>The study utilized a questionnaire and interviews to explore mental health challenges during Toronto's winter. Participants provided informed consent and answered structured questions. Thematic analysis and the affinity diagram method identified key themes like seasonal mood changes and coping mechanisms. Findings revealed significant winter-induced mental health impacts, underscoring the need for accessible support and effective coping strategies.</p>
          </div>
          <div className="project01-details-persona">
            <h1>Persona</h1>
            <img src={persona} alt="" />
            <p>Li Hua's persona vividly illustrates the mental health challenges faced during Toronto's winters, with an emphasis on the impact of the harsh weather conditions. This persona helps in understanding the typical needs, goals, and obstacles of students during winter, thereby guiding the development of effective strategies and solutions to enhance their mental well-being and overall quality of life during the colder months.</p>
          </div>
          <div className="project01-details-ideation">
            <h1>Ideation</h1>
            <img src={ideation} alt="" />
          </div>
          <div className="project01-details-prototype">
            <h1>Prototype</h1>
            <button><a href="https://www.figma.com/proto/Qlno4l7ZElCxOq2nFYCltV/WinterBliss?type=design&node-id=6-5&t=MU705UTqKDvRoWCW-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A5&mode=design" target="_blank">See Mid-Fidelity Prototype</a></button>
          </div>
          <div className="project01-details-evaluation">
            <h1>Reflection</h1>
            <p>Post-prototype, our focus shifts to user testing and iterative refinement. This process honed my skills in empathetic, user-centered design, and problem-solving. I learned the value of teamwork and diverse perspectives in creating functional, aesthetic solutions. Next, we'll integrate user feedback, emphasizing usability improvements, further advancing my design thinking and user experience strategies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project01