import Chart from 'chart.js'
import 'chartjs-plugin-labels';
import CarlosMesaTwitter from './twitter-polarity/@carlosdmesag.json'

export default window.SocialPolarityComponent = function () {
  return {
    labels: CarlosMesaTwitter.map((v, k)=> {
      const date = v.created_at.split(' ')
      return date[0]
    }).reverse(),
    dataChart: null,
    backgroundColor: null,
    borderColor: null,
    title: null,
    titleColor: null,
    chartInit (chartId, candidateOrMatch, socialMedia) {
      switch (socialMedia) {
        case 'facebook':
          this.backgroundColor = 'rgba(81, 134, 228, 0.5)'
          this.borderColor = 'rgba(81, 134, 228, .5)'
          this.title = 'Análisis de sentimientos en Facebook'
          // this.titleColor = 'rgba(81, 134, 228, 1)'
          break;
        case 'twitter':
          this.backgroundColor = 'rgba(81, 134, 228, 0.5)'
          this.borderColor = 'rgba(81, 134, 228, .5)'
          this.title = 'Análisis de sentimientos en Twitter'
          break;
        case 'instagram':
          this.backgroundColor = 'rgba(169, 102, 255, 0.5)'
          this.borderColor = 'rgba(228, 109, 216, 0.5)'
          this.title = 'Análisis de sentimientos en Instagram'
          // this.titleColor = 'rgba(169, 102, 255, 1)'
          break;
        case 'youtube':
          this.backgroundColor = 'rgba(215, 0, 28, 0.5)'
          this.borderColor = 'rgba(215, 0, 28, 0.5)'
          this.title = 'Análisis de sentimientos en Youtube'
          break;
        default:
          break;
      }
      switch (candidateOrMatch) {
        case 'carlos-mesa':
          switch (socialMedia) {
            case 'facebook':              
              break;
            case 'twitter':
              this.dataChart = CarlosMesaTwitter.map((v, k)=>{ return v.polarity }).reverse()
              break;
            case 'instagram':
              break;
            case 'youtube':
              break;
            default:
              break;
          }         
          break;
        case 'luis-arce':
          break;
        case 'luis-camacho':
          break;
          case 'chi-hyung-chung':          
          break;
        case 'feliciano-mamani':
          break;
        case 'maria-cruz':
          break;
        case 'carlos-mesa':          
          break;
        case 'luis-arce':
          break;
        case 'luis-arce':
          break;
          case 'carlos-mesa':          
          break;
        case 'luis-arce':
          break;
        case 'luis-arce':
          break;      
        default:
          break;
      }
      new Chart(chartId, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
						  label: 'Polaridad',
						  data: this.dataChart,
						  fill: false,
              backgroundColor: this.backgroundColor,
              borderColor: this.borderColor,
						  borderWidth: 3,
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
					layout: {
						padding: {
							top: 0
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
