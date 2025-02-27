import Controller from '../controller.js'
import ProjectList from '../projectList.js'
import TaskRenderer from './TaskRenderer.js'

export default class ProjectPanelRenderer {
	static #project = ProjectList.currentProject

	static renderCurrentProject() {
		this.#project = ProjectList.currentProject
		
		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const titleContainerEl = document.createElement("div")
		titleContainerEl.classList.add("title-container")

		const projectIconEl = document.createElement("span")
		projectIconEl.contentEditable = true
		projectIconEl.innerHTML = this.#project.icon
		projectIconEl.classList.add("project-icon")
		projectIconEl.addEventListener("focusout", (e) => {
			ProjectList.currentProject.icon = e.target.innerHTML
			Controller.updateProjectList()
		})
		
		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.contentEditable = true
		projectHeadlineEl.innerHTML = this.#project.title
		projectHeadlineEl.addEventListener("focusout", (e) => {		
			
			ProjectList.currentProject.title = e.target.innerHTML
			Controller.updateProjectList()
		})
		
		titleContainerEl.appendChild(projectIconEl)
		titleContainerEl.appendChild(projectHeadlineEl)
		
		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.contentEditable = true
		projectDescriptionEl.innerHTML = this.#project.description
		projectDescriptionEl.addEventListener("focusout", (e) => {
			ProjectList.currentProject.description = e.target.innerHTML
			Controller.updateProjectList()
		})

		containerEl.appendChild(titleContainerEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(this.renderProjectPrioritySorted())

		return containerEl
	}

	

	static renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		this.#project.priorities.forEach((priority,index) => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name
			priorityHeadlineEl.contentEditable = true
			priorityHeadlineEl.addEventListener("focusout", (e) => {
				const changedPriority = {name: e.target.innerHTML, color: priority.color}
				ProjectList.currentProject.updatePriority(changedPriority,index)
				Controller.renderToScreen()
			})

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