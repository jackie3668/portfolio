import React from 'react'
import './Project01.css'
import mockup_all from '../../../asset/project/project01/Background-3.png'
import persona from '../../../asset/project/project01/persona.jpg'
import affinity from '../../../asset/project/project01/affinity.png'
import ideation from '../../../asset/project/project01/ideation.png'
import ideas from '../../../asset/project/project01/ideas.png'
import asis from '../../../asset/project/project01/asis.png'
import tobe from '../../../asset/project/project01/tobe.png'
import needs from '../../../asset/project/project01/needs.png'
import lofi from '../../../asset/project/project01/lofi.png'
import mifi from '../../../asset/project/project01/mifi.png'

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
              <h3>We developed a mental wellness app to provide a solution that fosters well-being and combats the challenges of winter blues.</h3>
              <div className="project01-overview-bottom">
                <h3>Final Product</h3>
                <img src={mockup_all} alt="" />
              </div>
            </div>
            <div className="project01-overview-top-details-info">
              <p><span>Time Frame: </span><br /> Sep 2023 to Dec 2023 (12 Weeks)</p>
              <p><span>Role: </span><br />Studio Lead during prototyping phase</p>
              <p><span>Contribution: </span><br />Study protocol design, primary research, secondary research, persona creation, affinity diagram, ideation, mid-fidelity prototyping, presentation, etc</p>
              <p><span>Key Competencies: </span><br />Figma, Canva, mobile interface design, qualitative research, quantitative research, etc</p>
            </div>
          </div>
        </div>
  
        <div className="project01-details">
          <div className="project01-details-research">
            <h1>Primary and Secondary Research</h1>
            <div className="project01-details-research-details-container">
              <div className="project01-details-research-details">
                <h4>Primary Research</h4>
                <p>The study used questionnaires and interviews to explore winter mental health in Toronto. Participants gave consent and answered questions. Analysis found key themes like seasonal mood changes. Results highlighted winter's mental health impact, emphasizing the need for support and coping strategies.</p>
              </div>
              <div className="project01-details-research-details">
                <h4>Secondary Research</h4>
                <ul>
                  <li>Winter impacts physical health and activity.</li>
                  <li>Biological changes affect sleep, mood, and behavior.</li>
                  <li>Reduced sunlight disrupts circadian rhythms, leading to SAD.</li>
                  <li>Treatments: antidepressants, light therapy, digital mental health.</li>
                  <li>Improve mental health: exercise, outdoors, social engagement, hobbies.</li>
                  <li>Wellness activities reduces loneliness, boosts well-being.</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="project01-details-artifacts">
            <h1>Design Process & Artifacts</h1>
            <div className="project01-details-artifacts-container">
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>Persona</h4>
                  <p>Li Hua's persona vividly illustrates the mental health challenges faced during Toronto's winters. It emphasizes the impact of harsh weather, aiding the development of strategies to enhance students' mental well-being during colder months.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={persona} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://www.figma.com/file/klmYftXD8iNhd7zYGP8Z6d/Low-Fi%2FTo-be-scenario%2FAffinity-diagram?type=whiteboard&node-id=0%3A1&t=dMDwTJ1ZB9EHmeVk-1">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>Affinity Diagram</h4>
                  <p>Our affinity diagram summarizes primary research findings, revealing the mental health challenges caused by Toronto's extended dark winters. Participants expressed a strong need for increased sunlight, community support, therapy accessibility, and engaging indoor activities to address Seasonal Affective Disorder (SAD).</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={affinity} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://www.figma.com/file/klmYftXD8iNhd7zYGP8Z6d/Low-Fi%2FTo-be-scenario%2FAffinity-diagram?type=whiteboard&node-id=0%3A1&t=dMDwTJ1ZB9EHmeVk-1">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>Needs Statements</h4>
                  <p>
Li Hua's needs statement is derived from comprehensive research findings, analysis, and insights gathered from the affinity diagram. It encompasses her aspirations to combat winter challenges and enhance her well-being by accessing a supportive community, resources, and fulfilling activities.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={needs} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://cdn.discordapp.com/attachments/938687515399962644/1188929429875998822/image.png?ex=659c4fd1&is=6589dad1&hm=e5a7aeef848be55cfaf215a9f57ad00a82e1358d0da5eb8d9254d6ad2ed9cba2&">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>As Is Scenario</h4>
                  <p>
                  The "As-Is Scenario" is a representation of Li Hua's daily experiences during winter, derived from our research analysis. It illustrates the challenges she faces, including waking up in the dark, struggling with winter clothing, and dealing with a lack of motivation and social activities, highlighting the impact of winter on her well-being.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={asis} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://cdn.discordapp.com/attachments/938687515399962644/1188938518379106355/image.png?ex=659c5848&is=6589e348&hm=d768fdfbcd141f4d64ebd4a20d5faa1978535575b5dcf8bfe55e21858518164a&">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>To Be Scenario</h4>
                  <p>
                  In the "To-Be Scenario," Li Hua's winter day is transformed, with better sleep, time management, and access to resources. She feels motivated, relaxed, and fulfilled, thanks to a supportive community and engaging activities.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={tobe} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://cdn.discordapp.com/attachments/938687515399962644/1188938446375485522/image.png?ex=659c5837&is=6589e337&hm=2ab40f10a8553ca4801b5f0317591cc9f2726c46560925386b3881d977d53113&">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>Ideation</h4>
                  <p>The ideas generated during the ideation phase can be categorized into several key areas to enhance Li Hua's winter experience. These include options for travel and vacations, online community and socialization, remote work/study solutions, improvements to the classroom environment, time management tools, journaling, weather-related tips, sleep patterns, professional support, social activities, activity ideas, sunlight access, home comfort, relocation options, and mental health support, all aimed at making the winter season more enjoyable and fulfilling for Li Hua.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={ideas} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://cdn.discordapp.com/attachments/938687515399962644/1188935939804905472/image.png?ex=659c55e1&is=6589e0e1&hm=f0031244db7526df10e9e18746546e38f50960ab075e8c698eb65dcc41b12b5d&
">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
              <div className='project01-details-artifacts-wrapper'>
                <div className="project01-details-artifacts-wrapper-text">
                  <h4>Ideation Prioritization Grid</h4>
                  <p>After a thorough assessment and evaluation of the ideas generated in the previous phase, we systematically organized them on a grid. This process led to the identification of a user-centric solution—a centralized community platform that encompasses resources, self-care tools, interest groups, and partner matching for socialization.</p>
                </div>
                <div className="project01-details-artifacts-wrapper-img">
                  <img src={ideation} alt="" />
                  <button>
                    <a target="_blank"  rel="noreferrer"  href="https://cdn.discordapp.com/attachments/938687515399962644/1189057064148926504/image.png?ex=659cc6af&is=658a51af&hm=2afb4ee81c8a3a3671d3aeb386352d390e474f35195cd2d502e1c78a25cd9a51&
">
View Full-Size Image </a>
                  </button>
                </div>
              </div>
            </div>
           
          </div>
          <div className="project01-details-prototype">
            <h1>Final Solution & Prototype</h1>
            <div className="project01-details-prototype-container">
              <div className='project01-details-prototype-lofi'>
                <h4>Low-Fidelity Prototype:</h4>
                <ul>
                    <li>Developed a low-fidelity prototype using FigJam.</li>
                    <li>Features 4 main tabs: Home, Community, Self-Care, and Resources.</li>
                    <li>Designed for early concept exploration and user flow testing.</li>
                    <li>Provides a basic visual structure of the app's layout.</li>
                </ul>
                <div className="project01-details-prototype-lofi-img"></div>
                <img src={lofi} alt="" />
                <button><a href="https://www.figma.com/file/klmYftXD8iNhd7zYGP8Z6d/Low-Fi%2FTo-be-scenario%2FAffinity-diagram?type=whiteboard&node-id=0%3A1&t=BzY36N85YfsWWI0y-1" target="_blank"  rel="noreferrer" >See Prototype</a></button>
              </div>
              <div className='project01-details-prototype-mifi'>
                <h4>Mid-Fidelity Prototype:</h4>
                <ul>
                    <li>Created a mid-fidelity prototype using Figma.</li>
                    <li>Integrated usability test feedback to enhance user experience.</li>
                    <li>Includes interactive elements and refined visual design.</li>
                    <li>A clickable prototype is available for evaluation and validation.</li>
                    <li>Represents a more detailed and functional version of the app interface.</li>
                </ul>
                <img src={mifi} alt="" />
                <button><a href="https://www.figma.com/proto/Qlno4l7ZElCxOq2nFYCltV/WinterBliss?type=design&node-id=6-5&t=MU705UTqKDvRoWCW-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A5&mode=design" target="_blank"  rel="noreferrer" >See Prototype</a></button>
              </div>
            </div>
          </div>
          <div className="project01-details-evaluation">
            <h1>Reflection</h1>
            <div className="project01-details-evaluation-text">
              <p>Post-prototype, our focus shifts to user testing and iterative refinement. This process honed my skills in empathetic, user-centered design, and problem-solving. I learned the value of teamwork and diverse perspectives in creating functional, aesthetic solutions. Next, we'll integrate user feedback, emphasizing usability improvements, further advancing my design thinking and user experience strategies.</p>
              <button>BACK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project01