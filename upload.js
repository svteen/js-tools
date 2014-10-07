/* 移动端上传 base64 */
var img = new Image();
img.src = 'ss.jpg';
img.onload = function () {
	var that = this;
	var w = that.width,
	h = that.height,
	scale = w / h;
	w = w;
	h = w / scale;
	
	//生成canvas
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	
	canvas.setAttribute('width', w);
	canvas.setAttribute('height', h);
	ctx.drawImage(that, 0, 0, w, h);
	document.getElementById('wrap').appendChild(canvas);
	var base64 = canvas.toDataURL('image/jpeg', 0.8 );
	var data = base64.substr(23);
	
	var imgLength = atob(data).length/1024;
	var url = './upload.php'
	//ajax 测试
	xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.readystatechange = function(){
		if(xhr.status === 200 && xhr.readyState === 4){
			alert('success');
		}
	}
	xhr.send(data);
}
