import React, { useState } from 'react'
import './ProjectPreview.css'
import left from '../../asset/ui/arrow-circle-left.png'
import right from '../../asset/ui/arrow-circle-right.png'
import arrow from '../../asset/ui/diagonal-arrow.png'

const ProjectPreview = ({ id, type, title, tagline, keywords, description, imageUrls, linkUrl, isReversed }) => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleLeftClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1)
    }
    else {
      setCarouselIndex(imageUrls.length - 1)
    }
  }
  const handleRightClick = () => {
    if (carouselIndex < imageUrls.length - 1) {
      setCarouselIndex(carouselIndex + 1)
    }
    else {
      setCarouselIndex(0)
    }
  }

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
          <img src={imageUrls[carouselIndex]} alt="" />
        </div>
        <div className="project-preview-middle-buttons">
            <img onClick={handleLeftClick} src={left} alt="" />
            <img onClick={handleRightClick} src={right} alt="" />
        </div>
      </div>
      <div className="project-preview-right">
        <h5>{tagline}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <button>{type === 'UX/UI' ? 'LEARN MORE' : 'VIEW WEBSITE'} <img src={arrow} alt="" /></button>
        </a>
      </div>
    </div>
  )
}

export default ProjectPreview