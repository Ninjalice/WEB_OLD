const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'static/js/photoload.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let photo_data = JSON.parse(this.responseText);
        let res = document.querySelector('#Grid');
        res.innerHTML = '';

        for (let item of photo_data) {
            res.innerHTML += `
            <div id="Pcontainer"class="w3-third" ">
                <img loading= "lazy" class="photo" src="${item.source}"onclick="onClick(this)" alt="${item.description}" >
                <span class="title">${item.name}</span>
                <span class="text">${item.date}<br/>${item.Location}</span>                
            </div>
            
            `
        }
    }
}

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}  



$(function () {
    var Loacation = $("#Grid").children();
    $($("#Grid").children()).slice(0, 9).show();
    console.log("hello");
    if ($(Loacation.siblings("div:hidden")).length == 0) { // check if any hidden divs still exist
       location.reload(true);
       console.log("hello")
    }  
    
    $("#load_photos").click(function (e) { // click event for load more
        e.preventDefault();
        $(Loacation.siblings("div:hidden")).slice(0, 3).show(); // select next 10 hidden divs and show them
       
        if ($(Loacation.siblings("div:hidden")).length == 0) { // check if any hidden divs still exist
            
        }
    });
});
