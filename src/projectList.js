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
}