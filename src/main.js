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

const task1 = new Task("First Task", "Finish this project", project1.getPriorities[ 0 ])
const task2 = new Task("Second Task", "Finish this project", project1.getPriorities[ 1 ])
const task3 = new Task("Useless Task", "Finish this project", project1.getPriorities[ 2 ])
const task4 = new Task("fourth Task", "Finish this project", project1.getPriorities[ 2 ])

task2.setState = true
task3.dueDate = new Date(2025, 2, 21).toLocaleString()

project1.addTask = task1
project1.addTask = task2
project1.addTask = task3
project1.addTask = task4

projectsList.addProject = project1
projectsList.addProject = project2

let currentProject = projectsList.getProjects[ 0 ]




document.querySelector('#app').innerHTML = `
  <aside>
   <div id="project-list">
    ${projectsList.getProjects.map((project) => {
      return `<span class="project-item">${project.title}</span>`
    }).join("")}
   </div>
  </aside>
  <main>
    <div id="container">
      <h1><span class="project-icon">${currentProject.icon}</span>${currentProject.title}</h1>
      <p>${currentProject.description}</p>
      <div id="priority-sorting">
        ${currentProject.getPriorities.map(priority => {
          return `
            <div class="priority" style="background-color:${priority.color}"><h2>${priority.name}</h2><hr>
              <div class="priority-items">
                ${currentProject.getTasks.filter((task) => task.priority === priority).map(task => {
                  return `
                    <div class="task">
                      <div class="checkbox ${task.checked ? "checked" : ""}"></div>
                      <div>
                        <span class="task-title">${task.title}</span><br>
                        ${task.dueDate ? `<span class='due-date'>${task.dueDate}</span>` : ""}
                      </div>
                    </div>
                  `
                }).join("")}
              </div>
            </div>
          `
        }).join("")}
      </div>
    </div>
  </main>
`
