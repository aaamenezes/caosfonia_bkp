import Sequences from '../base/Sequences'

const getRandomSequence = () => {  // Gerar random para sequence

  const total = Sequences.length // Pegar quantidade total de sequencias já criadas
  const randomPosition = parseInt(Math.random() * total) // Aleatório entre 1 e total de sequencias

  return Sequences[randomPosition]
}

export default getRandomSequence