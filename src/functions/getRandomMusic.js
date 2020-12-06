import Musics from '../base/Musics'

const getRandomMusic = () => {  // Gerar random para sequence

  const total = Musics.length // Pegar quantidade total de músicas já criadas
  const randomPosition = parseInt(Math.random() * total) // Aleatório entre 1 e total de sequencias

  return Musics[randomPosition]
}

export default getRandomMusic