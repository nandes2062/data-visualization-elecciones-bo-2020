import Chart from 'chart.js'
import 'chartjs-plugin-labels';
import WordCloud from 'almete.wordcloud'

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
} from './facebook-wordcloud'

export default window.SocialWordcloudComponent = function () {
  return {
    labels: null,
    dataChart: null,
    backgroundColor: null,
    borderColor: null,
    title: null,
    titleColor: null,
    wordcloudInit (chartId, wordcloudId, candidateOrMatch, socialMedia) {
      this.socialMediaGet(socialMedia)
      this.candidateOrMatchGet(chartId, wordcloudId, candidateOrMatch, socialMedia)
    },
    wordCloudGet (wordcloudId, wcloudArray) {
      let canvas = wordcloudId
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
        text
      }) => {
        ctx.save()
        ctx.translate(centerLeft, centerTop)
        ctx.rotate(rotationRad)
        ctx.font = font
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = this.backgroundColor
        ctx.fillText(text, 0, 0)
        ctx.restore()
      })
    },
    chartWordCloudInit (chartId, wcloudArray) {
      new Chart(chartId, {
        type: 'horizontalBar',
        data: {
          labels: wcloudArray.map((v, k)=> {
            return v.text
          }),
          datasets: [
            {
						  label: 'Peso de  de palabra más usada',
						  data: wcloudArray.map((v, k)=> {
                return v.value
              }),
						  fill: false,
              backgroundColor: this.backgroundColor,
              borderColor: this.borderColor,
						  borderWidth: 1,
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
    },
    socialMediaGet (socialMedia) {
      switch (socialMedia) {
        case 'facebook':
          this.title = 'Peso de  de palabras mas usadas en Facebook'
          this.backgroundColor = '#3b5998'
          this.borderColor = '#3b5998'
          break
        case 'twitter':
          this.title = 'Peso de  de palabras mas usadas en Twitter'
          this.backgroundColor = '#3b5998'
          this.borderColor = '#3b5998'
          break
        case 'instagram':
          this.title = 'Peso de  de palabras mas usadas en Instagram'
          this.backgroundColor = '#3b5998'
          this.borderColor = '#3b5998'
          break
        case 'youtube':
          this.title = 'Peso de  de palabras mas usadas en Youtube'
          this.backgroundColor = '#3b5998'
          this.borderColor = '#3b5998'
          break
        default:
          break
      }
    },
    candidateOrMatchGet (chartId, wordcloudId, candidateOrMatch, socialMedia) {
      switch (candidateOrMatch) {
        case 'luis-arce':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, LuisArceFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, LuisArceFacebook)
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
        case 'carlos-mesa':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, CarlosMesaFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, CarlosMesaFacebook)
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
        case 'luis-f-camacho':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, LuisFCamachoFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, LuisFCamachoFacebook)
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
        case 'chi-hyung-chung':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, ChiHyunChungFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, ChiHyunChungFacebook)       
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
        case 'feliciano-mamani':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, FelicianoMamaniFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, FelicianoMamaniFacebook)
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
              this.wordCloudGet(wordcloudId, MariaBayaFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, MariaBayaFacebook)
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
              this.wordCloudGet(wordcloudId, JorgeQuirogaFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, JorgeQuirogaFacebook)      
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
        case 'mas-ipsp':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, MASFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, MASFacebook)         
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
        case 'comunidad-ciudadana':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, CCFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, CCFacebook)            
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
        case 'creemos':
          switch (socialMedia) {
            case 'facebook':
              this.wordCloudGet(wordcloudId, CreemosFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, CreemosFacebook)
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
              this.wordCloudGet(wordcloudId, FPVFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, FPVFacebook)
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
              this.wordCloudGet(wordcloudId, PanBolFacebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, PanBolFacebook)
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
              this.wordCloudGet(wordcloudId, Libre21Facebook.map((v, k) => {
                return {
                  text: v.text,
                  weight: v.value,
                  rotation: 0
                }
              }))
              this.chartWordCloudInit(chartId, Libre21Facebook)
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
    }
  }
}
