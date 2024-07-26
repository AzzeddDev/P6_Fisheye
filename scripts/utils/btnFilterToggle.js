export function btnFilterToggle() {
    //
    function btnFilter() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    // eventListener sur le bouton filtre
    document.getElementById('filterBtn').addEventListener('click', btnFilter);

    // mettre à jour le texte du bouton et les options de liste deroulante lorsqu'une option est cliquee
    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', function(event) {
            const selectedText = event.target.textContent;
            const filterBtn = document.getElementById('filterBtn');
            filterBtn.textContent = selectedText;
            document.getElementById("myDropdown").classList.remove("show");

            // Move the selected option to the top
            const dropdownContent = document.getElementById("myDropdown");
            const currentActive = dropdownContent.querySelector('.active-filter');
            if (currentActive) {
                currentActive.classList.remove('active-filter');
                currentActive.style.display = 'block';
            }
            event.target.classList.add('active-filter');
            event.target.style.display = 'none';
        });
    });

    // initialisez la liste deroulante en masquant la premiere option (Popularité)
    const firstOption = document.querySelector('.dropdown-content a');
    firstOption.classList.add('active-filter');
    firstOption.style.display = 'none';
}
