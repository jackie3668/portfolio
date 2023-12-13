import React from 'react'
import './FeaturedGallery.css'
import ProjectPreview from '../ProjectPreview/ProjectPreview'
import projects from '../../data/data'

const FeaturedGallery = () => {
  return (
    <div className="featured-gallery">
      <h1>Featured Projects</h1>
      {projects.map((project, index) => (
        <ProjectPreview 
        key={index}
        type={project.type}
        id={project.id}
        title={project.title}
        tagline={project.tagline}
        keywords={project.keywords}
        description={project.description}
        imageUrls={project.imageUrls}
        linkUrl={project.linkUrl}
        isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default FeaturedGallery