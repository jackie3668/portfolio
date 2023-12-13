import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.css'

const ProjectPreview = ({ id, type, title, tagline, keywords, description, imageUrls, linkUrl, isReversed }) => {

  return (
    <div className={`project-preview ${isReversed ? 'reversed' : ''}`}>
      <div className="project-preview-left">
        <h5>{type}</h5>
        <h1>{id}</h1>
        <h4>Key Competencies</h4>
          {keywords.map((keyword, index) => (
            <p key={index}>{keyword}</p>
          ))}
      </div>
      <div className="project-preview-middle">
        <div className="project-preview-middle-image">
          {imageUrls.map((image, index) => (
            <img src={image} alt="" />
          ))}
        </div>
        <div className="project-preview-middle-buttons">
    
        </div>
      </div>
      <div className="project-preview-right">
        <h5>{tagline}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={`/${id}`}>
          <button>LEARN MORE</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectPreview