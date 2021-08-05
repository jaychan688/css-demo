import './style.css'

const pages = ['text-input', 'hide-scrollbars']

const pagesLinks = pages
	.map(
		page =>
			`<li><a class="list__item" target="_blank" href="${page}/index.html">${page}</a></li>`
	)
	.join('')

document
	.querySelector('#root')
	.insertAdjacentHTML(
		'beforeend',
		`<ul class="list list--green">${pagesLinks}</ul>`
	)
