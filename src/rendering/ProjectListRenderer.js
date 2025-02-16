import ProjectPanelRenderer from './ProjectPanelRenderer.js'

export default class ProjectListRenderer {
	constructor(projects) {
		projects
	}

	projectPanelRender = new ProjectPanelRenderer()

	renderProjectsList() {
		const projectItemsListEl = document.createElement("div")
		projectItemsListEl.id = "project-list"

		this.projects.forEach((project, index) => {
			const projectItemEl = document.createElement("span")
			projectItemEl.classList.add("project-item")
			
			projectItemEl.addEventListener("click", (e) => {
				this.setCurrentProject = parseInt(e.target.dataset.projectIndex)
				const mainEl = document.querySelector('main')
				mainEl.innerHTML = ''
				mainEl.appendChild(this.projectPanelRender.renderCurrentProject())
			})

			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = project.title
			projectItemsListEl.appendChild(projectItemEl)

		})
		return projectItemsListEl
	}

}