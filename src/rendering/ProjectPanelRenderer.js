export default class ProjectPanelRenderer {
	constructor(priorities, tasks, project, currentProjectIndex) {
		priorities
		tasks
		project
		currentProjectIndex
	}

	renderCurrentProject() {
		const currentProject = this.projects[ this.currentProjectIndex ]

		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.innerHTML = "<span class='project-icon'>" + currentProject.icon + "</span>" + currentProject.title

		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.innerHTML = currentProject.description

		containerEl.appendChild(projectHeadlineEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(currentProject.renderProjectPrioritySorted())

		return containerEl
	}

	renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		this.priorities.forEach(priority => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name

			const priorityItemsEl = document.createElement("div")
			priorityItemsEl.classList.add("priority-items")

			const taskInPriorityEl = this.tasks.filter((task) => task.priority === priority)
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