const input = document.querySelector('.input-search')
const searchBtn = document.querySelector('.button-18')
const all = document.querySelector('.all')
const topwear = document.querySelector('.top')
const bottom = document.querySelector('.bottom')
const jacket = document.querySelector('.jacket')
const watch = document.querySelector('.watch')
const cards = document.querySelectorAll('.card')

searchBtn.addEventListener('click', () => {
	Search()
})

all.addEventListener('click', () => {
	All()
})

topwear.addEventListener('click', () => {
	Top()
})

bottom.addEventListener('click', () => {
	Bottom()
})

jacket.addEventListener('click', () => {
	Jacket()
})

watch.addEventListener('click', () => {
	Watch()
})

input.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault()
		Search()
	}
})

function All() {
	cards.forEach(card => {
		card.style.display = ''
		all.classList.add('active')
		topwear.classList.remove('active')
		bottom.classList.remove('active')
		watch.classList.remove('active')
	})
}
function Top() {
	cards.forEach(card => {
		all.classList.remove('active')
		bottom.classList.remove('active')
		topwear.classList.add('active')
		watch.classList.remove('active')

		if (card.getAttribute('data-category') === 'topwear') {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
}
function Bottom() {
	cards.forEach(card => {
		all.classList.remove('active')
		topwear.classList.remove('active')
		bottom.classList.add('active')
		jacket.classList.remove('active')
		watch.classList.remove('active')

		if (card.getAttribute('data-category') === 'bottomwear') {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
}
function Jacket() {
	cards.forEach(card => {
		jacket.classList.add('active')
		all.classList.remove('active')
		topwear.classList.remove('active')
		bottom.classList.remove('active')
		watch.classList.remove('active')

		if (card.getAttribute('data-category') === 'jacket') {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
}
function Watch() {
	cards.forEach(card => {
		jacket.classList.remove('active')
		all.classList.remove('active')
		topwear.classList.remove('active')
		bottom.classList.remove('active')
		watch.classList.add('active')

		if (card.getAttribute('data-category') === 'watch') {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
}
function Search() {
	const searchValue = input.value.toLowerCase().trim()
	all.classList.remove('active')
	bottom.classList.remove('active')
	topwear.classList.remove('active')
	watch.classList.remove('active')
	jacket.classList.remove('active')

	cards.forEach(card => {
		const h2 = card.querySelector('h2')

		const TitleCard = h2.innerText.toLowerCase()

		if (TitleCard.includes(searchValue)) {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
}
