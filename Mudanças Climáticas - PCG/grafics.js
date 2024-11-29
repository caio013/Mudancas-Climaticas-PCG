var ctx = document.getElementById('temperatureChart').getContext('2d')

// Dados reais de temperatura média anual (NOAA) de 2010 a 2022
const years = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
]
const averageTemperatures = [
  0.62, 0.58, 0.63, 0.65, 0.74, 0.91, 0.99, 0.91, 0.85, 0.95, 1.02, 0.84, 0.89
]

// Configuração do gráfico
const data = {
  labels: years,
  datasets: [
    {
      label: 'Temperatura Média Anual (°C acima da média do século XX)',
      data: averageTemperatures,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 1)',
      tension: 0.4, // Deixa as linhas suaves
      borderWidth: 4,
      pointRadius: 4,
      pointBackgroundColor: 'rgba(75, 192, 192, 1)'
    }
  ]
}

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Temperatura Média Anual Global (2010-2022)'
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Diferença da Média do Século XX (°C)'
        },
        beginAtZero: false
      }
    }
  }
}

new Chart(ctx, config)

// GRAFICO 2

const ct = document.getElementById('ecosystemImpactChart').getContext('2d')
const ecosystemImpactChart = new Chart(ct, {
  type: 'line',
  data: {
    labels: ['2010', '2015', '2020', '2023'],
    datasets: [
      {
        label: 'Desmatamento na Amazônia (milhões de hectares)',
        data: [7.7, 6.9, 10.3, 13.2],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Áreas desertificadas na Caatinga (milhões de hectares)',
        data: [16.0, 18.5, 20.1, 23.4],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Queimadas no Cerrado (milhões de hectares)',
        data: [2.1, 3.2, 4.0, 5.8],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Impactos nos Ecossistemas Brasileiros (2010-2023)'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
