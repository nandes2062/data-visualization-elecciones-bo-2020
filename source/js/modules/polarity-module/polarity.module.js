export default window.polarityModule = function () {
  return {
		openTab: 1,
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
