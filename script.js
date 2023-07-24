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

function sdev() {
    console.log(document.getElementById("sdev").textContent);
    let html_ = "<b>Languages: </b>C/C++, Java, Python"+
    "<li>Object Oriented Programming/Design</li>"+ 
    " <li>Unit-testing</li>"+
    "<li>Test-first development</li>" +
    "<li>Data structures and algorithms</li>" +
    "<li>Design patterns*</li>"

    $("#skills").empty();
    //$("#sdev").prop("focus");
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
    //$("#sdev").prop("focus");
    $(html_).appendTo("#skills");
}

function webdev() {
    console.log(document.getElementById("webdev").textContent);
    let html_ = "<b>Technologies: </b> HTML, CSS, JavaScript*, JQuery*, Boostrap*"+
    "<li>Changing styles using CSS and JQuery</li>" +
    "<li>Manipulating HTML using JavaScript and JQuery</li>"


    $("#skills").empty();
    //$("#sdev").prop("focus");
    $(html_).appendTo("#skills");
}

function dsci() {
    console.log(document.getElementById("dsci").textContent);
    let html_ = "<b>Libraries (Python): </b> NumPy, pandas, scikit-learn, Bokeh, Matplotlib"+
    "<li>Creation and cleaning of datasets using pandas</li>" +
    "<li>Perform mathematical calculations using NumPy</li>" +
    "<li>Plotting of data using pandas, Bokeh, and Matplotlib</li>" +
    "<li>Basic understanding of machine-learnign algorithms such as various forms of regressions</li>"



    $("#skills").empty();
    //$("#sdev").prop("focus");
    $(html_).appendTo("#skills");
}

