export function renderProject(project) {
  const container = document.getElementById('project-container');

  container.innerHTML = `
        <div class="project-name">${project.name}</div>
        <div class="project-author">${project.author}</div>
        <div class="project-heading2">${project.heading2}</div>
        <div class="project-time">${project.time}</div>
        
        <div class="project-section">
            <div class="section-label">Why I build it:</div>
            <div class="section-content">${project.whyBuild}</div>
        </div>
        
        <div class="project-section">
            <div class="section-label">GITHUB LINK</div>
            <div class="section-content">
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">${project.githubLink}</a>
            </div>
        </div>
        
        <hr class="project-divider">
        
        <div class="project-section">
            <div class="section-label">Team</div>
            <div class="section-content">${project.team}</div>
        </div>
        
        <hr class="project-divider">
        
        <div class="project-section">
            <div class="section-label">Quick Look</div>
            <div class="section-content">${project.quickLook}</div>
        </div>
        
        <hr class="project-divider">
        
        <div class="project-media">
            <div class="media-section">
                <div class="section-label">Images</div>
                <div class="media-grid">
                    ${
  project.images && project.images.length > 0
    ? project.images
      .map(
        (img, index) =>
          `<div class="media-item">
                                <img src="${img.src}" alt="${img.alt || `Project image ${index + 1}`}" class="project-image-media">
                            </div>`
      )
      .join('')
    : '<div class="media-item"><div class="media-placeholder">Image 1</div></div><div class="media-item"><div class="media-placeholder">Image 2</div></div><div class="media-item"><div class="media-placeholder">Image 3</div></div>'
}
                </div>
            </div>
            
            <div class="media-section">
                <div class="section-label">Video</div>
                <div class="video-container">
                    ${
  project.video
    ? `<video controls class="project-video">
                            <source src="${project.video.src}" type="${project.video.type || 'video/mp4'}">
                            Your browser does not support the video tag.
                           </video>`
    : '<div class="media-placeholder video-placeholder">Video placeholder</div>'
}
                </div>
            </div>
        </div>
    `;
}
