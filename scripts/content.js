chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	let images = []
	let selector  = ''

	const url = window.location.href

	if (url.indexOf('page.kakao.com') >= 0) {
		selector  = '.viewerContentsBox > div > div img'
	}

	if (url.indexOf('webtoon.daum.net') >= 0) {
		selector = '#imgView > img'
	}

	if (url.indexOf('ac.qq.com') >= 0) {
		selector = '#comicContain > li > img'
	}

	if (url.indexOf('lezhin.com') >= 0) {
		selector = '.cut > img'
	}

	if (url.indexOf('u17.com/chapter') >= 0) {
		selector = 'img.cur_img'
	}

	if (url.indexOf('u17.com/chapter_vip') >= 0) {
		selector = '.cur_pic'
	}

	if (url.indexOf('comic.naver.com') >= 0) {
		selector = '.wt_viewer > img'
	}

	let data = document.querySelectorAll(selector);

	for (let i = 0; i < data.length; i++) {
		images.push(data[i].src)
	}

	console.log(images)

	sendResponse({data: images, success: true})
})