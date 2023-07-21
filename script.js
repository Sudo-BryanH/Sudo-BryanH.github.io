function loadProjectsPage() {
    console.log(document.getElementById("projects-button").textContent);

    // TODO look at jQuery's .load() function

    $("#content-panel").load("projects.html");
}