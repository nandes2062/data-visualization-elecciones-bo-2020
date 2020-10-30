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
    images: [],
    getDataPosts (socialData) {
      this.labels = socialData.map((v, k) => { return v.user })
      this.dataChart = socialData.map((v, k) => { return v.posts })
    },
    chartMetricsInit(chartId, socialMedia) {
      switch (socialMedia) {
        case 'facebook':
          this.label = 'Cantidad de posts en Facebook'
          this.images = [
            {
              src: `${this.resourcePath}/luis-arce.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/carlos-mesa.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/luis-f-camacho.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/chi-hyung-chung.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/feliciano-mamani.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/maria-cruz-baya.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/jorge-quiroga.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/mas-ipsp.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/comunidad-ciudadana.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/creemos.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/fpv.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/pan-bol.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/libre21.jpg`,
              width: 20,
              height: 20
            }
          ]
          this.backgroundColor = [
            '#2b6cb0', // luis-arce
            '#ed8936', // carlos-mesa
            '#F0005F', // creemos
            '#006B46', // fpv
            '#FF0000', // panbol
            '#000000', // adn
            '#009D00', // libre21
            '#2b6cb0', // luis-arce
            '#ed8936', // carlos-mesa
            '#F0005F', // creemos
            '#006B46', // fpv
            '#FF0000', // panbol
            '#009D00' // libre21
          ]
          this.borderColor = [
            '#000000', // luis-arce
            '#38a169', // carlos-mesa
            '#167E7D', // creemos
            '#F5E900', // fpv
            '#807F93', // panbol
            '#E3000E', // adn
            '#E3000E', // libre21
            '#000000', // luis-arce
            '#38a169', // carlos-mesa
            '#167E7D', // creemos
            '#F5E900', // fpv
            '#807F93', // panbol
            '#E3000E' // libre21
          ]
          this.getDataPosts(Facebook)
          break;
        case 'instagram':
          this.label = 'Cantidad de posts en Instagram'
          this.images = [
            {
              src: `${this.resourcePath}/luis-arce.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/carlos-mesa.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/luis-f-camacho.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/chi-hyung-chung.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/jorge-quiroga.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/mas-ipsp.jpg`,
              width: 20,
              height: 20
            }
          ]
          this.backgroundColor = [
            '#2b6cb0', // luis-arce
            '#ed8936', // carlos-mesa
            '#F0005F', // creemos
            '#006B46', // fpv
            '#009D00', // libre21
            '#2b6cb0', // luis-arce
          ]
          this.borderColor = [
            '#000000', // luis-arce
            '#38a169', // carlos-mesa
            '#167E7D', // creemos
            '#F5E900', // fpv
            '#E3000E', // libre21
            '#000000', // luis-arce
          ]
          this.getDataPosts(Instagram)
          break;
        case 'twitter':
          this.label = 'Cantidad de posts en Twitter'
          this.images = [
            {
              src: `${this.resourcePath}/luis-arce.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/carlos-mesa.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/luis-f-camacho.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/chi-hyung-chung.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/jorge-quiroga.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/mas-ipsp.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/comunidad-ciudadana.jpg`,
              width: 20,
              height: 20
            }
          ]
          this.backgroundColor = [
            '#2b6cb0', // luis-arce
            '#ed8936', // carlos-mesa
            '#F0005F', // creemos
            '#006B46', // fpv
            '#009D00', // libre21
            '#2b6cb0', // luis-arce
            '#ed8936', // carlos-mesa
          ]
          this.borderColor = [
            '#000000', // luis-arce
            '#38a169', // carlos-mesa
            '#167E7D', // creemos
            '#F5E900', // fpv
            '#E3000E', // libre21
            '#000000', // luis-arce
            '#38a169', // carlos-mesa
          ]
          this.getDataPosts(Twitter)
          break
        case 'youtube':
          this.label = 'Cantidad de transcripciones en Youtube'
          this.images = [
            {
              src: `${this.resourcePath}/jorge-quiroga.jpg`,
              width: 20,
              height: 20
            },
            {
              src: `${this.resourcePath}/carlos-mesa.jpg`,
              width: 20,
              height: 20
            }
          ]
          this.backgroundColor = [
            '#009D00', // libre21
            '#ed8936' // carlos-mesa
          ]
          this.borderColor = [
            '#E3000E', // libre21
            '#38a169' // carlos-mesa
          ]
          this.getDataPosts(Youtube)
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
						  label: this.label,
						  data: this.dataChart,
              fill: false,
						  backgroundColor: this.backgroundColor,
						  borderColor: this.borderColor,
						  borderWidth: 2,
						  hoverOffset: 4
            }           
          ]
        },
        options: {          
          title: {
            display: false,
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
              images: this.images
            }
					},
					layout: {
						padding: {
							top: 30
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
