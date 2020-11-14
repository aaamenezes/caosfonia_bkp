const getRandomChord = () => {  // Gerar chord aleatório (nem sempre)
  const keys = [] // Criar array de chaves do objeto
  for (let chord in Scales) {
    keys.push(chord) // Alimentar essa array
  }
  const randomPosition = parseInt(Math.random() * (25 - 1) + 1) // Aleatório entre 1 e 24
  return keys[randomPosition] // Definir chord aleatório
}

export default getRandomChord