$(document).ready(function() {
    var graphTemplate = '<div class="row pad-top">' +
                        '    <div class="one whole">' +
                        '        <div class="row">' +
                        '            <div class="one whole align-center">' +
                        '                <h3>{{title}}</h3>' +
                        '            </div>' +
                        '        </div>' +
                        '        <div class="row">' +
                        '            <div id="{{id}}" class="one whole">' +
                        '            </div>' +
                        '        </div>' +
                        '    </div> ' +
                        '</div>'
    graphTemplate = Handlebars.compile(graphTemplate);

    // var socket = io.connect("http://alarmpi.local:8080/");
    var socket = io.connect("http://localhost:8080/");
    socket.on("add", function (data) {
        // Setup the graphs div
        var graphRow = $("<div/>").html(graphTemplate(data)).contents();
        
        // Append it to the container
        $("div#container").append(graphRow);

        // Make the graph
        console.log(data)
        var graph = new Rickshaw.Graph( {
            element: document.querySelector("#" + data.id), 
            //width: graph.attr("width"), 
            height: 200, 
            series: [{
                color: "steelblue",
                data: [ 
                    { x: 0, y: 40 }, 
                    { x: 1, y: 49 }, 
                    { x: 2, y: 38 }, 
                    { x: 3, y: 30 }, 
                    { x: 4, y: 32 } ]
            }]
        });
            
        // Render the graph
        graph.render();
    });
});