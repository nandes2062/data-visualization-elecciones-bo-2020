import Chart from 'chart.js'
import 'chartjs-plugin-labels';
import WordCloud from 'almete.wordcloud'

import CarlosMesaTwitterWC from './twitter-wordcloud/@carlosdmesag.json'

export default window.SocialWordcloudComponent = function () {
  return {
    labels: CarlosMesaTwitterWC.map((v, k)=> {
      return v.text
    }).reverse(),
    dataChart: null,
    backgroundColor: null,
    borderColor: null,
    title: null,
    titleColor: null,
    wordcloudInit (chartId, candidateOrMatch, socialMedia) {
      const wcloudArray = CarlosMesaTwitterWC.map((v, k) => {
        return {
          text: v.text,
          weight: v.value,
          rotation: 0
        }
      })
      console.log(wcloudArray)
      let canvas = document.getElementById('canvasjaja')
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let words = wcloudArray
      let boundedWords = WordCloud(words, canvas.width, canvas.height, {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        rotationUnit: 'deg',
      })
      boundedWords.forEach(({
        centerLeft,
        centerTop,
        font,
        rotationRad,
        text,
      }) => {
        ctx.save()
        ctx.translate(centerLeft, centerTop)
        ctx.rotate(rotationRad)
        ctx.font = font
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'lightblue'
        ctx.fillText(text, 0, 0)
        ctx.restore()
      })
      this.chartWordCloudInit(chartId, candidateOrMatch, socialMedia)
    },
    chartWordCloudInit (chartId, candidateOrMatch, socialMedia) {
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
              // this.dataChart = CarlosMesaTwitter.map((v, k)=>{ return v.polarity }).reverse()
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
        type: 'horizontalBar',
        data: {
          labels: this.labels,
          datasets: [
            {
						  label: 'Polaridad',
						  data: CarlosMesaTwitterWC.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }),
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
