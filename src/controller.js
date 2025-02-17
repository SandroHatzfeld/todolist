import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'
import AddTaskBtnRenderer from './rendering/AddTaskBtnRenderer.js'
import ProjectListRenderer from './rendering/ProjectListRenderer.js'
import ProjectPanelRenderer from './rendering/ProjectPanelRenderer.js'
import Storage from './storage.js'

export default class Controller {
	static pushNewTask(task) {
		const currentProject = ProjectList.currentProject
		currentProject.tasks = task

		ProjectPanelRenderer.project = currentProject

		this.renderToScreen()
	}

	static run() {
		// Try to load existing projects
		Storage.loadProjects();
		
		// If no projects exist, create default ones
		if (ProjectList.projects.length === 0) {
			const project1 = new Project("Testproject", "This is my first project", "😊")
			const project2 = new Project("Second Project", "This is my second project", "❤️")
			const project1Priorities = [ { name: "Asap", color: "#e26246" }, { name: "Medium", color: "#cdcd49" }, { name: "Soon", color: "#3db63d" }, { name: "None", color: "#d4d4d4" } ]
			const project2Priorities = [ { name: "Soon", color: "#3db63d" }, { name: "None", color: "#d4d4d4" } ]

			project1Priorities.forEach(priority => {
				project1.priorities = priority
			})
			project2Priorities.forEach(priority => {
				project2.priorities = priority
			})


			const task1 = new Task("First Task", "Finish this project", project1.priorities[ 0 ])
			const task2 = new Task("Second Task", "Finish this project", project1.priorities[ 1 ])
			const task3 = new Task("Useless Task", "Finish this project", project1.priorities[ 2 ])
			const task4 = new Task("fourth Task", "Finish this project", project1.priorities[ 2 ])

			const task5 = new Task("fourth Task", "Finish this project", project2.priorities[ 1 ])

			task2.state = true
			task3.dueDate = new Date(2025, 2, 21).toLocaleString()

			project1.tasks = task1
			project1.tasks = task2
			project1.tasks = task3
			project1.tasks = task4

			project2.tasks = task5

			ProjectList.projects = project1
			ProjectList.projects = project2

			Storage.saveProjects()
		}
		this.renderToScreen()
	}
	
	static renderToScreen() {
		Storage.saveProjects()
		document.querySelector('#app').innerHTML = ""
		const asideEl = document.createElement("aside")
		asideEl.appendChild(ProjectListRenderer.renderProjectsList())

		const mainEl = document.createElement("main")
		mainEl.appendChild(ProjectPanelRenderer.renderCurrentProject())

		document.querySelector('#app').appendChild(asideEl)
		document.querySelector('#app').appendChild(mainEl)

		document.querySelector('#app').appendChild(AddTaskBtnRenderer.renderStaticButton())
	}
}