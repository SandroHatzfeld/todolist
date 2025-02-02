import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'

const projectsList = new ProjectList
const project1 = new Project("Testproject", "This is my first project", "😊")
const project2 = new Project("Second Project", "This is my second project", "❤️")

project1.addPriorities("Urgend", "#b74141")
project1.addPriorities("Medium", "#cdcd49")
project1.addPriorities("Soon", "#3db63d")
project1.addPriorities("None", "#d4d4d4")

project2.addPriorities("Soon", "#3db63d")
project2.addPriorities("None", "#d4d4d4")

const task1 = new Task("First Task", "Finish this project", project1.getPriorities[ 0 ])
const task2 = new Task("Second Task", "Finish this project", project1.getPriorities[ 1 ])
const task3 = new Task("Useless Task", "Finish this project", project1.getPriorities[ 2 ])
const task4 = new Task("fourth Task", "Finish this project", project1.getPriorities[ 2 ])

const task5 = new Task("fourth Task", "Finish this project", project2.getPriorities[ 1 ])

task2.setState = true
task3.dueDate = new Date(2025, 2, 21).toLocaleString()

project1.addTask = task1
project1.addTask = task2
project1.addTask = task3
project1.addTask = task4

project2.addTask = task5
projectsList.addProject = project1
projectsList.addProject = project2


document.querySelector('#app').innerHTML = `
  <aside>
    <div id="project-list">
      ${projectsList.renderProjectsList()}
      ${projectsList.attachProjectClickListener()}
    </div>
  </aside>
  <main>
    <div id="container">
      ${projectsList.renderCurrentProject()}
    </div>
  </main>
`
