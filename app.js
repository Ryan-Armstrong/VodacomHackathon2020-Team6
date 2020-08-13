App({
  user:
  {
    policies: ['heroAssistance', 'deviceInsurance', 'funeralCover', 'dialATeacher', 'lifeCover', 'legalCover'],
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
          "Michael", "Jessie"
        ]
      }
    },
    funeralCover: {
      startDate: '2020-08-14',
      coverPerMember: [
        {"Michael": '50000'}, {"Jessie": '45000'}
      ]
    },
    lifeCover: {
      startDate: '2020-08-14',
      coverPerMember: [
        {"Michael": '500000'}, {"Jessie": '450000'}
      ]
    },
    legalCover: {
      startDate: '2020-08-14',
      coverPerMember: [
        {"Michael": '300000'}, {"Jessie": '250000'}
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
