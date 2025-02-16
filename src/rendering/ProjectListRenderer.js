import ProjectPanelRenderer from './ProjectPanelRenderer.js'

export default class ProjectListRenderer {
	static projects = [];

	static set projects(projects) {
		this.projects = projects
	}

	static renderProjectsList() {
		const projectItemsListEl = document.createElement("div")
		projectItemsListEl.id = "project-list"

		this.projects.forEach((project, index) => {
			const projectItemEl = document.createElement("span")
			projectItemEl.classList.add("project-item")

			projectItemEl.addEventListener("click", (e) => {
				ProjectPanelRenderer.project = project
				const mainEl = document.querySelector('main')
				mainEl.innerHTML = ''
				mainEl.appendChild(ProjectPanelRenderer.renderCurrentProject())
			})

			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = project.title
			projectItemsListEl.appendChild(projectItemEl)
		})
		return projectItemsListEl
	}
}