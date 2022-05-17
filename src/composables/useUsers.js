import { ref } from 'vue'

export default function useUsers(){
  const personas = ref([
    { nombre: "Daniel Rubiano", imagen: "/imagenes/JPG/Daniel.jpg", kudos: 0 },
    { nombre: "Daniela Lozano", imagen: "/imagenes/JPG/Daniela.jpg", kudos: 0 },
    { nombre: "Emmanuel Deossa", imagen: "/imagenes/JPG/Emma.jpg", kudos: 0 },
    { nombre: "Jairo Tulande", imagen: "/imagenes/JPG/Jairo.jpg", kudos: 0 },
    { nombre: "Jeisson Neira", imagen: "/imagenes/JPG/Jeisson.jpg", kudos: 0 },
    { nombre: "Jesús Scarpetta", imagen: "/imagenes/JPG/Jesus.jpg", kudos: 0 },
    { nombre: "Juan Torres", imagen: "/imagenes/JPG/Juan.jpg", kudos: 0 },
    { nombre: "Juliette Hernandez", imagen: "/imagenes/JPG/Juliette.jpg", kudos: 0 },
    { nombre:"Kattia Morales", imagen:"/imagenes/JPG/Katt.jpg", kudos: 0 },
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

  return { 
    personas,
    crearArrayDeUsuarios,
    crearArrayDeKudos,
  }
}