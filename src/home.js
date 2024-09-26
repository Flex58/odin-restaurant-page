const home = function(){
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    const newsDiv = document.createElement("div");
    const newsH2 = document.createElement("h2")
    const containerDiv = document.createElement("div")
    
    homeDiv.id = "home"
    homeDiv.textContent = "test"
    homeDiv.appendChild(newsDiv);
    contentDiv.appendChild(homeDiv);
}

export default home;