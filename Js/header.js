document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('navbar-toggle'); //mobile format menu button
	const menu = document.getElementById('navbar-dropdown'); //main menu
  
	const dropdownButton = document.getElementById('dropdownNavbarLink'); //dropdown button down arrow
	const dropdownMenu = document.getElementById('dropdownNavbar');
  
	dropdownButton.addEventListener('click', () => {
	  dropdownMenu.classList.toggle('hidden');
	});
  
	button.addEventListener('click', function () {
	  menu.classList.toggle('hidden');
	});
  
	document.addEventListener('mouseover', function(event) {
	  if (!dropdownButton.contains(event.target)&& !dropdownMenu.contains(event.target) ) {
		dropdownMenu.classList.add('hidden');
	  }
	});

	  
});