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
}