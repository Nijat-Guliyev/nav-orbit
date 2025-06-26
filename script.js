'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const openBtn = document.getElementById('open');
	const closeBtn = document.getElementById('close');
	const boxWrapper = document.getElementById('box-wrapper');

	openBtn.addEventListener('click', () => {
		boxWrapper.classList.add('show-sidebar');
		openBtn.style.display = 'none';
		closeBtn.style.display = 'block';
	});

	closeBtn.addEventListener('click', () => {
		boxWrapper.classList.remove('show-sidebar');
		closeBtn.style.display = 'none';
		openBtn.style.display = 'block';
	});

	const yearSpan = document.getElementById('year');

	yearSpan ? (yearSpan.textContent = `${new Date().getFullYear()}`) : null;
});
