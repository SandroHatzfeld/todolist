import Controller from '../controller.js';
import ProjectList from '../projectList.js';
import ProjectPanelRenderer from './ProjectPanelRenderer.js'

export default class ProjectListRenderer {
	static #projects = ProjectList.projects


	static renderProjectsList() {
		this.#projects = ProjectList.projects

		const projectItemsListEl = document.createElement("div")
		projectItemsListEl.id = "project-list"

		this.#projects.forEach((project, index) => {
			const projectItemEl = document.createElement("p")
			projectItemEl.classList.add("project-item")

			projectItemEl.addEventListener("click", (e) => {
				ProjectList.currentProject = index
				
				Controller.renderToScreen()
			})

			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = `<span>${project.icon}</span> ${project.title}`
			projectItemsListEl.appendChild(projectItemEl)
		})
		return projectItemsListEl
	}
}