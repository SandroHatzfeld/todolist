import Project from './project.js'

export default class ProjectList {
	static #projects = []
	/**
	 * @param {Project} project
	 */
	static set projects(project) {
		this.#projects.push(project)
	}

	static get projects() {
		return this.#projects
	}

	static #currentProjectIndex = 0

	/**
	 * @param {number} index
	 */
	static set currentProject(index) {
		this.#currentProjectIndex = index
	}

	static get currentProject() {
		return this.#projects[ this.#currentProjectIndex ]
	}

	static removeProjectItem(index) {
		this.#projects.splice(index, 1)
	}
}