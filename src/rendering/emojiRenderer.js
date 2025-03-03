import { Picker } from 'emoji-picker-element';
import Controller from '../controller.js'
import AddProjectFormRenderer from './AddProjectFormRenderer.js'

export default class EmojiRenderer {
	emojiPicker(target) {
		const emojiPickerWrapper = document.createElement("div")
		emojiPickerWrapper.classList.add("emoji-wrapper")
		emojiPickerWrapper.classList.add("hidden")

		const emojiPicker = new Picker()

		emojiPicker.addEventListener('emoji-click', event => {
			target.icon = event.detail.unicode
			emojiPickerWrapper.classList.add("hidden")
			Controller.renderToScreen()
			AddProjectFormRenderer.renderNewProjectIcon()
		})

		emojiPickerWrapper.appendChild(emojiPicker)

		return emojiPickerWrapper
	}

	emojiDisplay(target) {
		const emojiDisplayEl = document.createElement("div")
		emojiDisplayEl.classList.add("emoji-display")
		if(target.icon === "") {
			emojiDisplayEl.innerHTML = "📒"
		} else {
			emojiDisplayEl.innerHTML = target.icon
		}

		const emojiPicker = this.emojiPicker(target)
		emojiDisplayEl.appendChild(emojiPicker)


		emojiDisplayEl.addEventListener("click", (e) => {
			if (e.currentTarget === e.target) {
				emojiPicker.classList.toggle("hidden")
			}
		})

		return emojiDisplayEl
	}
}