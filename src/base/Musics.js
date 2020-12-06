const sequences = [
  {
    artist: 'Acústicos e Valvulados',
    music: 'Fim de tarde  ',
    sequence: {
      intro: [ 1, 5, 3, 5 ],
      verse1: [ 1, 5, 3, 5 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 2, 5, 1, 5, 6, 4, 1, 4, 1, 2, 5, 1, 5, 2, 5 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Casinha',
    sequence: {
      intro: [  ],
      verse1: [ 7, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 5, 6 ],
      pass: [ 7, 6,  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Desenho de Deus',
    sequence: {
      intro: [ 5, 1 ],
      verse1: [ 5, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 5, 1, 7, 6 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Folha de baneneira',
    sequence: {
      intro: [  ],
      verse1: [ 4, 1, 5, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 2, 5, 1 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Lua cheia',
    sequence: {
      intro: [ 1, 2, 4, 1 ],
      verse1: [ 1, 2, 4, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 2, 4, 4, 1 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Outra noite que se vai',
    sequence: {
      intro: [ 3, 1 ],
      verse1: [ 3, 1, 3, 1, 3, 1, 6, 6 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 3, 5, 6, 6 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Outra noite que se vai  ',
    sequence: {
      intro: [ 1, 6 ],
      verse1: [ 1, 6, 1, 6, 1, 6, 4, 4 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 3, 4, 4 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Outra vida',
    sequence: {
      intro: [  ],
      verse1: [ 1, 5, 6, 5, 6, 5, 4, 7 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 5, 6, 5, 6, 5, 4, 7 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Paulinha',
    sequence: {
      intro: [  ],
      verse1: [ 1, 2, 5, 1, 4, 1, 1, 2, 5, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 3, 6, 2, 5, 1 ],
      pass: [  ],
      final: [ 4, 1, 2, 5, 1 ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Pescador',
    sequence: {
      intro: [ 1, 5, 4 ],
      verse1: [ 1, 5, 4 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 5, 6, 4 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Reggae das Tramanda',
    sequence: {
      intro: [  ],
      verse1: [ 1, 5, 4, 5 ],
      verse2: [  ],
      prechorus: [ 4, 5, 1 ],
      chorus: [ 6, 3, 4, 4, 1 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Semente',
    sequence: {
      intro: [  ],
      verse1: [ 1, 5, 6, 4 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 5, 6, 4 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Sentimento',
    sequence: {
      intro: [  ],
      verse1: [ 1, 3, 4, 5 ],
      verse2: [ 4, 3, 4, 3, 4, 3, 2, 5, 1 ],
      prechorus: [  ],
      chorus: [ 1, 2 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Tarde de sol',
    sequence: {
      intro: [  ],
      verse1: [ 1, 2, 4, 1, 5 ],
      verse2: [  ],
      prechorus: [ 4, 1, 5 ],
      chorus: [ 4, 3, 2, 4, 1 ],
      pass: [  ],
      final: [ 2, 3, 4, 1, 5 ]
    }
  },
  {
    artist: 'Armandinho',
    music: 'Ursinho de dormir',
    sequence: {
      intro: [  ],
      verse1: [ 1, 4, 2, 5 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 4, 2, 5 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Barão Vermelho',
    music: 'Amor pra recomeçar',
    sequence: {
      intro: [ 5, 2, 1 ],
      verse1: [ 5, 6, 1, 5, 6, 1, 4 ],
      verse2: [  ],
      prechorus: [ 3, 2, 3, 6, 3, 2, 3, 6 ],
      chorus: [ 5, 6, 2, 1, 3 ],
      pass: [ 2, 1, 2, 3, 1, 2, 1, 5 ],
      final: [  ]
    }
  },
  {
    artist: 'Barão Vermelho',
    music: 'Exagerado',
    sequence: {
      intro: [ 5, 2, 1, 5, 2, 1, 3, 2, 1, 6, 7, 2 ],
      verse1: [ 5, 2, 1, 5, 2, 1, 3, 2, 1, 6, 7, 2 ],
      verse2: [ 5, 2, 1, 5, 2, 1, 3, 2, 7 ],
      prechorus: [  ],
      chorus: [ 1, 2, 5, 1, 3, 2, 1, 5, 7, 2 ],
      pass: [ 3, 7, 4, 3, 7, 4, 7 ],
      final: [  ]
    }
  },
  {
    artist: 'Barão Vermelho',
    music: 'Segredos',
    sequence: {
      intro: [  ],
      verse1: [ 5, 1, 5, 2, 1 ],
      verse2: [ 3, 2, 3, 2, 1 ],
      prechorus: [  ],
      chorus: [ 5, 2, 1, 5, 2, 1, 3, 2, 1, 5, 6 ],
      pass: [  ],
      final: [  ]
    }
  }
]

export default sequences