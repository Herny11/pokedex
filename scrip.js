function consulta(){
    var pokemon = $("#display_txt").val();
    console.log(pokemon);
    limpiar();
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
                nombre = $("<p>Nombre: " + data.name + "</p>").appendTo(".resultado");
                id= $("<p>Id: " + data.id + "</p>").appendTo(".resultado");
                $("<p>Attack: " + data.abilities[0].ability.name + "</p>").appendTo(".resultado");
                image=$("<img style= 'width:180px; heigth:180px' src='" + data.sprites.front_shiny + "'/>").appendTo(".resultado");  
            }
        
        },
        error: function(data){
            $("<p> Pokemon no Encontado</p>").appendTo(".resultado");
        }

    });
}

function limpiar()
{
    console.log("hola");
    $(".resultado").children().remove();
}