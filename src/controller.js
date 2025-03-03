import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'
import AddTaskBtnRenderer from './rendering/AddTaskBtnRenderer.js'
import ProjectListRenderer from './rendering/ProjectListRenderer.js'
import ProjectPanelRenderer from './rendering/ProjectPanelRenderer.js'
import Storage from './storage.js'
import AddProjectBtnRenderer from './rendering/AddProjectBtnRenderer.js'


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
			const project1 = new Project("Main Project", "This is my main project page", "👌")
			const project2 = new Project("Private Project", "This is private", "🔒")
			const project1Priorities = [ { name: "Asap", color: "#e93636" }, { name: "Medium", color: "#cdcd49" }, { name: "Soon", color: "#30d338" }, { name: "None", color: "#bababa" } ]
			const project2Priorities = [ { name: "Soon", color: "#30d338" }, { name: "None", color: "#bababa" } ]

			project1Priorities.forEach(priority => {
				project1.priorities = priority
			})
			project2Priorities.forEach(priority => {
				project2.priorities = priority
			})


			const task1 = new Task("First Task", "Finish the Odin Project", project1.priorities[ 0 ])
			const task2 = new Task("Second Task", "Get stuff done my friends", project1.priorities[ 1 ])
			const task3 = new Task("Finish dishes", "Do the damn dishes!", project1.priorities[ 2 ])
			const task4 = new Task("Feed fishes", "Blub blub", project1.priorities[ 2 ])

			const task5 = new Task("Eat cake", "But the cake is a lie!", project2.priorities[ 1 ])

			task2.state = true
			task3.dueDate = new Date(2025, 3, 21).toLocaleString()

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
		this.updateProjectList()
		this.updateProjectPanel()		

		document.querySelector('#app').appendChild(AddTaskBtnRenderer.renderStaticButton())
		document.querySelector('#app').appendChild(AddProjectBtnRenderer.renderStaticButton())
	}

	static updateProjectList() {
		Storage.saveProjects()
		const asideEl = document.querySelector("aside")
		asideEl.innerHTML = ""
		asideEl.appendChild(ProjectListRenderer.renderProjectsList())
	}

	static updateProjectPanel() {
		Storage.saveProjects()
		const mainEl = document.querySelector("main")
		mainEl.innerHTML = ""
		mainEl.appendChild(ProjectPanelRenderer.renderCurrentProject())
	}
}