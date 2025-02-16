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

	addPriorities(priority) {
		this.#priorites.push({
			name: priority[0],
			color: priority[1]
		})
	}

	get getPriorities() {
		return this.#priorites
	}	
}