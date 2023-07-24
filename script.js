function loadProjectsPage() {
    console.log(document.getElementById("projects-button").textContent);

    // TODO look at jQuery's .load() function

    $("#content-panel").load("projects.html");
}

function about() {
    console.log(document.getElementById("about-button").textContent);

    $("#content-panel").empty();
    $("#content-panel").load("about.html");
}

