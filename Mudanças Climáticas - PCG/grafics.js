var ctx = document.getElementById('myChart').getContext('2d')

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezzembro'
    ],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: ['blue', 'yellow', 'pink', 'red', 'green', 'gray'],
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 10,
        borderColor: 'gray'
      }
    ]
  },
  options: {}
})

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezzembro'
    ],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: ['blue', 'yellow', 'pink', 'red', 'green', 'gray'],
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 10,
        borderColor: 'gray'
      }
    ]
  },
  options: {}
})
