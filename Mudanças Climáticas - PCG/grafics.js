var ctx = document.getElementsByClassName('myChart')

var chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abri',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Out',
      'Nov',
      'Dez'
    ]
  }
})
