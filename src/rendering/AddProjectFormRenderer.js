import Controller from '../controller.js'
import Project from '../project.js'
import ProjectList from '../projectList.js'
import EmojiRenderer from './emojiRenderer.js'

export default class AddProjectFormRenderer {
	static tempProject = {
		icon: ""
	}

	static renderInputForm() {
		const popupWrapperEl = document.createElement("div")
		popupWrapperEl.classList.add("popup-wrapper")

		popupWrapperEl.addEventListener("click", (e) => {
			if(e.currentTarget === e.target) {
				e.currentTarget.remove()
			}
		})

		const popupFormEl = document.createElement("form")
		popupFormEl.innerHTML = `
			<h1>New Project</h1>
			<div class="popup-flex-container">
				<div class="popup-input-container" >
					<label >Icon</label>
					<div id="newProjectIconContainer"></div>
				</div>
				<div class="popup-input-container">
					<label for="newProjectName">Name*</label>
					<input id="newProjectName" required>
				</div>
			
			</div>
			<div class="popup-input-container">
				<label for="newProjectDescription">Description</label>
				<input id="newProjectDescription">
			</div>
			<div class="popup-input-container" id="newProjectPriorityWrapper"></div>
		`
	
		const addNewProjectPriorityBtn = document.createElement("input")
		addNewProjectPriorityBtn.classList.add("popup-flex-container")
		addNewProjectPriorityBtn.value = "Add a Priority"
		addNewProjectPriorityBtn.type = "submit"

		addNewProjectPriorityBtn.addEventListener("click", (e) => {
			e.preventDefault()

			AddProjectFormRenderer.addNewPriorityInput()
		})

		popupFormEl.appendChild(addNewProjectPriorityBtn)

		const submitNewProject = document.createElement("input")
		submitNewProject.value = "Add new Project"
		submitNewProject.type = "submit"
		submitNewProject.addEventListener("click", (e) => {
			e.preventDefault()
			if (!popupFormEl.checkValidity()) {
				popupFormEl.reportValidity()
				return
			}
			const newProjectName = document.querySelector("#newProjectName").value
			const newProjectIcon = document.querySelector("#newProjectIcon").value || ""
			const newProjectDescription = document.querySelector("#newProjectDescription").value || ""

			const newProject = new Project(newProjectName, newProjectDescription, newProjectIcon)

			const newProjectPriorityName = document.querySelectorAll(".newPriorityName")
			const newProjectPriorityColor = document.querySelectorAll(".newPriorityColor")


			newProjectPriorityName.forEach((priorityName, index) => {
				const priority = { name: priorityName.value, color: newProjectPriorityColor[ index ].value }

				newProject.priorities = priority
			})

			ProjectList.projects = newProject

			Controller.renderToScreen()
			document.querySelector("body").removeChild(popupWrapperEl)
		})

		popupFormEl.appendChild(submitNewProject)
		popupWrapperEl.appendChild(popupFormEl)
		document.querySelector("body").appendChild(popupWrapperEl)
		
		AddProjectFormRenderer.renderNewProjectIcon()

		AddProjectFormRenderer.addNewPriorityInput()
	}


	static addNewPriorityInput() {
		const index = document.querySelectorAll(".popup-priority-container").length + 1

		const inputWrapper = document.createElement("div")
		inputWrapper.classList.add("popup-flex-container")
		inputWrapper.classList.add("popup-priority-container")

		const inputNameContainer = document.createElement("div")
		inputNameContainer.classList.add("popup-input-container")

		const inputNameLabel = document.createElement("label")
		inputNameLabel.innerHTML = `${index}. Priority Name*`
		inputNameLabel.for = "newProjectPriorityName" + index

		const inputName = document.createElement("input")
		inputName.id = "newProjectPriorityName" + index
		inputName.classList.add("newPriorityName")
		inputName.required = true
		
		const inputColorContainer = document.createElement("div")
		inputColorContainer.classList.add("popup-input-container")
		
		
		const inputColorLabel = document.createElement("label")
		inputColorLabel.innerHTML = "Color*"
		inputColorLabel.for = "newProjectPriorityColor" + index
		
		const inputColor = document.createElement("input")
		inputColor.type = "color"
		inputColor.value = "#ffffff"
		inputColor.id = "newProjectPriorityColor" + index
		inputColor.classList.add("newPriorityColor")
		inputColor.required = true

		inputNameContainer.appendChild(inputNameLabel)
		inputNameContainer.appendChild(inputName)
		inputColorContainer.appendChild(inputColorLabel)
		inputColorContainer.appendChild(inputColor)

		inputWrapper.appendChild(inputNameContainer)
		inputWrapper.appendChild(inputColorContainer)

		document.querySelector("#newProjectPriorityWrapper").appendChild(inputWrapper)
	}

	static renderNewProjectIcon() {
		const addNewProjectIconBtn = new EmojiRenderer().emojiDisplay(this.tempProject)
		addNewProjectIconBtn.id = "newProjectIcon"
		
		const addNewProjectIconContainer = document.querySelector("#newProjectIconContainer")
		addNewProjectIconContainer.innerHTML = ""
		addNewProjectIconContainer.appendChild(addNewProjectIconBtn)
	}
}