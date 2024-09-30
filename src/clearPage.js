const clearPage = () => {
    const content = document.querySelector("#content")

    content.removeChild(content.firstChild)
}

export default clearPage;