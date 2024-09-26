const home = function(){
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    const newsDiv = document.createElement("div");
    const newsH2 = document.createElement("h2")
    const containerDiv = document.createElement("div")

    const newsCardArr = []

    for (let i = 0; i < 6; i++) {
        newsCardArr[i] = document.createElement("div")
        newsCardArr[i].className = "card"
        newsCardArr[i].textContent = "Lorem"
        containerDiv.appendChild(newsCardArr[i])
    }
    
    homeDiv.id = "home"
    containerDiv.className = "container"
    newsDiv.className = "news"
    newsDiv.appendChild(newsH2);
    newsDiv.appendChild(containerDiv)
    homeDiv.appendChild(newsDiv);
    
    const reserveDiv = document.createElement("div")
    reserveDiv.className = "reserve"

    const reserveH2 = document.createElement("h2")
    reserveH2.textContent = "Reserve"

    const reserveCard = document.createElement("div")
    reserveCard.className = "card"
    reserveCard.textContent = "Contact Us"
    
    reserveDiv.appendChild(reserveH2)
    reserveDiv.appendChild(reserveCard);
    homeDiv.appendChild(reserveDiv)

    const mealDiv = document.createElement("div")
    mealDiv.className = "MotD"

    const mealH2 = document.createElement("h2")
    mealH2.textContent = "Meal of the Day"

    mealDiv.appendChild(mealH2);
    homeDiv.appendChild(mealDiv);
    
    
    contentDiv.appendChild(homeDiv)
    
}

export default home;