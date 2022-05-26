import { ref, computed } from 'vue'

export default function useUsers(){
  const personas = ref([
    { nombre: "Daniel Rubiano", cargo: 'Video/Audio Specialist', imagen: "/imagenes/JPG/Daniel.jpg", kudos: 0, color:'#ff743f' },
    { nombre: "Daniela Lozano", cargo: 'Designer', imagen: "/imagenes/JPG/Daniela.jpg", kudos: 10, color:'#ed3746' },
    { nombre: "Emmanuel Deossa", cargo: 'Lead Developer', imagen: "/imagenes/JPG/Emma.jpg", kudos: 6, color:'#272162' },
    { nombre: "Jairo Tulande", cargo: 'Business Development', imagen: "/imagenes/JPG/Jairo.jpg", kudos: 0, color:'#9340cc' },
    { nombre: "Jeisson Neira", cargo: 'The Chief', imagen: "/imagenes/JPG/Jeisson.jpg", kudos: 12, color:'#82cef8' },
    { nombre: "Jesús Scarpetta", cargo: 'Full-Stack Developer', imagen: "/imagenes/JPG/Jesus.jpg", kudos: 0, color:'#fffa6a' },
    { nombre: "Juan Torres", cargo: 'Lead Designer', imagen: "/imagenes/JPG/Juan.jpg", kudos: 3, color:'#1c70ea' },
    { nombre: "Juliette Hernandez", cargo: 'Junior Designer', imagen: "/imagenes/JPG/Juliette.jpg", kudos: 0, color:'#fe61b8' },
    { nombre:"Kattia Morales", cargo: 'Chief Hapiness Officer', imagen: "/imagenes/JPG/Katt.jpg", kudos: 0, color:'#d45bce' },
  ])

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

  return {
    personas,
    crearArrayDeUsuarios,
    crearArrayDeKudos,
    crearArrayDeColores,
    sumaDeKudosTotales
  }
}