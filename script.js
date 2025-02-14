

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


function CrearComponentCancion(song) {

    const div = document.createElement('div')
    div.setAttribute('class', 'cancion')

    div.innerHTML = `
    
                    <img src="assets/cancion.jpg" alt="40px">

                    <div>

                        <h2>${song.title}</h2>
                         <p>${song.author}</p>

                    </div>

    `

    return div


}




document.getElementById('container').appendChild(

    CrearComponentCancion(cancion)

)