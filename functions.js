/*
	The function used often
*/

function getUrlQuery(a, d) {
    var c = window.location.search.substr(1);
    var b = c.match(new RegExp("(^|&)" + a + "=([^&]*)(&|$)"));
    if (d) {
        return (b == null ? null: b[2]);
    } else {
        return (b == null ? null: unescape(b[2]));
    }
}

function getUrlHash(a) {
    var c = window.location.hash.substr(1);
    var b = c.match(new RegExp("(^|&)" + a + "=([^&]*)(&|$)"));
    return (b == null ? null: unescape(b[2]));
}

function getCookie(b) {
    var a = b + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(a);
        if (offset != -1) {
            offset += a.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, end));
        } else {
            return "";
        }
    }
}
function setCookie(c, e, b, d) {
    var a = ";domain=" + d;
    document.cookie = c + "=" + escape(e) + a + (b ? ";expires=" + (new Date(2099, 12, 31)).toGMTString() : "");
}
function fEventListen(b, c, d, a) {
    a = !!a;
    if (b.addEventListener) {
        b.addEventListener(c, d, a);
    } else {
        if (b.attachEvent) {
            b.attachEvent("on" + c, d);
        }
    }
}
function fEventUnlisten(b, c, d, a) {
    a = !!a;
    if (b.removeEventListener) {
        b.removeEventListener(c, d, a);
    } else {
        if (b.detachEvent) {
            b.detachEvent("on" + c, d);
        }
    }
}

function getRandStr(lens){
    var ranstr = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var str = '';  
    for (var i = 0; i < lens; i++) {  
       str += ranstr[Math.floor(Math.random() * ranstr.length)];  
    }  
    return str;
}

function getScript(c, a, b) {
    var d = document.createElement("script");
    d.setAttribute("type", "text/javascript");
    d.setAttribute("src", c);
    try {
        d.setAttribute("defer", "defer");
    } catch(f) {}
    window.document.body.appendChild(d);
    d.onload = d.onreadystatechange = function() {
        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
            a && a();
        }
    };
    d.onerror = function() {
        b && b();
    };
}

function JSONP(f, c) {
    if (!f) {
        return;
    }
    var d = f;
    var e = "&";
    for (var b in c) {
        e += b + "=" + c[b] + "&";
    }
    var a = e.split("&");
    a.pop();
    a.shift();
    e = a.join("&");
    getScript(f + "?" + e + "&rnd=" + Math.random());
}

var random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() { return Math.floor(Math.random()*65536); },
    get int16() { return Math.floor(Math.random()*65536) - 32768; },
}

function urlArgs(){
    var args = {};
    var query = window.location.search.substring(1);
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++){
        var pos = pairs[i].indexOf('=');
        if(pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

function getScrollOffsets(w){
    w = w || window;
    if(w.pageXOffset != null) return { x: w.pageXOffset, y: w.pageYOffset};
    var d = w.document;
    if(document.compact == "CSS1Compat");
        return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
    return { x: d.body.scrollLeft, y: d.body.scrollTop };
}

function getViewportSize(w){
    w = w || window;
    if(w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };
    var d = w.document;
    if(document.compat == "CSS1Compat"){
        return { w: d.documentElement.clientWidth, h: w.documentElement.clientHeight };
    }
    return { w: d.body.clientWidth, h: d.body.clientHeight };
}

function getElementsByClassName(className, root, tagName) {    
	//root：父节点，tagName：该节点的标签名。 这两个参数均可有可无
	if(root){
	  root=typeof root=="string" ? document.getElementById(root) : root;   
	}else{
	  root=document.body;
	}
	tagName=tagName||"*";                                    
	if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用
	return root.getElementsByClassName(className);
	}else { 
	var tag= root.getElementsByTagName(tagName);    //获取指定元素
	var tagAll = [];                                    //用于存储符合条件的元素
	for (var i = 0; i < tag.length; i++) {                //遍历获得的元素
	    for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
	        if(n[j]==className){
	            tagAll.push(tag[i]);
	            break;
	        }
	    }
	}
	return tagAll;
	}
}
