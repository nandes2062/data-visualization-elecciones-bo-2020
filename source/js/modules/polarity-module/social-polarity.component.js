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
import {
  LuisArceInstagram,
  CarlosMesaInstagram,
  LuisFCamachoInstagram,
  ChiHyunChungInstagram,
  JorgeQuirogaInstagram,
  MASInstagram
} from './instagram-polarity'
import {
  CarlosMesaYoutube,
  JorgeQuirogaYoutube
} from './youtube-polarity'

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
              this.dataFullGet(candidateOrMatch, socialMedia, LuisArceFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, LuisArceTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, LuisArceInstagram)
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
              this.dataFullGet(candidateOrMatch, socialMedia, CarlosMesaFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, CarlosMesaTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, CarlosMesaInstagram)
              break
            case 'youtube':
              this.dataFullGet(candidateOrMatch, socialMedia, CarlosMesaYoutube)
              break
            default:
              break
          }
          break
        case 'luis-f-camacho':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(candidateOrMatch, socialMedia, LuisFCamachoFacebook)            
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, LuisFCamachoTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, LuisFCamachoInstagram)
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
              this.dataFullGet(candidateOrMatch, socialMedia, ChiHyunChungFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, ChiHyunChungTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, ChiHyunChungInstagram)
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
              this.dataFullGet(candidateOrMatch, socialMedia, FelicianoMamaniFacebook)
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
              this.dataFullGet(candidateOrMatch, socialMedia, MariaBayaFacebook)
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
              this.dataFullGet(candidateOrMatch, socialMedia, JorgeQuirogaFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, JorgeQuirogaTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, JorgeQuirogaInstagram)  
              break
            case 'youtube':
              this.dataFullGet(candidateOrMatch, socialMedia, JorgeQuirogaYoutube)
              break
            default:
              break
          }
          break
        case 'mas-ipsp':
          switch (socialMedia) {
            case 'facebook':
              this.dataFullGet(candidateOrMatch, socialMedia, MASFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, MASTwitter)
              break
            case 'instagram':
              this.dataFullGet(candidateOrMatch, socialMedia, MASInstagram)
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
              this.dataFullGet(candidateOrMatch, socialMedia, CCFacebook)
              break
            case 'twitter':
              this.dataFullGet(candidateOrMatch, socialMedia, CCTwitter)              
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
              this.dataFullGet(candidateOrMatch, socialMedia, CreemosFacebook)
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
              this.dataFullGet(candidateOrMatch, socialMedia, FPVFacebook)
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
              this.dataFullGet(candidateOrMatch, socialMedia, PanBolFacebook)
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
              this.dataFullGet(candidateOrMatch, socialMedia, Libre21Facebook)
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
                if (data['labels'][tooltipItem[0]['index']] !== '.') {
                  return data['labels'][tooltipItem[0]['index']]                  
                } else {
                  return 'Youtube'
                }
              },
              label: function(tooltipItem, data) {
                return `Polaridad: ${data['datasets'][0]['data'][tooltipItem['index']]}`;
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
      chartId.onclick = (evt) => {
        var activePoints = newChart.getElementsAtEvent(evt)
        if (activePoints[0]) {
          const chartData = activePoints[0]['_chart'].config.data
          const idx = activePoints[0]['_index']
          const label = chartData.labels[idx]
          const polarity = chartData.datasets[0].data[idx]
          const textPost = chartData.datasets[0].label[idx]
          this.$store.postModal = {
            open: true,
            text: textPost,
            createdAt: label,
            polarity: polarity,
            candidateOrMatch: 'luis-arce'
          }
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
    dataFullGet (path, socialMedia, candidateOrMatch) {
      this.labelsGet(path, socialMedia, candidateOrMatch)
      this.labelGet(path, socialMedia, candidateOrMatch)
      this.dataChartGet(path, socialMedia, candidateOrMatch)
    },
    labelsGet (path, socialMedia, candidateOrMatch) {
      this.labels = candidateOrMatch.map((v, k)=> {
        if (v.created_at) { 
          const date = v.created_at.split(' ')
          return `${date[0]}`
        } else {
          return '.'
        }
      }).reverse()
    },
    labelGet (path, socialMedia, candidateOrMatch) {
      this.label = candidateOrMatch.map((v, k)=>{
        const dataText = `${path}*.https://fernandoaveranga.netlify.app.*${socialMedia}*.https://fernandoaveranga.netlify.app.*${v.text}`.split('*.https://fernandoaveranga.netlify.app.*')
        return dataText
      }).reverse()
    },
    dataChartGet (path, socialMedia, candidateOrMatch) {
      this.dataChart = candidateOrMatch.map((v, k)=>{ return v.polarity }).reverse()
    },
  }
}
