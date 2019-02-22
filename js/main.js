$(document).ready(function() {
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //Posts
    var post = [{
            title: "Prueba de titulo 1",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo justo non nibh laoreet euismod. Sed ultrices, quam ac lacinia finibus, nisl ipsum lobortis elit, vel ultrices odio eros quis arcu. Suspendisse non semper magna. Cras dapibus, sapien vel ornare gravida, dui magna cursus ex, eu tincidunt eros turpis in erat. Sed ac tortor a ante sollicitudin accumsan eu eget ligula. Suspendisse in ipsum imperdiet, rutrum sapien at, laoreet sem. Vivamus et nunc metus."
        },
        {
            title: "Prueba de titulo 2",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo justo non nibh laoreet euismod. Sed ultrices, quam ac lacinia finibus, nisl ipsum lobortis elit, vel ultrices odio eros quis arcu. Suspendisse non semper magna. Cras dapibus, sapien vel ornare gravida, dui magna cursus ex, eu tincidunt eros turpis in erat. Sed ac tortor a ante sollicitudin accumsan eu eget ligula. Suspendisse in ipsum imperdiet, rutrum sapien at, laoreet sem. Vivamus et nunc metus."
        },
        {
            title: "Prueba de titulo 3",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo justo non nibh laoreet euismod. Sed ultrices, quam ac lacinia finibus, nisl ipsum lobortis elit, vel ultrices odio eros quis arcu. Suspendisse non semper magna. Cras dapibus, sapien vel ornare gravida, dui magna cursus ex, eu tincidunt eros turpis in erat. Sed ac tortor a ante sollicitudin accumsan eu eget ligula. Suspendisse in ipsum imperdiet, rutrum sapien at, laoreet sem. Vivamus et nunc metus."
        },
        {
            title: "Prueba de titulo 4",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo justo non nibh laoreet euismod. Sed ultrices, quam ac lacinia finibus, nisl ipsum lobortis elit, vel ultrices odio eros quis arcu. Suspendisse non semper magna. Cras dapibus, sapien vel ornare gravida, dui magna cursus ex, eu tincidunt eros turpis in erat. Sed ac tortor a ante sollicitudin accumsan eu eget ligula. Suspendisse in ipsum imperdiet, rutrum sapien at, laoreet sem. Vivamus et nunc metus."
        },
        {
            title: "Prueba de titulo 5",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo justo non nibh laoreet euismod. Sed ultrices, quam ac lacinia finibus, nisl ipsum lobortis elit, vel ultrices odio eros quis arcu. Suspendisse non semper magna. Cras dapibus, sapien vel ornare gravida, dui magna cursus ex, eu tincidunt eros turpis in erat. Sed ac tortor a ante sollicitudin accumsan eu eget ligula. Suspendisse in ipsum imperdiet, rutrum sapien at, laoreet sem. Vivamus et nunc metus."
        },
    ];

    post.forEach(e => {
        var plantilla = `
            <article class="post">
            <h2>${e.title}</h2>
            <span class="date">${e.date}</span>
            <p>${e.content}</p>
            <a href="" class="button-more">Leer más</a>
            </article>
        `;

        $("#posts").prepend(plantilla);
    });

    //Selector de temas
    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function() {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css");
    });

    //Scroll hacia arriba
    $(".subir").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Formulario
    $("#login form").submit(function() {
        var name = $("#form_name").val();
        localStorage.setItem("form_name", name);
    });

    var form_name = localStorage.getItem("form_name");
    var about_parrafo = $(".about p")
    if (form_name != null && form_name != undefined) {
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> " + "<a href='#' id='logout'>Cerrar Sesión</a>");
        $("#login").hide();

        $("#logout").click(function() {
            localStorage.removeItem("form_name");
            location.reload();
        });
    }
});