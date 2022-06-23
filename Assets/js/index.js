document.addEventListener("DOMContentLoaded", () => {
fetchLaptopData()
	like()	
	newReviews()
	contactAlert()
})
  
// fetch laptop data function
function fetchLaptopData() {
	fetch("http://localhost:3000/laptops")
		.then((response) => response.json())
		.then((laptopData) => {
			//display first laptop on screen
			let lapName = document.querySelector("#laptop")
			lapName.textContent = laptopData[ 0 ].name
			let image_url = document.querySelector("#images")
			image_url.src = laptopData[ 0 ].image_url
			lapName.style.cursor = "pointer"
			
		})
}