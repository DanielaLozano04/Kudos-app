import { ref } from 'vue'


export default function useApp(){


  const loadingScreen = ref(true)

  const loadPeopleFromStorage = () => {
    if ( localStorage.getItem("IQTHINKERS") ){
      return JSON.parse(localStorage.getItem("IQTHINKERS"))
    }
    return false
  }

  const savePeopleOnStorage = (personas) => {
    localStorage.setItem("IQTHINKERS", JSON.stringify(personas.value))
  }

  const loadKudosFromStorage = () => {

  }

  const saveKudosOnStorage = () => {

  }

  const saveOptionsOnStorage = () => {

  }

  const configurandoApp = () => {
    loadPeopleFromStorage()

    if ( localStorage.getItem("IQOptions") ){}
  }

  const loadApp = () => {
    configurandoApp()

    setTimeout(function(){
      loadingScreen.value = false
    },5000)
  }

  return {
    loadApp,
    loadingScreen,
    loadPeopleFromStorage,
    savePeopleOnStorage,
  }
}