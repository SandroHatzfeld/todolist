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
			const projectItemEl = document.createElement("div")
			projectItemEl.classList.add("project-item")

			projectItemEl.addEventListener("click", (e) => {
				ProjectList.currentProject = index
				Controller.renderToScreen()
			})

			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = `<span>${project.icon} ${project.title}</span>`

			const projectRemoveBtn = document.createElement("div")
			projectRemoveBtn.classList.add("project-item-remove")

			projectRemoveBtn.addEventListener("click", () => {
				ProjectList.removeProjectItem(index)
				Controller.updateProjectList()
			})

			projectItemEl.appendChild(projectRemoveBtn)
			projectItemsListEl.appendChild(projectItemEl)
		})
		return projectItemsListEl
	}


}