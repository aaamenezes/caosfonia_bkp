import Musics from '../base/Musics'

const getRandomMusic = () => {  // Gerar random para sequence

  const quantity = Musics.length // Pegar quantidade total de músicas já criadas
  const randomPosition = parseInt(Math.random() * quantity) // Aleatório entre 1 e total de sequencias

  return Musics[randomPosition]
}

export default getRandomMusic