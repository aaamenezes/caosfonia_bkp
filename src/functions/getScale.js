import Scales from '../base/Scales'

  const getScale = chord => {  // Receber chord e converter na escala
    let scale // Criação da escala para a música
    Object.entries(Scales).forEach( ([key, value]) => { // For nas entradas do objeto
      if (chord == key) {
        scale = value // Quando o chord escolhido for igual à key, scale recebe o value
      }
    })
    return scale
  }

  export default getScale