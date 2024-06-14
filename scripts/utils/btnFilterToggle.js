// bouton filtre dropdown
function btnFilter() {
    document.getElementById("myDropdown").classList.toggle("show")
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
})

// Event listener for the filter button
document.getElementById('filterBtn').addEventListener('click', btnFilter)