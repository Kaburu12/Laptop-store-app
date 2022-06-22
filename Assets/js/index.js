document.addEventListener("DOMContentLoaded", () => {
	
	fetch("http://localhost:3000/laptops")
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			data.forEach(laptop => {
				console.log(laptop.name)
			});
		})
	


})
