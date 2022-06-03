import { ref, computed } from 'vue'

const personas = ref([
  {
    nombre: "Daniel Rubiano",
    cargo: 'Video/Audio Specialist',
    imagen: "/imagenes/JPG/Daniel.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#ff743f'
  },
  {
    nombre: "Daniela Lozano",
    cargo: 'Designer',
    imagen: "/imagenes/JPG/Daniela.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 10,
    color:'#ed3746'
  },
  {
    nombre: "Emmanuel Deossa",
    cargo: 'Lead Developer',
    imagen: "/imagenes/JPG/Emma.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 6,
    color:'#272162'
  },
  {
    nombre: "Jairo Tulande",
    cargo: 'Business Development',
    imagen: "/imagenes/JPG/Jairo.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#9340cc'
  },
  {
    nombre: "Jeisson Neira",
    cargo: 'The Chief',
    imagen: "/imagenes/JPG/Jeisson.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 12,
    color:'#82cef8'
  },
  {
    nombre: "Jesús Scarpetta",
    cargo: 'Full-Stack Developer',
    imagen: "/imagenes/JPG/Jesus.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#fffa6a'
  },
  {
    nombre: "Juan Torres",
    cargo: 'Lead Designer',
    imagen: "/imagenes/JPG/Juan.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 3,
    color:'#1c70ea'
  },
  {
    nombre: "Juliette Hernandez",
    cargo: 'Junior Designer',
    imagen: "/imagenes/JPG/Juliette.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#fe61b8'
  },
  { nombre:"Kattia Morales",
    cargo: 'Chief Hapiness Officer',
    imagen: "/imagenes/JPG/Katt.jpg",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#d45bce'
  },
])

const kudos =ref(
  [
    {
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq laudantium, totam rem aperiam, eaque ipsa quae",
      from: personas.value[0],
      to: [ personas.value[1] ],
      mentions:[
        personas.value[1],
        personas.value[2],
        personas.value[3],
        personas.value[4],
      ]
    },
    {
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq laudantium, totam rem aperiam, eaque ipsa quae",
      from: personas.value[2],
      to: [ personas.value[6] ],
      mentions:[
        personas.value[0],
        personas.value[6],
        personas.value[8],
        personas.value[5],
      ]
    },
    {
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq laudantium, totam rem aperiam, eaque ipsa quae",
      from: personas.value[2],
      to: [ personas.value[7] ],
      mentions:[
        personas.value[6],
        personas.value[2],
        personas.value[0],
        personas.value[1],
      ]
    }
  ]
)

export default function useUsers(){



  const kudosForm = ref({
    descripcion: '',
    from: { nombre: 'Select Someone', imagen: ''},
    to: [],
    mentions:[]
  })

  const crearArrayDeUsuarios = () => {
    let newArray = []
    personas.value.forEach(user => {
      newArray.push(user.nombre)
    })
    return newArray
  }

  const crearArrayDeKudos = () => {
    let newArray = []
    personas.value.forEach(user => {
      newArray.push(user.kudos)
    })
    return newArray
  }

  const crearArrayDeColores = () => {
    let newArray = []
    personas.value.forEach(user => {
      newArray.push(user.color)
    })
    return newArray
  }

  const sumaDeKudosTotales = computed(() => {
    let total = 0
    personas.value.forEach(user => {
      total += user.kudos
    })
    return total
  })

  const agregarKudos = ()=>{
    // Voy a validar que tenga datos
    if(kudosForm.value.descripcion == ''){
      alert("Debes agregar una descripcion")
      return false
    }

    if(typeof kudosForm.value.from.cargo == 'undefined'){
      alert("Debes seleccionar quien va a dar los kudos")
      return false
    }

    if(kudosForm.value.to.length == 0){
      alert("Debes seleccionar a quien van dirigidos los kudos")
      return false
    }

    // Se le resta un kudo a la persona que esta dando el kudo
    kudosForm.value.from.vidas = kudosForm.value.from.vidas - 1

    // Se mira cuantas personas hay seleccionadas y se les suma 1 kudo a su contador global
    kudosForm.value.to.forEach((person) => {
      person.kudos = person.kudos + 1
    })

    // se agrega a la lista de #KUDOS GOES TO...
    kudos.value.push({...kudosForm.value})
  }

  return {
    personas,
    crearArrayDeUsuarios,
    crearArrayDeKudos,
    crearArrayDeColores,
    sumaDeKudosTotales,
		kudos,
    kudosForm,
    agregarKudos,
  }
}