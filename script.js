document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main > section");
    const links = document.querySelectorAll("nav a");

    function showSection(id) {
        sections.forEach(section => {
            if(section.id === id) {
                section.classList.remove("hidden");
                section.classList.add("visible");
            } else {
                section.classList.add("hidden");
                section.classList.remove("visible");
            }
        });

        links.forEach(link => {
            if(link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(link.getAttribute("href").substring(1));
        });
    });

    showSection("matriks");
});