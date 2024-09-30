const about = () => {
    const content = document.querySelector("#content")

    const about = document.createElement("div")
    about.id = "about"

    //biography
    const biography = document.createElement("div")
    biography.id = "biography"

    const bioHeader = document.createElement("h2")
    bioHeader.textContent = "About Us"
    
    const bioBody = document.createElement("p")
    bioBody.textContent = "Lorem"

    biography.appendChild(bioHeader);
    biography.appendChild(bioBody);

    about.appendChild(biography);

    //employees
    const employees = document.createElement("div")
    employees.id = "employees"

    const employeesArr = []

    for (let i = 0; i < 4; i++) {
        employeesArr[i] = document.createElement("div")
        employeesArr[i].className = "card"
        employees.appendChild(employeesArr[i])
    }

    employeesArr[0].textContent = "Owen - Owner/Founder"
    employeesArr[1].textContent = "Jeff - Manager"
    employeesArr[2].textContent = "George - Chef"
    employeesArr[3].textContent = "Liam - Waiter"

    about.appendChild(employees)

    content.appendChild(about)
}

export default about;