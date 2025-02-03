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

	renderProjectsList() {
		const projectItemsListEl = document.createElement("div")
		projectItemsListEl.id = "project-list"

		this.#projects.forEach((project, index) => {
			const projectItemEl = document.createElement("span")
			projectItemEl.classList.add("project-item")
			projectItemEl.dataset.projectIndex = index
			projectItemEl.innerHTML = project.title
			projectItemsListEl.appendChild(projectItemEl)

		})

		return projectItemsListEl

		// return this.#projects.map((project, index) => {
		//   return `<span class="project-item" data-project-index="${index}">${project.title}</span>`
		// }).join("")
	}

	attachProjectClickListener() {
		const projectItems = document.querySelectorAll(".project-item")
		projectItems.forEach(item => {
			item.addEventListener("click", (e) => {
				this.setCurrentProject = parseInt(e.target.dataset.projectIndex)

				const container = document.querySelector("#container")
				container.innerHTML = this.renderCurrentProject()
			})
		})
	}

	#currentProjectIndex = 0

	/**
	 * @param {number} index
	 */
	set setCurrentProject(index) {
		this.#currentProjectIndex = index
	}

	renderCurrentProject() {
		const currentProject = this.#projects[ this.#currentProjectIndex ]

		const containerEl = document.createElement("div")
		containerEl.id = "container"

		// const projectIconEl = document.createElement("span")
		// projectIconEl.classList.add("project-icon")
		// projectIconEl.innerHTML =  currentProject.icon

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