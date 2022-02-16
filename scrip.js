function consulta(){
    var pokemon = $("#display_txt").val().trim().toLowerCase();
    console.log(pokemon);
    
    limpiar();
    if (pokemon == "")
    {
        $("<p>Ingrese un nombre</p>").appendTo(".resultado");
        $("#display_txt").val("")
        console.log("hola");
    }
    
    else
    {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
            method: "GET",
            xhrFields: {
                responseType: "text"
            },
            statusCode: {
                500: function(xhr){
                    alert(xhr);
                },
                200: function(data){
                    console.log(data)
                    var type = data.abilities.length; 
                    var i = 0;

                    $(".resultado").delay(100).fadeIn("slow").addClass("animate__animated animate__bounce");
                    $(".pokemon").delay(100).fadeIn("slow").addClass("animate__animated animate__bounce");
                    nombre = $("<p>Name: " + data.name + "</p>").appendTo(".resultado");
                    id= $("<p>Id: " + data.id + "</p>").appendTo(".resultado");
                    for (i; i < type; i++)
                    {
                        $("<p>Attack " + (i+1) +": " + data.abilities[i].ability.name + "</p>").appendTo(".resultado");
                        console.log(data.abilities[i].ability.name)
                    }
                    image=$("<img style= 'width:150px; heigth:150px' src='" + data.sprites.front_shiny + "'/>").appendTo(".pokemon");  
                }
            
            },
            error: function(data){
                $("<p> Pokemon no Encontado</p>").appendTo(".resultado");
            },

        });
    }
}

function limpiar()
{
    console.log("hola");
    $(".resultado").children().remove();
    $(".pokemon").children().remove();
   
}
