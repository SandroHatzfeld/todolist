import addBtn from ".././assets/images/addBtn.svg"
import AddTaskFormRenderer from './AddTaskFormRenderer.js'

export default class AddTaskBtnRenderer {
	static priorities = []


	
	static renderStaticButton() {
		const buttonEl = document.createElement("img")
		buttonEl.classList.add("addTaskBtn")
		buttonEl.src = addBtn
		buttonEl.addEventListener("click", ()=> {
			AddTaskFormRenderer.priorities = this.priorities
			AddTaskFormRenderer.renderInputForm()
		})
	
		return buttonEl
	}	
}