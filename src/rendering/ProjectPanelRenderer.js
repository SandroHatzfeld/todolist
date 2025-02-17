import ProjectList from '../projectList.js'
import TaskRenderer from './TaskRenderer.js'

export default class ProjectPanelRenderer {
	static #project = ProjectList.currentProject

	static renderCurrentProject() {
		this.#project = ProjectList.currentProject
		
		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.innerHTML = "<span class='project-icon'>" + this.#project.icon + "</span>" + this.#project.title

		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.innerHTML = this.#project.description

		containerEl.appendChild(projectHeadlineEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(this.renderProjectPrioritySorted())

		return containerEl
	}

	static renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		this.#project.priorities.forEach(priority => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name

			const priorityItemsEl = document.createElement("div")
			priorityItemsEl.classList.add("priority-items")

			const taskInPriorityEl = this.#project.tasks.filter((task) => {
				return task.priority.name === priority.name
			})
			taskInPriorityEl.forEach((taskData) => {
				const task = new TaskRenderer(taskData)
				
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