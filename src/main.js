import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'

const projectsList = new ProjectList
const project1 = new Project("Testproject", "This is my first project", "😊")
const project2 = new Project("Testproject", "This is my second project", "❤️")
const task1 = new Task("First Task", "Finish this project", 4)
const task2 = new Task("Second Task", "Finish this project", 1)
const task3 = new Task("Useless Task", "Finish this project", 0)

project1.addTask = task1
project1.addTask = task2
project1.addTask = task3
projectsList.addProject = project1
projectsList.addProject = project2

let currentProject = projectsList.getProjects[0]




document.querySelector('#app').innerHTML = `
  <aside>
   <ul>
    ${projectsList.getProjects.map((project) => {
      return `<li>${project.name}</li>`
    }).join("")}
   </ul>
  </aside>
  <main>
    <div id="container">
      ${currentProject.getTasks.map((task) => {
        return `
          <div class="task ${task.getPriority}">
            ${task.checked ? "<div class='checkbox'></div>" : ""}
            <p class="task-title">${task.title}</p>
            ${task.dueDate ? "<p class='due-date'></p>" : ""}
          </div>
        `
      }).join("")}
    </div>
  </main>
`

