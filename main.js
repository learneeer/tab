var start_open = function (name) {
    var i, content, links;


    content = document.getElementsByClassName("content");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(name).style.display = "block";



    links = document.getElementsByClassName("links");

    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    event.currentTarget.className += " active";
}



var start_click = function () {
    document.querySelector('.tab').classList.toggle('active');
    document.querySelector('.links1').className += " active";

    document.querySelector('.name').classList.toggle('opacity0');
    document.querySelector('.button_area').classList.toggle('opacity0');
    document.querySelector('.burger').classList.toggle('opacity0');

    document.getElementById('our_offer').style.display = "block";
}

var end_click = function () {
    document.querySelector('.tab').classList.toggle('active');
    document.getElementById('our_offer').style.display = "none";
    document.getElementById('about_us').style.display = "none";
    document.getElementById('contact').style.display = "none";

    document.querySelector('.name').classList.toggle('opacity0');
    document.querySelector('.button_area').classList.toggle('opacity0');
    document.querySelector('.burger').classList.toggle('opacity0');


    links = document.getElementsByClassName("links");

    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
}