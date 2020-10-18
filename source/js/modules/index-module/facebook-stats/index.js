import Chart from 'chart.js'
import 'chartjs-plugin-labels';

export default window.facebookStatsComponent = function () {
  return {
		resourcePath: 'resources/images/candidatos-y-partidos',
    labels: ['Luis Arce', 'Carlos Mesa', 'Luis F. Camacho', 'Chi Hyung Chung', 'Feliciano Mamani', 'Maria Cruz Bayá', 'Jorge Quiroga'],
    mounted (chartId) {
      new Chart(chartId, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
						  label: 'Cantidad de publicaciones en Facebook',
						  data: [100, 99, 50, 5, 2, 3, 5],
						  backgroundColor: [
						    '#2b6cb0',
						    '#ed8936',
						    '#F0005F',
						    '#006B46',
						    '#FF0000',
								'#000000',
								'#009D00'
						  ],
						  fill: false,
						  borderColor: [
			          '#000000',
			          '#38a169',
			          '#167E7D',
			          '#F5E900',
			          '#807F93',
								'#E3000E',
								'#E3000E'
						  ],
						  borderWidth: 3,
						  hoverOffset: 4
            }
          ]
        },
        options: {
          plugins: {
            labels: {
              render: 'image',
              textMargin: 10,
              images: [
								{
                  src: `${this.resourcePath}/luis-arce.jpg`,
                  width: 40,
                  height: 40
                },
								{
                  src: `${this.resourcePath}/carlos-mesa.jpg`,
                  width: 40,
                  height: 40
								},
								{
                  src: `${this.resourcePath}/luis-camacho.jpg`,
                  width: 40,
                  height: 40
								},
								{
                  src: `${this.resourcePath}/chi-hyung-chung.jpg`,
                  width: 40,
                  height: 40
								},
								{
                  src: `${this.resourcePath}/feliciano-mamani.jpg`,
                  width: 40,
									height: 40
								},
								{
                  src: `${this.resourcePath}/maria-cruz.jpg`,
                  width: 40,
                  height: 40
								},
								{
                  src: `${this.resourcePath}/jorge-quiroga.jpg`,
                  width: 40,
                  height: 40
                }
              ]
            }
					},
					layout: {
						padding: {
							top: 100
						}
					},
          responsive: true,
          legend: {
            display: false
          }, 
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  }
}
