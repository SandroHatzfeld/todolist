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
		return `
			<div id="priority-sorting">
        ${this.#priorites.map(priority => {
          return `
            <div class="priority" style="background-color:${priority.color}"><h2>${priority.name}</h2><hr>
              <div class="priority-items">
                ${this.#tasks.filter((task) => task.priority === priority).map(task => {
                  return task.renderTaskItem()
                }).join("")}
              </div>
            </div>
          `
        }).join("")}
      </div>
		`
	}
}