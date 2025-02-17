import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'

export default class Storage {
	static saveProjects() {
		const projectlist = ProjectList.projects

		projectlist.forEach((project, projectIndex) => {
			localStorage.setItem(`project-${projectIndex}-title`, JSON.stringify(project.title))
			localStorage.setItem(`project-${projectIndex}-description`, JSON.stringify(project.description))
			localStorage.setItem(`project-${projectIndex}-icon`, JSON.stringify(project.icon))

			project.priorities.forEach((priority, index) => {
				localStorage.setItem(`priorities-${projectIndex}-${index}-name`, JSON.stringify(priority.name))
				localStorage.setItem(`priorities-${projectIndex}-${index}-color`, JSON.stringify(priority.color))
			})

			project.tasks.forEach((task, index) => {
				localStorage.setItem(`tasks-${projectIndex}-${index}-title`, JSON.stringify(task.title))
				localStorage.setItem(`tasks-${projectIndex}-${index}-priorityName`, JSON.stringify(task.priority.name))

				// check if not required elements are set to avoid saving undefined
				if (task.description) {
					localStorage.setItem(`tasks-${projectIndex}-${index}-description`, JSON.stringify(task.description))
				}
				if (task.state) {
					localStorage.setItem(`tasks-${projectIndex}-${index}-state`, JSON.stringify(task.state))
				}
				if (task.dueDate) {
					localStorage.setItem(`tasks-${projectIndex}-${index}-dueDate`, JSON.stringify(task.dueDate))
				}
			})
		})
	}

	static loadProjects() {
		let projectIndex = 0

		while (localStorage.getItem(`project-${projectIndex}-title`)) {
			// Create new project
			const project = new Project(
				JSON.parse(localStorage.getItem(`project-${projectIndex}-title`)),
				JSON.parse(localStorage.getItem(`project-${projectIndex}-description`)),
				JSON.parse(localStorage.getItem(`project-${projectIndex}-icon`))
			)

			// Load priorities
			let priorityIndex = 0
			while (localStorage.getItem(`priorities-${projectIndex}-${priorityIndex}-name`)) {
				const priority = {
					name: JSON.parse(localStorage.getItem(`priorities-${projectIndex}-${priorityIndex}-name`)),
					color: JSON.parse(localStorage.getItem(`priorities-${projectIndex}-${priorityIndex}-color`))
				}
				project.priorities = priority
				priorityIndex++
			}

			// Load tasks
			let taskIndex = 0
			while (localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-title`)) {
				const priorityName = JSON.parse(localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-priorityName`))
				const priority = project.priorities.find(p => p.name === priorityName)

				const task = new Task(
					JSON.parse(localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-title`)),
					JSON.parse(localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-description`)),
					priority
				)
				
				task.state = JSON.parse(localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-state`))
				task.dueDate = JSON.parse(localStorage.getItem(`tasks-${projectIndex}-${taskIndex}-dueDate`))

				project.tasks = task
				taskIndex++
			}

			ProjectList.projects = project
			projectIndex++
		}
	}
}