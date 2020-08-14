App({
  user:
  {
    policies: ['heroAssistance', 'deviceInsurance', 'funeralCover'],
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
      coverPerMember: [
        {"Michael": '50000'}, {"Pietie": '45000'}
      ]
    },
    lifeCover: {
      startDate: '2020-08-14',
      coverPerMember: [
        {"Michael": '500000'}, {"Pietie": '450000'}
      ]
    },
    legalCover: {
      startDate: '2020-08-14',
      coverPerMember: [
        {"Michael": '300000'}, {"Pietie": '250000'}
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
