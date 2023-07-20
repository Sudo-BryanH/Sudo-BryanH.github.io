function f() {
    console.log(document.getElementById("projects-button").textContent);

    //document.getElementById("content-panel").innerHTML += "<img class='gif' src='pictures/Volleyball Game Demo.gif' alt='gif'>";
    // TODO look at jQuery's .load() function
    $("#content-panel").load("projects.html");
}