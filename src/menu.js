const menu = () => {
    const content = document.querySelector("#content")

    const menu = document.createElement("div")
    menu.id = "menu";

    //dishes
    const dishes = document.createElement("div")
    dishes.id = "dishes"

    const dishesArr = [];

    for (let i = 0; i < 8; i++) {
        dishesArr[i] = document.createElement("div")
        dishesArr[i].className = "card"
        dishes.appendChild(dishesArr[i])
    }

    dishesArr[0].textContent = "Pasta Bolgonese"
    dishesArr[1].textContent = "Pasta Carbonara"
    dishesArr[2].textContent = "Pizza Marinara"
    dishesArr[3].textContent = "Pizza Margherita"
    dishesArr[4].textContent = "Schnitzel"
    dishesArr[5].textContent = "Cheeseburger"
    dishesArr[6].textContent = "Hamburger"
    dishesArr[7].textContent = "Steak"

    menu.appendChild(dishes)

    //drinks
    const drinks = document.createElement("div")
    drinks.id = "drinks"

    const drinksArr = [];

    for (let i = 0; i < 5; i++) {
        drinksArr[i] = document.createElement("div")
        drinksArr[i].className = "card"
        drinks.appendChild(drinksArr[i])
    }

    drinksArr[0].textContent = "Water"
    drinksArr[1].textContent = "Soda Water"
    drinksArr[2].textContent = "Lemonade"
    drinksArr[3].textContent = "Cola"
    drinksArr[4].textContent = "Coffee"

    menu.appendChild(drinks)

    //desserts
    const desserts = document.createElement("div")
    desserts.id = "desserts"

    const dessertsArr = [];

    for (let i = 0; i < 3; i++) {
        dessertsArr[i] = document.createElement("div")
        dessertsArr[i].className = "card"
        desserts.appendChild(dessertsArr[i])
    }

    dessertsArr[0].textContent = "Cheesecake"
    dessertsArr[1].textContent = "Brownies"
    dessertsArr[2].textContent = "Pancakes"
    
    menu.appendChild(desserts)

    content.append(menu)
}

export default menu;