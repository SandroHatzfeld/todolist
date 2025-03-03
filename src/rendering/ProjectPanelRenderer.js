import "../../node_modules/@melloware/coloris/dist/coloris.css"
import Coloris from "../../node_modules/@melloware/coloris"
Coloris.init()
Coloris({
	parent: '.priority-color',
	el: '.coloris',
	theme: 'polaroid',
	themeMode: 'dark',
	alpha: false,
	format: 'hex',
	swatchesOnly:true,
	swatches: [
		'#1f9a4a',
		'#30d338',
		'#cdcd49',
		'#e93636',
		'#d93e67',
		'#7925d3',
		'#023e8a',
		'#3a14c3',
		'#1d9acf',
		'#04cb85',
		'#bababa',
		'#393b3e'
	]
})
import Controller from '../controller.js'
import ProjectList from '../projectList.js'
import EmojiRenderer from './emojiRenderer.js'
import TaskRenderer from './TaskRenderer.js'

export default class ProjectPanelRenderer {
	static #project = ProjectList.currentProject

	static renderCurrentProject() {
		this.#project = ProjectList.currentProject
		
		const containerEl = document.createElement("div")
		containerEl.id = "container"

		const titleContainerEl = document.createElement("div")
		titleContainerEl.classList.add("title-container")

		const projectIconEl = new EmojiRenderer().emojiDisplay(this.#project)
		projectIconEl.classList.add("project-icon")
		
		const projectHeadlineEl = document.createElement("h1")
		projectHeadlineEl.contentEditable = true
		projectHeadlineEl.innerHTML = this.#project.title
		projectHeadlineEl.addEventListener("focusout", (e) => {		
			ProjectList.currentProject.title = e.target.innerHTML
			Controller.updateProjectList()
		})
		
		titleContainerEl.appendChild(projectIconEl)
		titleContainerEl.appendChild(projectHeadlineEl)
		
		const projectDescriptionEl = document.createElement("p")
		projectDescriptionEl.contentEditable = true
		projectDescriptionEl.innerHTML = this.#project.description
		projectDescriptionEl.addEventListener("focusout", (e) => {
			ProjectList.currentProject.description = e.target.innerHTML
			Controller.updateProjectList()
		})

		containerEl.appendChild(titleContainerEl)
		containerEl.appendChild(projectDescriptionEl)
		containerEl.appendChild(this.renderProjectPrioritySorted())

		return containerEl
	}

	

	static renderProjectPrioritySorted() {
		const prioritySortingEl = document.createElement("div")
		prioritySortingEl.id = "priority-sorting"

		
		
		this.#project.priorities.forEach((priority,index) => {
			const priorityColumnEl = document.createElement("div")
			priorityColumnEl.classList.add("priority")
			priorityColumnEl.style.backgroundColor = priority.color

			const priorityHeader = document.createElement("div")
			priorityHeader.classList.add("priority-header")

			const priorityHeadlineEl = document.createElement("h2")
			priorityHeadlineEl.innerHTML = priority.name
			priorityHeadlineEl.contentEditable = true
			priorityHeadlineEl.addEventListener("focusout", (e) => {
				const changedPriority = {name: e.target.innerHTML, color: priority.color}
				ProjectList.currentProject.updatePriority(changedPriority,index)
				Controller.renderToScreen()
			})

			const priorityColorEl = document.createElement("input")
			priorityColorEl.classList.add("priority-color")
			priorityColorEl.classList.add("coloris")

			priorityColorEl.addEventListener('change', event => {
				const changedPriority = {name: priority.name, color: event.target.value}
				ProjectList.currentProject.updatePriority(changedPriority,index)
				Controller.renderToScreen()
			})

			priorityHeader.appendChild(priorityHeadlineEl)
			priorityHeader.appendChild(priorityColorEl)

			const priorityItemsEl = document.createElement("div")
			priorityItemsEl.classList.add("priority-items")

			const taskInPriorityEl = this.#project.tasks.filter((task) => task.priority.name === priority.name)
			
			taskInPriorityEl.forEach((taskData) => {
				const task = new TaskRenderer(taskData)
				
				const taskEl = task.renderTaskItem()
				priorityItemsEl.appendChild(taskEl)
			})

			priorityColumnEl.appendChild(priorityHeader)
			priorityColumnEl.appendChild(priorityItemsEl)
			prioritySortingEl.appendChild(priorityColumnEl)
		})

		return prioritySortingEl
	}
}