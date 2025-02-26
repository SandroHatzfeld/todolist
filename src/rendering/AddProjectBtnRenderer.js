import addBtn from ".././assets/images/addBtn.svg"
import AddProjectFormRenderer from './AddProjectFormRenderer.js'

export default class AddProjectBtnRenderer {
	static renderStaticButton() {
		const buttonEl = document.createElement("img")
		buttonEl.classList.add("addProjectBtn")
		buttonEl.classList.add("addBtn")
		buttonEl.src = addBtn
		buttonEl.addEventListener("click", ()=> {
			AddProjectFormRenderer.renderInputForm()
		})
	
		return buttonEl
	}	
}