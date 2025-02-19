
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

        console.log(response); // mostrar en consola

        console.log(canciones);

        //.map mapea, recorre o descompone las canciones
        canciones.map(function (cancion) {
            // lo que este aqui adentro se va a repetir en toda la lista
            console.log(cancion.title)

            document.getElementById("container").appendChild(

                CrearComponentCancion(cancion)

            )

            document.getElementById("liscan").appendChild (


                CrearComponentCancion(cancion)
            )

        })

    })


function CrearComponentCancion(song) {

    const div = document.createElement("div")
    div.setAttribute("class", "cancion")

    div.innerHTML = `
             
        <div> 
                        
        <img src="${song.image.url}" alt=""></div>

        <h2>${song.title}</h2>
        <p>${song.author}</p>


    `


    div.addEventListener('click', function() {

        console.log(song.title)
        document.getElementById('audio')
        .setAttribute('src', song.audio.url)

        document.getElementById('foto')
        .setAttribute('src', song.image.url)

        document.getElementById('nombrec')
        .innerHTML=song.title

        document.getElementById('autor')
        .innerHTML=song.author

    })


    return div


}



const audio= document.getElementById('audio')

document.getElementById('play-button').addEventListener('click', function() {

    if(audio.paused)  {
        audio.play()
    }
    else{
        audio.pause()
    }

})


