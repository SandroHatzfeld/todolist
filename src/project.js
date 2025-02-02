import Task from "./task.js"

export default class Project {
	constructor(title, description, icon) {
		this.title = title
		this.description = description
		this.icon = icon
	}

	#tasks = []

	/**
	 * @param {Task} task
	 */
	set addTask(task) {
		this.#tasks.push(task)
	}

	get getTasks() {
		return this.#tasks
	}


	#priorites = []


	addPriorities(name, color) {
		this.#priorites.push({
			name: name,
			color: color
		})
	}

	get getPriorities() {
		return this.#priorites
	}
}