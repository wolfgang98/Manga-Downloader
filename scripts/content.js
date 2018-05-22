chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	let images = []
	let selector  = ''
	let attribute = ''

	const url = window.location.href

	if (url.indexOf('page.kakao.com') >= 0) {
		selector  = '.viewerContentsBox > div > div img'
		attribute = 'src'
	}

	if (url.indexOf('webtoon.daum.net') >= 0) {
		selector = '#imgView > img'
		attribute = 'src'
	}

	if (url.indexOf('ac.qq.com') >= 0) {
		selector = '#comicContain > li > img'
		attribute = 'src'
	}

	if (url.indexOf('lezhin.com') >= 0) {
		selector = '.cut > img'
		attribute = 'src'
	}

	if (url.indexOf('u17.com') >= 0) {
		selector = '.cur_pic'
		attribute = 'src'
	}

	let data = document.querySelectorAll(selector);

	for (let i = 0; i < data.length; i++) {
		images.push(data[i].src)
	}

	console.log(images)

	sendResponse({data: images, success: true})
})