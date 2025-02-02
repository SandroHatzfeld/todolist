import './style.css'
import ProjectList from './projectList.js'
import Project from './project.js'
import Task from './task.js'

const projectsList = new ProjectList
const project1 = new Project("Testproject", "This is my first project", "😊")
const project2 = new Project("Testproject", "This is my second project", "❤️")
const task1 = new Task("First Task", "Finish this project", 4)

project1.addTask = task1
projectsList.addProject = project1
projectsList.addProject = project2



document.querySelector('#app').innerHTML = `
  <aside>
   <ul>
    ${projectsList.getProjects.map((project) => {
      return `<li>${project.name}</li>`
    }).join("")}
   </ul>
  </aside>
`

