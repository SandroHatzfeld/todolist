import addBtn from ".././assets/images/addBtn.svg"
import AddTaskForm from './AddTaskFormRenderer.js'

export default class AddTaskBtnRenderer {
	 
	renderStaticButton() {
		const buttonEl = document.createElement("img")
		buttonEl.classList.add("addTaskBtn")
		buttonEl.src = addBtn
		buttonEl.addEventListener("click", ()=> {
			this.renderInputForm()
		})
	
		return buttonEl
	}	
}