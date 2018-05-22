function pad (str, max){
	str = str.toString();
	return str.length < max ? pad('0' + str, max) : str;
}

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, {}, function (res) {
		if (!res) return
		
		let n = 0;
		for (var i = 0; i < res.data.length; i++) {
			n++
			
			chrome.downloads.download({
				url: res.data[i],
				filename: `manga/${Date.now()}/${pad(n, 2)}.png`
			}, function(err) {
				console.error(err)
			})
		}
	})
})