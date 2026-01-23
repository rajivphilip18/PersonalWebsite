import { projectsData } from './projectsData.js';
import { renderProject } from './projectRenderer.js';

function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('project');
}

function initProjectPage() {
  const projectId = getProjectIdFromURL();

  if (!projectId) {
    document.getElementById('project-container').innerHTML =
      '<p>Project not found. Please select a project from the homepage.</p>';
    return;
  }

  const project = projectsData[projectId];

  if (!project) {
    document.getElementById('project-container').innerHTML =
      '<p>Project not found.</p>';
    return;
  }

  renderProject(project);
}

initProjectPage();
