import TaskRenderer from './TaskRenderer.js';

export default class ProjectPanelRenderer {
	
	static project
	static currentProjectIndex = 0
	

	static renderCurrentProject() {
	
		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.innerHTML = "<span class='project-icon'>" + this.project.icon + "</span>" + this.project.title

		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.innerHTML = this.project.description

		containerEl.appendChild(projectHeadlineEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(this.renderProjectPrioritySorted())

		return containerEl
	}

	static renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		this.project.getPriorities.forEach(priority => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name

			const priorityItemsEl = document.createElement("div")
			priorityItemsEl.classList.add("priority-items")
						
			const taskInPriorityEl = this.project.getTasks.filter((task) => task.priority === priority)
			taskInPriorityEl.forEach((taskData) => {
				const task = new TaskRenderer(taskData)
				console.log(taskData);
				
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