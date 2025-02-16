import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'
import AddTaskBtnRenderer from './rendering/AddTaskBtnRenderer.js'
import AddTaskFormRenderer from './rendering/AddTaskFormRenderer.js'
import ProjectListRenderer from './rendering/ProjectListRenderer.js'
import ProjectPanelRenderer from './rendering/ProjectPanelRenderer.js'

const projectsList = new ProjectList
const project1 = new Project("Testproject", "This is my first project", "😊")
const project2 = new Project("Second Project", "This is my second project", "❤️")
const project1Priorities = [ [ "Asap", "#e26246" ], [ "Medium", "#cdcd49" ], [ "Soon", "#3db63d" ], [ "None", "#d4d4d4" ] ]
const project2Priorities = [ [ "Soon", "#3db63d" ], [ "None", "#d4d4d4" ] ]

project1Priorities.forEach(priority => {
	project1.addPriorities(priority)
})
project2Priorities.forEach(priority => {
	project2.addPriorities(priority)
})


const task1 = new Task("First Task", "Finish this project", project1.getPriorities[ 0 ])
const task2 = new Task("Second Task", "Finish this project", project1.getPriorities[ 1 ])
const task3 = new Task("Useless Task", "Finish this project", project1.getPriorities[ 2 ])
const task4 = new Task("fourth Task", "Finish this project", project1.getPriorities[ 2 ])

const task5 = new Task("fourth Task", "Finish this project", project2.getPriorities[ 1 ])

task2.state = true
task3.dueDate = new Date(2025, 2, 21).toLocaleString()

project1.addTask = task1
project1.addTask = task2
project1.addTask = task3
project1.addTask = task4

project2.addTask = task5

projectsList.addProject = project1
projectsList.addProject = project2

const asideEl = document.createElement("aside")
ProjectListRenderer.projects = projectsList.getProjects
asideEl.appendChild(ProjectListRenderer.renderProjectsList())

const mainEl = document.createElement("main")
ProjectPanelRenderer.project = projectsList.getCurrentProject
mainEl.appendChild(ProjectPanelRenderer.renderCurrentProject())

document.querySelector('#app').appendChild(asideEl)
document.querySelector('#app').appendChild(mainEl)

AddTaskBtnRenderer.priorities = projectsList.getCurrentProject.getPriorities
document.querySelector('#app').appendChild(AddTaskBtnRenderer.renderStaticButton())




