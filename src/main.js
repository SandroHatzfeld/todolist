import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'

const projectsList = new ProjectList
const project1 = new Project("Testproject", "This is my first project", "😊")
const project2 = new Project("Second Project", "This is my second project", "❤️")

project1.addPriorities("Urgend", "red")
project1.addPriorities("Medium", "yellow")
project1.addPriorities("Soon", "green")
project1.addPriorities("None", "gray")

const task1 = new Task("First Task", "Finish this project", project1.getPriorities[ 0 ])
const task2 = new Task("Second Task", "Finish this project", project1.getPriorities[ 1 ])
const task3 = new Task("Useless Task", "Finish this project", project1.getPriorities[ 2 ])
const task4 = new Task("fourth Task", "Finish this project", project1.getPriorities[ 2 ])

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
            <div class="priority" data-color="${priority.color}"><h2>${priority.name}</h2>
              <div class="priority-items">
                ${currentProject.getTasks.filter((task) => task.priority === priority).map(task => {
                  return `
                    <div class="task ${task.getPriority}">
                      ${task.checked ? "<div class='checkbox'></div>" : ""}
                      <p class="task-title">${task.title}</p>
                      ${task.dueDate ? "<p class='due-date'></p>" : ""}
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
