function lanFunction() {
    var val = document.getElementById("mySelect").value;
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    if(val == 2){
        title.innerHTML = "Software Developer";
        description.innerHTML = "I love solving problems and helping people.";
    }
    else{
        title.innerHTML = "Yazılım Geliştirici";
        description.innerHTML = "Problem çözmeyi ve insanlara yardım etmeyi seviyorum.";
    }
}