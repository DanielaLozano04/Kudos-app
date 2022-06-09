import { ref, computed } from 'vue'

const personas = ref([])

const kudos = ref([])

export default function useUsers(){

  const storageOptions = {
    peopleStorageKey: "IQTHINKERS",
    optionsStorageKey: "IQOptions",
    kudosStorageKey: "kudos",
  }

  const loadingScreen = ref(true)

  const appConfig = ref({
    kudosLimite: 3
  })

  const kudosForm = ref({
    descripcion: '',
    from: { nombre: 'Select Someone', imagen: ''},
    to: [],
    mentions:[]
  })

  const newIQTHINKERSForm = ref({
    nombre: "",
    cargo: "",
    imagen: "",
    kudosLimite: 3,
    vidas: 3,
    kudos: 0,
    color:'#000000'
  })

  const sumaDeKudosTotales = computed(() => {
    let total = 0
    personas.value.forEach(user => {
      total += user.kudos
    })
    return total
  })

  const updateVidas = () => {
    console.log("se ejecuto actualizar las vidas y guardar en storage")
    personas.value.forEach(function(person){
      person.kudosLimite = parseInt(appConfig.value.kudosLimite)
      person.vidas = parseInt(appConfig.value.kudosLimite)
    })
    savePeopleOnStorage()
  }

  const resetApp = () => {
    if (!confirm("¿Desea eliminar los kudos y ajustes de la aplicación?")) return

    let storageKeys = Object.values(storageOptions)
    storageKeys.forEach(function(skeys){
      localStorage.removeItem(skeys)
    })
    sessionStorage.removeItem(storageOptions.kudosStorageKey)
    loadPeopleFromJson()
  }

  const loadPeopleFromStorageOrDefault = () => {
    if ( localStorage.getItem(storageOptions.peopleStorageKey) ){
      personas.value = JSON.parse(localStorage.getItem(storageOptions.peopleStorageKey))
      return true
    }
    loadPeopleFromJson()
  }

  const loadPeopleFromJson = () => {
    fetch('/personas_default.json')
    .then(response => response.json())
    .then(people => {
      personas.value = people
    })
  }

  const savePeopleOnStorage = () => {
    localStorage.setItem(storageOptions.peopleStorageKey, JSON.stringify(personas.value))
    return true
  }

  const loadKudosFromStorage = () => {
    if(sessionStorage.getItem(storageOptions.kudosStorageKey)) {
      kudos.value = JSON.parse(sessionStorage.getItem(storageOptions.kudosStorageKey))
    }
  }

  const saveKudosOnSessionStorage = () => {
    sessionStorage.setItem(storageOptions.kudosStorageKey, JSON.stringify(kudos.value))
  }

  const loadOptionsFromStorage = () => {
    if(localStorage.getItem(storageOptions.optionsStorageKey)){
      let carga = JSON.parse(localStorage.getItem(storageOptions.optionsStorageKey))
      console.log(carga)
      appConfig.value = carga
      return true
    }
    return false
  }

  const saveOptionsOnStorage = () => {
    localStorage.setItem(storageOptions.optionsStorageKey, JSON.stringify(appConfig.value))
    return true
  }

  const saveOptions = () => {
    if(appConfig.value.kudosLimite == personas.value[0].kudosLimite){
      return false
    }
    updateVidas()
    return saveOptionsOnStorage()
  }

  const configurandoApp = () => {
      loadPeopleFromStorageOrDefault()
      loadKudosFromStorage()



    if(sessionStorage.getItem("showLoadingScreen")){
      loadingScreen.value = false
    }
  }

  const loadApp = () => {
    loadOptionsFromStorage()
    configurandoApp()

    if(sessionStorage.getItem("showLoadingScreen")) return false
    console.log("Show loading screen is present.... updating live and show off loading screen")
    updateVidas()
    setTimeout(function(){
      loadingScreen.value = false
      sessionStorage.setItem("showLoadingScreen", false)
    },5000)
  }

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

  const limpiarFormulario = () => {
    kudosForm.value.descripcion = ''
    kudosForm.value.to = []
    kudosForm.value.mentions = []
  }

  const cleanAgregarIQTHINKERForm = () => {
    newIQTHINKERSForm.value.nombre = ""
    newIQTHINKERSForm.value.cargo = ""
    newIQTHINKERSForm.value.imagen = ""
    newIQTHINKERSForm.value.color = "#000000"
    return true
  }

  const cancelarFormulario = () => {
    if(!confirm("Deseas cancelar el registro del kudo?")) return true

    kudosForm.value.from = { nombre: 'Select Someone', imagen: ''}
    limpiarFormulario()
  }

  const agregarIQTHINKER = () => {
    if(
      newIQTHINKERSForm.value.imagen == '' ||
      newIQTHINKERSForm.value.nombre == '' ||
      newIQTHINKERSForm.value.cargo == ''
     ) {
       alert("Hay campos vacios por favor revisar.")
       return false
      }

    personas.value.push({...newIQTHINKERSForm.value})
    if(savePeopleOnStorage()){
      return cleanAgregarIQTHINKERForm()
    }
    return false
  }

  const agregarKudos = ()=>{

    if(kudosForm.value.from.vidas <= 0) {
      alert(`${kudosForm.value.from.nombre} ya no cuenta con vidas disponibles :(`)
      return false
    }

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

    // validar que el usuario que da kudos no se ingrese en from
    kudosForm.value.to = kudosForm.value.to.filter(function(person){
      if(person.nombre == kudosForm.value.from.nombre){
        return false
      }
      return true
    })

    if(kudosForm.value.to.length == 0){
      alert(`${kudosForm.value.from.nombre} no se puede dar kudos a si mismo`)
      return false
    }

    // validar que el usuario que da kudos no se ingrese en mentions
    kudosForm.value.mentions = kudosForm.value.mentions.filter(function(person2){
      if(person2.nombre == kudosForm.value.from.nombre){
        return false
      }
      return true
    })

    // Se le resta un kudo a la persona que esta dando el kudo
    kudosForm.value.from.vidas = kudosForm.value.from.vidas - 1

    // Se mira cuantas personas hay seleccionadas y se les suma 1 kudo a su contador global
    kudosForm.value.to.forEach((person) => {
      person.kudos = person.kudos + 1
    })

    // se agrega a la lista de #KUDOS GOES TO...
    kudos.value.push({...kudosForm.value})
    limpiarFormulario()

    // se guardan las personas en el local storage
    savePeopleOnStorage()
    saveKudosOnSessionStorage()
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
    cancelarFormulario,
    newIQTHINKERSForm,
    agregarIQTHINKER,
    loadingScreen,
    loadApp,
    resetApp,
    appConfig,
    saveOptions,
  }
}