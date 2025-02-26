import addBtn from ".././assets/images/addBtn.svg"
import ProjectList from '../projectList.js'
import AddTaskFormRenderer from './AddTaskFormRenderer.js'

export default class AddTaskBtnRenderer {
	static #priorities = []


	
	static renderStaticButton() {
		this.#priorities = ProjectList.currentProject.priorities
		const buttonEl = document.createElement("img")
		buttonEl.classList.add("addTaskBtn")
		buttonEl.classList.add("addBtn")
		buttonEl.src = addBtn
		buttonEl.addEventListener("click", ()=> {
			AddTaskFormRenderer.priorities = this.#priorities
			AddTaskFormRenderer.renderInputForm()
		})
	
		return buttonEl
	}	
}