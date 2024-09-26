// Add hovered class to selected lit items
let list = document.querySelectorAll(".navigation li");
// const themeToggler = document.querySelector(".theme-toggler");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouseover", activeLink))


// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

// Change theme
// themeToggler.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme-variables');

//     themeToggler.querySelector('ion-icon:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('ion-icon:nth-child(2)').classList.toggle('active');
    
// })


    const themeToggler = document.querySelector(".theme-toggler");
    const body = document.body;

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme-variables');
        themeToggler.querySelector('ion-icon:nth-child(1)').classList.add('active');
        themeToggler.querySelector('ion-icon:nth-child(2)').classList.remove('active');
    }
    // Change theme
    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');

        themeToggler.querySelector('ion-icon:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('ion-icon:nth-child(2)').classList.toggle('active');

        // Save theme preference to localStorage
        if (body.classList.contains('dark-theme-variables')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    })

