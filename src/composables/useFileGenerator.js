import { ref } from 'vue'
import dayjs from 'dayjs'


export default function useFileGenerator(){

  const generateBlobTxtFile = (texto) => {
    let link = document.createElement('a');
    link.download = `kudos-${dayjs().format('DD-MMM-YYYY')}.txt`;
    let blob = new Blob([texto], {type: 'text/plain'})
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const parse = (kudos) => {
    if( kudos.value.length == 0 ) return false
    let format = ""

    kudos.value.forEach((kudo) => {
      let to = 'a '
      let mentions = ''

      if(kudo.to.length > 1){
        to = 'a las siguientes personas: '
      }

      kudo.to.forEach((person, index)=>{
        to += `(@${person.nombre})`
        if(index < (kudo.to.length - 1 )){
          to += ', '
        }
      })

      if(kudo.mentions.length > 0){
        mentions = 'se han unido al kudo :'
        kudo.mentions.forEach((person, index) => {
          mentions += ` (@${person.nombre})`

          if(index < (kudo.mentions.length - 1)){
            mentions += `, `
          }
        })
      }

      format += `
      (@${kudo.from.nombre}) ha dado un kudo 💖 ${to} por :
      ${kudo.descripcion}
      ${mentions}
      __________________________________________________________________

      `
    })

    return format
  }

  return {
    parse,
    generateBlobTxtFile
  }
}