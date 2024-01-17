/*Change language*/

var lang = {
    ar: {
        title: "عربي"
    },
    en: {
        title: "english"
    }
};

function changeLang(lang) {
    location.hash = lang;
    location.reload();
}

if (window.location.hash) {
    if (window.location.hash == "#ar") {
        document.getElementById('ar').title = lang.ar.title;
    } else {
        document.getElementById('ar').title = lang.en.title;
    }

}

/*  type animation */

var type = new Typed(".n-typing",
    {
        strings: ["Abdulrahman Alatowi"],
        typeSpeed: 150,
        BackSpeed: 50,
        loop: true
    }
);

var type = new Typed(".p-typing",
    {
        strings: ["Mobile App Developer", "Android App Developer", "IOS App Developer"],
        typeSpeed: 150,
        BackSpeed: 50,
        loop: true
    }
);

// function fun(){
//  document.getElementById('navh').style.color=  var(--skin-color);
// }
