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

	renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		this.#priorites.forEach(priority => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name

			const priorityItemsEl = document.createElement("div")
			priorityItemsEl.classList.add("priority-items")

			const taskInPriorityEl = this.#tasks.filter((task) => task.priority === priority)
			taskInPriorityEl.forEach((task) => {
				const taskEl = task.renderTaskItem()
				priorityItemsEl.appendChild(taskEl)
			})
			
			priorityColumnEl.appendChild(priorityHeadlineEl)
			priorityColumnEl.appendChild(priorityItemsEl)
			prioritySortingEl.appendChild(priorityColumnEl)
		})

		return prioritySortingEl
	}
}