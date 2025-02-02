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
		return this.#projects.map((project, index) => {
      return `<span class="project-item" data-project-index="${index}">${project.title}</span>`
    }).join("")
	}
	
	attachProjectClickListener() {
		const projectItems = document.querySelectorAll(".project-item")
		projectItems.forEach(item => {
			item.addEventListener("click", (e) => {
				console.log(e);
				
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
		const currentProject = this.#projects[this.#currentProjectIndex]
		return `
			<h1><span class="project-icon">${currentProject.icon}</span>${currentProject.title}</h1>
			<p>${currentProject.description}</p>
			${currentProject.renderProjectPrioritySorted()}
		`
	}

	
}