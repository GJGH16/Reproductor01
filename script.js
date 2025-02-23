
/*
const cancion = {

    _id: '1',
    author: 'elvis crespo',
    title: 'Give me the power',
    duracion: '5:21',
    Audio: {

        id: '',
        url: '',
        filename: '',

    },

    image: {

        id: '',
        url: '',
        filename: '',

    }
}



*/

axios.get("https://api.institutoalfa.org/api/songs")  // pedimos la informacion al servidor con axios 



    .then(function (response) {

        const canciones = response.data.songs  // guardamos la repuesta en una constante

        const numeros = canciones.slice(5, 11) // Eligo el rango de los resultados
        console.log(numeros)

        numeros.map(function (sugerencia) {


            document.getElementById("container").appendChild(

                CrearComponentCancion(sugerencia)

            )

        })

        // console.log(response); // mostrar en consola

        //console.log(canciones);


        canciones.map(function (cancion, numero) { //.map mapea, recorre o descompone las canciones

            // lo que este aqui adentro se va a repetir en toda la lista

            console.log(cancion.title)
            console.log(numero)

            document.getElementById("liscan").appendChild(


                CrearComponentCancion2(cancion)
            )

        })

    })


function CrearComponentCancion(song) {


    const div = document.createElement("div")
    div.setAttribute("class", "suge")


    div.innerHTML = `
                            
            <div> 
                                        
            <img src="${song.image.url}" alt=""></div>

            <h2>${song.title}</h2>
            <p>${song.author}</p>


            `


    div.addEventListener('click', function () {

        console.log(song.title)
        document.getElementById('audio')
            .setAttribute('src', song.audio.url)

        document.getElementById('foto')
            .setAttribute('src', song.image.url)

        document.getElementById('nombrec')
            .innerHTML = song.title

        document.getElementById('autor')
            .innerHTML = song.author

    })


    return div

}




function CrearComponentCancion2(song) {

    const div = document.createElement("div")
    div.setAttribute("class", "lista")


    div.innerHTML = `
             
        <div> 
                        
        <img src="${song.image.url}" alt=""></div>

        <div> 

        <h2>${song.title}</h2>
        <p>${song.author}</p>

       </div>
    `


    div.addEventListener('click', function () {

        console.log(song.title)
        document.getElementById('audio')
            .setAttribute('src', song.audio.url)

        document.getElementById('foto')
            .setAttribute('src', song.image.url)

        document.getElementById('nombrec')
            .innerHTML = song.title

        document.getElementById('autor')
            .innerHTML = song.author

    })


    return div


}


const audio = document.getElementById('audio')

document.getElementById('play-button').addEventListener('click', function () {

    if (audio.paused) {
        audio.play()
    }
    else {
        audio.pause()
    }

})


