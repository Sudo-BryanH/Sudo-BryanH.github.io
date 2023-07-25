function loadProjectsPage() {
    console.log(document.getElementById("projects-button").textContent);

    // TODO look at jQuery's .load() function
    clearAllTopButton();
    $("#projects-button").css("background-color", "white");
    $("#projects-button").css("color", "var(--primary-accent)");
    $("#content-panel").empty();
    $("#content-panel").load("projects.html");
}

function loadAboutPage() {
    console.log(document.getElementById("about-button").textContent);

    clearAllTopButton();
    $("#about-button").css("background-color", "white");
    $("#about-button").css("color", "var(--primary-accent)");
    $("#content-panel").empty();
    $("#content-panel").load("about.html");
}

function sdev() {
    console.log(document.getElementById("sdev").textContent);
    let html_ = "<b>Languages: </b>C/C++, Java, Python"+
    "<li>Object Oriented Programming/Design</li>"+ 
    " <li>Unit-testing using JUnit 5 and Catch2</li>"+
    "<li>Test-first development</li>" +
    "<li>Data structures and algorithms</li>" +
    "<li>Design patterns*</li>"

    $("#skills").empty();
    clearAllQButton();
    $("#sdev").css("background-color", "white");
    $("#sdev").css("color", "var(--primary-accent)");
    $(html_).appendTo("#skills");
}

function db() {
    console.log(document.getElementById("db").textContent);
    let html_ = "<b>DBMS: </b> MySQL"+
    "<li>SQL querying</li>"+ 
    "<li>Database design using ER diagrams and normalization</li>"+
    "<li>Data Warehousing</li>" + 
    "<li>Relational Algebra and Datalog</li>"


    $("#skills").empty();
    clearAllQButton();
    $("#db").css("background-color", "white");
    $("#db").css("color", "var(--primary-accent)");
    $(html_).appendTo("#skills");
}

function webdev() {
    console.log(document.getElementById("webdev").textContent);
    let html_ = "<b>Technologies: </b> HTML, CSS, JavaScript*, JQuery*, Boostrap*"+
    "<li>Changing styles using CSS and JQuery</li>" +
    "<li>Manipulating HTML using JavaScript and JQuery</li>"


    $("#skills").empty();
    clearAllQButton();
    $("#webdev").css("background-color", "white");
    $("#webdev").css("color", "var(--primary-accent)");
    $(html_).appendTo("#skills");
}

function dsci() {
    console.log(document.getElementById("dsci").textContent);
    let html_ = "<b>Libraries (Python): </b> NumPy, pandas, scikit-learn, Bokeh, Matplotlib<br>" +
    "<b>Machine-learning Algorithms: </b> regression (logistic, lasso), classification (using ROC curves)" +
    "<li>Creation and cleaning of datasets using pandas</li>" +
    "<li>Perform mathematical calculations using NumPy</li>" +
    "<li>Plotting of data using pandas, Bokeh, and Matplotlib</li>" +
    "<li>Basic understanding of machine-learnign algorithms such as various forms of regressions</li>"

    $("#skills").empty();
    clearAllQButton();
    $("#dsci").css("background-color", "white");
    $("#dsci").css("color", "var(--primary-accent)");
    $(html_).appendTo("#skills");
}

function clearAllQButton() {
    $("#dsci").css("background-color", "var(--primary-accent)");
    $("#dsci").css("color", "white");

    $("#webdev").css("background-color", "var(--primary-accent)");
    $("#webdev").css("color", "white");

    $("#db").css("background-color", "var(--primary-accent)");
    $("#db").css("color", "white");

    $("#sdev").css("background-color", "var(--primary-accent)");
    $("#sdev").css("color", "white");
}

function clearAllTopButton() {
    $("#about-button").css("background-color", "var(--primary-accent)");
    $("#about-button").css("color", "white");

    $("#projects-button").css("background-color", "var(--primary-accent)");
    $("#projects-button").css("color", "white");

}
