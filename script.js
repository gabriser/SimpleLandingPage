// Abrir menu de usabilidad
function userOpen() {
    let user_menu = document.getElementById("user_menu");
    user_menu.style.display = "inline";
}

// Cerrar menu de usabilidad
function userClose() {
    let user_menu = document.getElementById("user_menu");
    user_menu.style.display = "none";
}

// Poner el tema de la página a claro
function setLight() {

    let header = document.getElementById("header");
    let main = document.getElementById("main");
    let footer = document.getElementById("footer");

    header.classList.remove("dark-bg-color", "dark-color");
    header.classList.add("light-bg-color", "light-color");

    main.classList.remove("dark-bg-color-main", "dark-color-main");
    main.classList.add("light-bg-color-main", "light-color-main");

    footer.classList.remove("dark-bg-color", "dark-color");
    footer.classList.add("light-bg-color", "light-color");

}

// Poner el tema de la página a oscuro
function setDark() {

    let header = document.getElementById("header");
    let main = document.getElementById("main");
    let footer = document.getElementById("footer");

    header.classList.remove("light-bg-color", "light-color");
    header.classList.add("dark-bg-color", "dark-color");

    main.classList.remove("light-bg-color-main", "light-color-main");
    main.classList.add("dark-bg-color-main", "dark-color-main");

    footer.classList.remove("light-bg-color", "light-color");
    footer.classList.add("dark-bg-color", "dark-color");

}

// Cambiar tamaño de la letra 5 posiciones
function changeSize() {
    let sizeInput = document.getElementById("size");
    let currentPosition = parseInt(sizeInput.value);

    let header = document.getElementById("header");
    let main = document.getElementById("main");
    let footer = document.getElementById("footer");
    let title = document.getElementById("title");
    let titlepage = document.getElementById("titlepage");
    let loremone = document.getElementById("loremone");
    let loremtwo = document.getElementById("loremtwo");
    let loremthree = document.getElementById("loremthree");
    let menuone = document.getElementById("menuone");
    let menutwo = document.getElementById("menutwo");
    let menuthree = document.getElementById("menuthree");
    let menufour = document.getElementById("menufour");

    let user_theme = document.getElementById("user_theme");
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");
    let user_size = document.getElementById("user_size");
    let sizetext = document.getElementById("sizetext");

    switch (currentPosition) {
      case 1:

        header.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        header.classList.add("font-size-1-pos-1");
        main.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        main.classList.add("font-size-1-pos-1");
        footer.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        footer.classList.add("font-size-1-pos-1");
        title.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        title.classList.add("font-size-2-pos-1");
        titlepage.classList.remove("font-size-3-pos-1", "font-size-3-pos-2", "font-size-3-pos-3", "font-size-3-pos-4", "font-size-3-pos-5");
        titlepage.classList.add("font-size-3-pos-1");
        loremone.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremone.classList.add("font-size-2-pos-1");
        loremtwo.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremtwo.classList.add("font-size-2-pos-1");
        loremthree.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremthree.classList.add("font-size-2-pos-1");
        menuone.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuone.classList.add("font-size-15-pos-1");
        menutwo.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menutwo.classList.add("font-size-15-pos-1");
        menuthree.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuthree.classList.add("font-size-15-pos-1");
        menufour.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menufour.classList.add("font-size-15-pos-1");
        user_theme.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_theme.classList.add("font-size-15-pos-1");
        light.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        light.classList.add("font-size-1-pos-1");
        dark.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        dark.classList.add("font-size-1-pos-1");
        user_size.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_size.classList.add("font-size-15-pos-1");
        sizetext.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        sizetext.classList.add("font-size-1-pos-1");

        sizetext.innerText = "1: Small size";

        break;
      case 2:

        header.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        header.classList.add("font-size-1-pos-2");
        main.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        main.classList.add("font-size-1-pos-2");
        footer.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        footer.classList.add("font-size-1-pos-2");
        title.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        title.classList.add("font-size-2-pos-2");
        titlepage.classList.remove("font-size-3-pos-1", "font-size-3-pos-2", "font-size-3-pos-3", "font-size-3-pos-4", "font-size-3-pos-5");
        titlepage.classList.add("font-size-3-pos-2");
        loremone.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremone.classList.add("font-size-2-pos-2");
        loremtwo.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremtwo.classList.add("font-size-2-pos-2");
        loremthree.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremthree.classList.add("font-size-2-pos-2");
        menuone.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuone.classList.add("font-size-15-pos-2");
        menutwo.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menutwo.classList.add("font-size-15-pos-2");
        menuthree.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuthree.classList.add("font-size-15-pos-2");
        menufour.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menufour.classList.add("font-size-15-pos-2");
        user_theme.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_theme.classList.add("font-size-15-pos-2");
        light.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        light.classList.add("font-size-1-pos-2");
        dark.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        dark.classList.add("font-size-1-pos-2");
        user_size.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_size.classList.add("font-size-15-pos-2");
        sizetext.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        sizetext.classList.add("font-size-1-pos-2");

        sizetext.innerText = "2: Normal size";

        break;
      case 3:

        header.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        header.classList.add("font-size-1-pos-3");
        main.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        main.classList.add("font-size-1-pos-3");
        footer.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        footer.classList.add("font-size-1-pos-3");
        title.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        title.classList.add("font-size-2-pos-3");
        titlepage.classList.remove("font-size-3-pos-1", "font-size-3-pos-2", "font-size-3-pos-3", "font-size-3-pos-4", "font-size-3-pos-5");
        titlepage.classList.add("font-size-3-pos-3");
        loremone.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremone.classList.add("font-size-2-pos-3");
        loremtwo.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremtwo.classList.add("font-size-2-pos-3");
        loremthree.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremthree.classList.add("font-size-2-pos-3");
        menuone.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuone.classList.add("font-size-15-pos-3");
        menutwo.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menutwo.classList.add("font-size-15-pos-3");
        menuthree.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuthree.classList.add("font-size-15-pos-3");
        menufour.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menufour.classList.add("font-size-15-pos-3");
        user_theme.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_theme.classList.add("font-size-15-pos-3");
        light.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        light.classList.add("font-size-1-pos-3");
        dark.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        dark.classList.add("font-size-1-pos-3");
        user_size.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_size.classList.add("font-size-15-pos-3");
        sizetext.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        sizetext.classList.add("font-size-1-pos-3");

        sizetext.innerText = "3: Big size";
        
        break;
      case 4:

        header.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        header.classList.add("font-size-1-pos-4");
        main.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        main.classList.add("font-size-1-pos-4");
        footer.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        footer.classList.add("font-size-1-pos-4");
        title.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        title.classList.add("font-size-2-pos-4");
        titlepage.classList.remove("font-size-3-pos-1", "font-size-3-pos-2", "font-size-3-pos-3", "font-size-3-pos-4", "font-size-3-pos-5");
        titlepage.classList.add("font-size-3-pos-4");
        loremone.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremone.classList.add("font-size-2-pos-4");
        loremtwo.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremtwo.classList.add("font-size-2-pos-4");
        loremthree.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremthree.classList.add("font-size-2-pos-4");
        menuone.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuone.classList.add("font-size-15-pos-4");
        menutwo.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menutwo.classList.add("font-size-15-pos-4");
        menuthree.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuthree.classList.add("font-size-15-pos-4");
        menufour.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menufour.classList.add("font-size-15-pos-4");
        user_theme.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_theme.classList.add("font-size-15-pos-4");
        light.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        light.classList.add("font-size-1-pos-4");
        dark.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        dark.classList.add("font-size-1-pos-4");
        user_size.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_size.classList.add("font-size-15-pos-4");
        sizetext.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        sizetext.classList.add("font-size-1-pos-4");

        sizetext.innerText = "4: Extra-large size";

        break;
      case 5:

        header.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        header.classList.add("font-size-1-pos-5");
        main.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        main.classList.add("font-size-1-pos-5");
        footer.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        footer.classList.add("font-size-1-pos-5");
        title.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        title.classList.add("font-size-2-pos-5");
        titlepage.classList.remove("font-size-3-pos-1", "font-size-3-pos-2", "font-size-3-pos-3", "font-size-3-pos-4", "font-size-3-pos-5");
        titlepage.classList.add("font-size-3-pos-5");
        loremone.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremone.classList.add("font-size-2-pos-5");
        loremtwo.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremtwo.classList.add("font-size-2-pos-5");
        loremthree.classList.remove("font-size-2-pos-1", "font-size-2-pos-2", "font-size-2-pos-3", "font-size-2-pos-4", "font-size-2-pos-5");
        loremthree.classList.add("font-size-2-pos-5");
        menuone.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuone.classList.add("font-size-15-pos-5");
        menutwo.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menutwo.classList.add("font-size-15-pos-5");
        menuthree.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menuthree.classList.add("font-size-15-pos-5");
        menufour.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        menufour.classList.add("font-size-15-pos-5");
        user_theme.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_theme.classList.add("font-size-15-pos-5");
        light.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        light.classList.add("font-size-1-pos-5");
        dark.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        dark.classList.add("font-size-1-pos-5");
        user_size.classList.remove("font-size-15-pos-1", "font-size-15-pos-2", "font-size-15-pos-3", "font-size-15-pos-4", "font-size-15-pos-5");
        user_size.classList.add("font-size-15-pos-5");
        sizetext.classList.remove("font-size-1-pos-1", "font-size-1-pos-2", "font-size-1-pos-3", "font-size-1-pos-4", "font-size-1-pos-5");
        sizetext.classList.add("font-size-1-pos-5");

        sizetext.innerText = "5: Huge size";

        break;
      default:
        break;
    }
  }