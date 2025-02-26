import Controller from '../controller.js'
import Project from '../project.js'
import ProjectList from '../projectList.js'

export default class AddProjectFormRenderer {
	static renderInputForm() {
		const formWrapperEl = document.createElement("div")
		formWrapperEl.classList.add("form-wrapper")

		formWrapperEl.addEventListener("click", (e) => {
			if(e.currentTarget === e.target) {
				e.currentTarget.remove()
			}
		})

		const formEl = document.createElement("form")
		formEl.innerHTML = `
			<h1>New Project</h1>
			<div class="form-input-container">
				<label for="newProjectName">Name*</label>
				<input id="newProjectName" required>
			</div>
			<div class="form-input-container">
				<label for="newProjectIcon">Icon</label>
				<input id="newProjectIcon">
			</div>
			<div class="form-input-container">
				<label for="newProjectDescription">Description</label>
				<input id="newProjectDescription">
			</div>
			<div class="form-input-container" id="newProjectPriorityWrapper"></div>
		`

		const addNewProjectPriorityBtn = document.createElement("input")
		addNewProjectPriorityBtn.classList.add("form-flex-container")
		addNewProjectPriorityBtn.value = "Add a Priority"
		addNewProjectPriorityBtn.type = "submit"

		addNewProjectPriorityBtn.addEventListener("click", (e) => {
			e.preventDefault()

			AddProjectFormRenderer.addNewPriorityInput()
		})

		formEl.appendChild(addNewProjectPriorityBtn)

		

		const submitNewProject = document.createElement("input")
		submitNewProject.value = "Add new Project"
		submitNewProject.type = "submit"
		submitNewProject.addEventListener("click", (e) => {
			e.preventDefault()
			if (!formEl.checkValidity()) {
				formEl.reportValidity()
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
			document.querySelector("body").removeChild(formWrapperEl)
		})

		formEl.appendChild(submitNewProject)

		formWrapperEl.appendChild(formEl)
		document.querySelector("body").appendChild(formWrapperEl)
		
		AddProjectFormRenderer.addNewPriorityInput()
	}


	static addNewPriorityInput() {
		const index = document.querySelectorAll(".form-flex-container").length

		const inputWrapper = document.createElement("div")
		inputWrapper.classList.add("form-flex-container")

		const inputNameContainer = document.createElement("div")
		inputNameContainer.classList.add("form-input-container")

		const inputNameLabel = document.createElement("label")
		inputNameLabel.innerHTML = `${index}. Priority Name*`
		inputNameLabel.for = "newProjectPriorityName" + index

		const inputName = document.createElement("input")
		inputName.id = "newProjectPriorityName" + index
		inputName.classList.add("newPriorityName")
		inputName.required = true
		
		const inputColorContainer = document.createElement("div")
		inputColorContainer.classList.add("form-input-container")
		
		
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
}