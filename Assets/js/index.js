document.addEventListener("DOMContentLoaded", () => {
fetchLaptopData()
	like()	
	newReviews()
	contactAlert()
})
  
// fetch laptop data function
function fetchLaptopData() {
	fetch("https://kaburu12.github.io/live-server/db.json")
		.then((response) => response.json())
		.then((laptopData) => {
			//display first laptop on screen
				let lapName = document.querySelector("#laptop")
				lapName.textContent = laptopData[0].name
				let image_url = document.querySelector("#images")
			image_url.src = laptopData[ 0 ].image_url
			lapName.style.cursor = "pointer"
		//onclick on the laptop name, it displays more details	
			lapName.addEventListener("click", (e) => {
				e.preventDefault()
				let description = document.querySelector(".descr")
				description.textContent = laptopData[ 0 ].description
				let review = document.querySelector(".cust-review")
				review.textContent = laptopData[ 0 ].reviews
				let price = document.querySelector("h5")
				price.innerText=laptopData[0].price
				let details = document.getElementById("details")
				let btn = document.createElement("button")
				btn.textContent="clear"
				details.appendChild(btn)
				btn.style.backgroundColor = "orangered"
				btn.style.color = "white"
				btn.style.cursor="pointer"
				btn.addEventListener('click', clearDetails);
			})
			//button function that clears the details
			function clearDetails(e){
				e.target.parentNode.remove()}
				
		})
		.catch(()=>{
			document.querySelector('body').innerHTML = 'Unauthorized Access'
		})
}

//like function
function like() {
	//variables
	const emptyHeart = '♡'
	const fullHeart = '♥'
//adding eventListener to like onclick
	const likes = document.querySelectorAll('#like')
	likes.forEach(like => {
		like.addEventListener('click', () => {
			if (like.innerText === fullHeart) {
				like.classList.remove('activated-heart')
				like.innerText = emptyHeart
			} else {
				like.innerText = fullHeart
				like.classList.add('activated-heart')
			}
		})
	})
}

//adding reviews function
function newReviews() {
	const reviewForm = document.getElementById('review-form')
reviewForm.addEventListener('submit',(e)=>{
	e.preventDefault()
	let newReview = document.getElementById("review").value
	let reviewUpdate = document.createElement('li')
	reviewList=document.getElementById("review-list")
	reviewUpdate.innerText = newReview
	reviewUpdate.style.cursor = "pointer"
	reviewUpdate.style.backgroundColor = "#f5f6f4f3"
	reviewUpdate.style.paddingLeft="1.2rem"
	reviewList.appendChild(reviewUpdate)
	reviewForm.reset()
	//deleting new added reviews onclick
	reviewUpdate.addEventListener('click',(e)=>{
		e.preventDefault()
		reviewUpdate.remove()
	})
})
}

//contact alert function
function contactAlert() {
	let contact=document.getElementById("contact")
	contact.addEventListener("click", () => {
		alert(`${"Hello!!! , thank you for believing in us"}\n ${"Call ☎ : +254796225100"}`)
		
	})
}
