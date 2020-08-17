App({
  user:
  {
    policies: ['heroAssistance', 'deviceInsurance', 'legalCover'],
    heroAssistance: {
      startDate: '2020-08-14',
    },
    deviceInsurance: {
      startDate: '2020-08-14',
      devices: {
        models: [
          {id: 0, model: "Redmi Mi10"}, 
          {id: 1, model: "iPhone X"}
        ],
        numbers: [
          "+27832277130",
          "+27xxxxxxxxx"
        ],
        dependents: [
          "Michael", "Pietie"
        ]
      }
    },
    funeralCover: {
      startDate: '2020-08-14',
      cover: [
          "50 000",
          "45 000"
        ],
        dependents: [
          "Michael", "Pietie"
        ],
        age: [
          "26", "22"
        ]
    },
    lifeCover: {
      startDate: '2020-08-14',
      cover: [
          "500 000",
          "450 000"
        ],
        dependents: [
          "Michael", "Pietie"
        ],
        age: [
          "26", "22"
        ]
    },
    legalCover: {
      startDate: '2020-08-14',
      cover: [
          "300 000",
          "250 000"
        ],
        dependents: [
          "Michael", "Pietie"
        ],
        age: [
          "26", "22"
        ]
    },
    dialATeacher: {
      startDate: '2020-08-14',
    },
    claim:
    {
      device: '',
      date: '',
      owner: '',
      description: ''
    },
    claims: [],
    consultant:
    {
      funeralCover: false,
      lifeCover: false,
      legalCover: false,
      unavailableTimes: 
      [
        '2020-08-14','2020-08-15'
      ]
    }
  },
});
