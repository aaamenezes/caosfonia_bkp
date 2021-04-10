const musics = [
  {
    artist: 'Acústicos e Valvulados',
    name: 'Fim de tarde',
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
    name: 'Casinha',
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
    name: 'Desenho de Deus',
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
    name: 'Folha de baneneira',
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
    name: 'Lua cheia',
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
    name: 'Outra noite que se vai',
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
    name: 'Outra noite que se vai',
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
    name: 'Outra vida',
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
    name: 'Paulinha',
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
    name: 'Pescador',
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
    name: 'Reggae das Tramanda',
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
    name: 'Semente',
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
    name: 'Sentimento',
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
    name: 'Tarde de sol',
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
    name: 'Ursinho de dormir',
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
    name: 'Amor pra recomeçar',
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
    name: 'Exagerado',
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
    name: 'Segredos',
    sequence: {
      intro: [  ],
      verse1: [ 5, 1, 5, 2, 1 ],
      verse2: [ 3, 2, 3, 2, 1 ],
      prechorus: [  ],
      chorus: [ 5, 2, 1, 5, 2, 1, 3, 2, 1, 5, 6 ],
      pass: [  ],
      final: [  ]
    }
  },
  {
    artist: 'Bidê ou Balde',
    name: 'Bromélias',
    sequence: {
      intro: [ 1, 4, 2, 4 ],
      verse1: [ 1, 4, 2, 4 ],
      verse2: [ 1, 4, 2, 4 ],
      prechorus: [  ],
      chorus: [ 6, 5, 2, 6, 5, 2, 4, 6, 4 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Bidê ou Balde',
    name: 'Melissa',
    sequence: {
      intro: [  ],
      verse1: [ 1, 4, 2, 5 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 4, 2, 5 ],
      pass: [  ],
      final: [ 1, 4, 2, 5 ],
    }
  },
  {
    artist: 'Bidê ou Balde',
    name: 'Microondas',
    sequence: {
      intro: [ 1, 2, 4, 1 ],
      verse1: [ 1, 2, 4, 1 ],
      verse2: [  ],
      prechorus: [ 4, 1, 2 ],
      chorus: [ 4, 1, 2, 6, 4, 1, 2, 6, 4 ],
      pass: [  ],
      final: [ 1, 2, 4, 1 ],
    }
  },
  {
    artist: 'Cachorro Grande',
    name: 'Que loucura',
    sequence: {
      intro: [ 1, 7, 6, 3, 5 ],
      verse1: [ 1, 7, 6, 3, 5 ],
      verse2: [ 1, 7, 6, 3, 4 ],
      prechorus: [  ],
      chorus: [ 3, 4, 4, 1, 7 ],
      pass: [  ],
      final: [ 6, 4 ],
    }
  },
  {
    artist: 'Cachorro Grande',
    name: 'Sinceramente',
    sequence: {
      intro: [ 1 ],
      verse1: [ 1, 4 ],
      verse2: [ 3, 7, 4, 6 ],
      prechorus: [  ],
      chorus: [ 6, 3, 5, 1, 7, 4, 6, 3 ],
      pass: [ 6, 5, 1, 6, 5, 7, 4 ],
      final: [  ],
    }
  },
  {
    artist: 'Capital Inicial',
    name: 'Fátima',
    sequence: {
      intro: [  ],
      verse1: [ 1, 6, 7 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [  ],
      pass: [ 1, 7, 1, 3 ],
      final: [ 1, 6, 7 ],
    }
  },
  {
    artist: 'Capital Inicial',
    name: 'Natasha',
    sequence: {
      intro: [  ],
      verse1: [ 1, 4, 2, 5,  ],
      verse2: [ 6, 2 ],
      prechorus: [  ],
      chorus: [ 4, 5, 6, 4, 5, 6, 5 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Capital Inicial',
    name: 'Veraneio Vascaína',
    sequence: {
      intro: [ 7, 6, 1, 7 ],
      verse1: [ 7, 1, 6, 7 ],
      verse2: [ 3, 4, 2, 3 ],
      prechorus: [  ],
      chorus: [ 5, 6, 1, 2 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Lugar ao sol',
    sequence: {
      intro: [  ],
      verse1: [ 1, 7, 6 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 3, 7, 1, 6, 3, 7, 6 ],
      pass: [ 1, 7, 6 ],
      final: [  ],
    }
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Meu novo mundo',
    sequence: {
      intro: [  ],
      verse1: [ 1, 3, 7, 1, 4, 6, 7, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 3, 5, 7, 5, 1 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Não uso sapato',
    sequence: {
      intro: [  ],
      verse1: [ 5, 6, 1, 5, 2, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 5, 2, 1, 5, 6, 1, 5, 2, 1, 5, 6, 1 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Proibida pra mim',
    sequence: {
      intro: [ 1, 5, 6, 4 ],
      verse1: [ 1, 5, 6, 4 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 1, 5, 6, 4 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Só os loucos sabem',
    sequence: {
      intro: [  ],
      verse1: [ 1, 6, 3, 1, 3, 7 ],
      verse2: [ 1, 6, 3, 4, 3, 6 ],
      prechorus: [  ],
      chorus: [ 1, 6, 3, 1, 3, 7, 1, 6, 3, 4, 3, 6 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Cássia Eller',
    name: 'Malandragem',
    sequence: {
      intro: [ 1, 6, 7 ],
      verse1: [ 1, 7, 4, 1, 7, 6 ],
      verse2: [ 4, 3, 7, 1, 6, 1 ],
      prechorus: [  ],
      chorus: [ 1, 7, 3, 4, 1, 7, 3, 4, 6, 7, 1 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Cássia Eller',
    name: 'O segundo sol',
    sequence: {
      intro: [  ],
      verse1: [ 2, 6, 1, 5 ],
      verse2: [ 2, 2 ],
      prechorus: [  ],
      chorus: [ 1, 5, 6, 5, 4, 5, 2, 1, 5, 6, 5, 1, 5 ],
      pass: [  ],
      final: [ 1, 5 ],
    }
  },
  {
    artist: 'Cássia Eller',
    name: 'Palavras ao vento',
    sequence: {
      intro: [ 1, 2, 2, 1, 1, 2 ],
      verse1: [ 1, 2, 2, 1, 1, 2 ],
      verse2: [ 1, 1, 2, 4, 3 ],
      prechorus: [  ],
      chorus: [ 1, 2, 2, 1, 1, 2 ],
      pass: [ 4, 2, 4, 1 ],
      final: [ 4, 2, 4, 1 ],
    }
  },
  {
    artist: 'Cássia Eller',
    name: 'Por enquanto',
    sequence: {
      intro: [ 1, 2, 4 ],
      verse1: [ 1, 5, 4, 1, 4, 1, 7, 2 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 6, 6, 4, 1, 6, 6, 4, 1, 2, 2, 5 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Chimarruts',
    name: 'Do lado de cá',
    sequence: {
      intro: [ 1, 5, 6, 1 ],
      verse1: [ 1, 5, 6, 4, 1, 5, 6, 4, 2, 6, 4, 1 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 6, 4, 1, 5, 6, 4, 1, 3, 4, 1, 5 ],
      pass: [ 6, 6, 2, 3, 6, 6, 2, 5 ],
      final: [  ],
    }
  },
  {
    artist: 'Chimarruts',
    name: 'Saber voar',
    sequence: {
      intro: [ 1, 5, 6, 4, 5 ],
      verse1: [ 1, 5, 6, 4, 5 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 6, 3, 2, 4, 5, 6, 3, 2, 4, 5, 6, 3, 6, 3, 2, 4, 5 ],
      pass: [  ],
      final: [  ],
    }
  },
  {
    artist: 'Chimarruts',
    name: 'Versos simples',
    sequence: {
      intro: [ 1, 4, 5 ],
      verse1: [ 1, 4, 5 ],
      verse2: [  ],
      prechorus: [  ],
      chorus: [ 3, 2, 5, 3, 4, 5 ],
      pass: [  ],
      final: [  ],
    }
  }
]

export default musics