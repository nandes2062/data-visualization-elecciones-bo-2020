import Chart from 'chart.js'
import 'chartjs-plugin-labels';
import {
  MASTwitter,
  ChiHyunChungTwitter,
  CCTwitter,
  LuisArceTwitter,
  LuisFCamachoTwitter,
  CarlosMesaTwitter,
  JorgeQuirogaTwitter
} from './twitter-polarity'
import {
  LuisArceFacebook,
  CarlosMesaFacebook,
  LuisFCamachoFacebook,
  ChiHyunChungFacebook,
  FelicianoMamaniFacebook,
  MariaBayaFacebook,
  JorgeQuirogaFacebook,
  MASFacebook,
  CCFacebook,
  CreemosFacebook,
  FPVFacebook,
  PanBolFacebook,
  Libre21Facebook,
} from './facebook-polarity'

export default window.SocialPolarityComponent = function () {
  return {
    labels: null,
    label: null,
    dataChart: null,
    backgroundColor: null,
    borderColor: null,
    title: null,
    titleColor: null,
    chartInit (chartId, candidateOrMatch, socialMedia) {
      this.socialMediaGet(socialMedia)
      switch (candidateOrMatch) {
        case 'luis-arce':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(LuisArceFacebook)              
              break
            case 'twitter':
              this.labels = LuisArceTwitter.map((v, k)=> {
                const date = v.created_at.split(' ')
                return date[0]
              }).reverse()
              this.dataChart = LuisArceTwitter.map((v, k)=>{ return v.polarity }).reverse()
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'carlos-mesa':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(CarlosMesaFacebook)
              break
            case 'twitter':
              this.labels = CarlosMesaTwitter.map((v, k)=> {
                const date = v.created_at.split(' ')
                return date[0]
              }).reverse()
              this.dataChart = CarlosMesaTwitter.map((v, k)=>{ return v.polarity }).reverse()
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'luis-f-camacho':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(LuisFCamachoFacebook)            
              break
            case 'twitter':
              this.labels = LuisFCamachoTwitter.map((v, k)=> {
                const date = v.created_at.split(' ')
                return date[0]
              }).reverse()
              this.dataChart = LuisFCamachoTwitter.map((v, k)=>{ return v.polarity }).reverse()
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'chi-hyung-chung':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(ChiHyunChungFacebook)
              break
            case 'twitter':
              this.dataFullGet(ChiHyunChungTwitter)
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'feliciano-mamani':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(FelicianoMamaniFacebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'maria-cruz-baya':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(MariaBayaFacebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'jorge-quiroga':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(JorgeQuirogaFacebook)
              break
            case 'twitter':
              this.dataFullGet(JorgeQuirogaTwitter)
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'mas-ipsp':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(MASFacebook)
              break
            case 'twitter':
              this.dataFullGet(MASTwitter)
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'comunidad-ciudadana':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(CCFacebook)
              break
            case 'twitter':
              this.dataFullGet(CCTwitter)              
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'creemos':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(CreemosFacebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'fpv':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(FPVFacebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'pan-bol':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(PanBolFacebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'adn':
          switch (socialMedia) {
            case 'facebook':
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        case 'libre21':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(Libre21Facebook)
              break
            case 'twitter':
              break
            case 'instagram':
              break
            case 'youtube':
              break
            default:
              break
          }
          break
        default:
          break
      }
      let newChart = new Chart(chartId, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
						  label: this.label,
						  data: this.dataChart,
						  fill: false,
              backgroundColor: this.backgroundColor,
              borderColor: this.borderColor,
						  borderWidth: 1,
						  hoverOffset: 4
            }           
          ]
        },
        options: {
          tooltips: {
            callbacks: {
              title: function(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function(tooltipItem, data) {
                return ` ${data['datasets'][0]['data'][tooltipItem['index']]}`;
              }
            }           
          },
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
      chartId.onclick = function (evt) {
        var activePoints = newChart.getElementsAtEvent(evt)
        if (activePoints[0]) {
          var chartData = activePoints[0]['_chart'].config.data
          var idx = activePoints[0]['_index']
          var label = chartData.labels[idx]
          var polarity = chartData.datasets[0].data[idx]
          const textPost = chartData.datasets[0].label[idx]
          console.log(textPost)
          alert('Texto de post: ' + textPost)
        }
      }
    },
    socialMediaGet (socialMedia) {
      switch (socialMedia) {
        case 'facebook':
          this.backgroundColor = 'rgba(81, 134, 228, 0.5)'
          this.borderColor = 'rgba(81, 134, 228, .5)'
          this.title = 'Análisis de sentimientos en Facebook'
          // this.titleColor = 'rgba(81, 134, 228, 1)'
          break
        case 'twitter':
          this.backgroundColor = 'rgba(81, 134, 228, 0.5)'
          this.borderColor = 'rgba(81, 134, 228, .5)'
          this.title = 'Análisis de sentimientos en Twitter'
          break
        case 'instagram':
          this.backgroundColor = 'rgba(169, 102, 255, 0.5)'
          this.borderColor = 'rgba(228, 109, 216, 0.5)'
          this.title = 'Análisis de sentimientos en Instagram'
          // this.titleColor = 'rgba(169, 102, 255, 1)'
          break
        case 'youtube':
          this.backgroundColor = 'rgba(215, 0, 28, 0.5)'
          this.borderColor = 'rgba(215, 0, 28, 0.5)'
          this.title = 'Análisis de sentimientos en Youtube'
          break
        default:
          break
      }
    },
    dataFullGet (candidateOrMatch) {
      this.labelsGet(candidateOrMatch)
      this.labelGet(candidateOrMatch)
      this.dataChartGet(candidateOrMatch)
    },
    labelsGet (candidateOrMatch) {
      this.labels = candidateOrMatch.map((v, k)=> {
        const date = v.created_at.split(' ')
        return `${date[0]}`
      }).reverse()
    },
    labelGet (candidateOrMatch) {
      this.label = candidateOrMatch.map((v, k)=>{ return v.text }).reverse()
    },
    dataChartGet (candidateOrMatch) {
      this.dataChart = candidateOrMatch.map((v, k)=>{ return v.polarity }).reverse()
    },
  }
}
