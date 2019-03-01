function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



class TabLink {
    constructor(elem) {
        this.elem = elem;
        this.elemData = this.elem.dataset.tab;

        this.elemData === 0 ? this.items = document.querySelector('.tabcontain') : this.items = document.querySelectorAll(`.tabcontain[data-tab="${this.elemData}"]`)


        this.items = Array.from(this.items).map(items => new TabItem(items));


        this.elem.addEventListener('click', () => {
            this.select()
        });
    }
    select() {
        const link = document.querySelectorAll('.link')
        Array.from(link).map(tabcontain => { tabcontain.classList.toggle('active-link') });


        const tabcontain = document.querySelectorAll('.tabcontain');
        tabcontain.forEach(tabcontain => { tabcontain.style.display = "none" });

        this.items.map(tabcontain => tabcontain.select());

    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.style.display = "flex";
    }
}





let links = document.querySelectorAll('.link');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();










var acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}