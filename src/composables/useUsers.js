import { ref, computed } from 'vue'

export default function useUsers(){
  const personas = ref([
    { nombre: "Daniel Rubiano", imagen: "/imagenes/JPG/Daniel.jpg", kudos: 0, color:'#ff743f' },
    { nombre: "Daniela Lozano", imagen: "/imagenes/JPG/Daniela.jpg", kudos: 10, color:'#ed3746' },
    { nombre: "Emmanuel Deossa", imagen: "/imagenes/JPG/Emma.jpg", kudos: 6, color:'#272162' },
    { nombre: "Jairo Tulande", imagen: "/imagenes/JPG/Jairo.jpg", kudos: 0, color:'#9340cc' },
    { nombre: "Jeisson Neira", imagen: "/imagenes/JPG/Jeisson.jpg", kudos: 12, color:'#82cef8' },
    { nombre: "Jesús Scarpetta", imagen: "/imagenes/JPG/Jesus.jpg", kudos: 0, color:'#fffa6a' },
    { nombre: "Juan Torres", imagen: "/imagenes/JPG/Juan.jpg", kudos: 3, color:'#1c70ea' },
    { nombre: "Juliette Hernandez", imagen: "/imagenes/JPG/Juliette.jpg", kudos: 0, color:'#fe61b8' },
    { nombre:"Kattia Morales", imagen:"/imagenes/JPG/Katt.jpg", kudos: 0, color:'#d45bce' },
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