import { ref } from 'vue'

export default function useUsers(){
  const users = ref([
    {
      nombre: 'Juan',
      foto: '',
      kudos: 0,
    },
  ])

  const crearArrayDeUsuarios = () => {
    let newArray = []
    users.value.forEach(user => {
      newArray.push(user.nombre)
    })
    return newArray
  }

  const crearArrayDeKudos = () => {
    let newArray = []
    users.value.forEach(user => {
      newArray.push(user.kudos)
    })
    return newArray
  }

  return {
    users,
    crearArrayDeUsuarios,
    crearArrayDeKudos,
  }
}