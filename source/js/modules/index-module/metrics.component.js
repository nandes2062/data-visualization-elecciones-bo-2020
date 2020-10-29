import Chart from 'chart.js'
import 'chartjs-plugin-labels'
const Facebook = require('./facebook-metrics/metrics.json')
const Instagram = require('./instagram-metrics/metrics.json')
const Twitter = require('./twitter-metrics/metrics.json')
const Youtube = require('./youtube-metrics/metrics.json')
export default window.metricsComponent = function () {
  return {
    resourcePath: 'resources/images/candidatos-y-partidos',
    labels: null,
    label: '',
    dataChart: null,
    backgroundColor: null,
    borderColor: null,
    title: 'Cantidad de post en Facebook',
    titleColor: null,
    chartMetricsInit(chartId, socialMedia) {
      switch (socialMedia) {
        case 'facebook':
          this.labels = Facebook.map((v, k) => { return v.user })
          this.dataChart = Facebook.map((v, k) => { return v.posts })
          console.log(Facebook.map((v, k) => { return v.posts }))
          break;
        case 'instagram':
          console.log(Instagram)
          break;
        case 'twitter':
          console.log(Twitter)
          break
        case 'youtube':
          console.log(Youtube)
          break
        default:
          break
      }
      new Chart(chartId, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
						  label: 'Cantidad de publicaciones en Facebook',
						  data: this.dataChart,
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
						  borderWidth: 2,
						  hoverOffset: 4
            }           
          ]
        },
        options: {          
          title: {
            display: true,
            text: this.title
            // fontColor: this.titleColor
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
          },
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
							top: 10
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
