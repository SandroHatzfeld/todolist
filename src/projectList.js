import Project from './project.js'

export default class ProjectList {
	#projects = []
	/**
	 * @param {Project} project
	 */
	set addProject(project) {
		this.#projects.push(project)
	}

	get getProjects() {
		return this.#projects
	}

	#currentProjectIndex = 0

	/**
	 * @param {number} index
	 */
	set setCurrentProject(index) {
		this.#currentProjectIndex = index
	}

	get getCurrentProject() {
		return this.#projects[this.#currentProjectIndex]
	}

	renderProjectsList() {
		const projectItemsListEl = document.createElement("div")
		projectItemsListEl.id = "project-list"

		this.#projects.forEach((project, index) => {
			const projectItemEl = document.createElement("span")
			projectItemEl.classList.add("project-item")
			projectItemEl.addEventListener("click", (e) => {
				this.setCurrentProject = parseInt(e.target.dataset.projectIndex)
				const mainEl = document.querySelector('main')
				mainEl.innerHTML = ''
				mainEl.appendChild(this.renderCurrentProject())
			})
			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = project.title
			projectItemsListEl.appendChild(projectItemEl)

		})
		return projectItemsListEl
	}

	renderCurrentProject() {
		const currentProject = this.#projects[ this.#currentProjectIndex ]

		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.innerHTML = "<span class='project-icon'>" + currentProject.icon + "</span>" + currentProject.title

		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.innerHTML = currentProject.description

		containerEl.appendChild(projectHeadlineEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(currentProject.renderProjectPrioritySorted())

		return containerEl
	}


}