function appendPicHTML(datas){
    var picArr = [];
    var picHtml = "";
    for (var i = 0; i < datas.data.length; i++) {
        picHtml += '<div class="outCon">' +
                '<div class="picCon">' +
                '<a href="' + datas.data[i].link +'"><div class="picLoader" data="'+ datas.data[i].link +'"></div></a>' +
                '<div class="title">'+ datas.data[i].title +'</div>' +
                '<div class="detailCon">' +
                '<div class="view"><i class="iconfont">&#xe613;</i><span>' + datas.data[i].pv + '</span></div>' +
                '<div class="hot"><i class="iconfont">&#xe603;</i><span>' + datas.data[i].like + '</span></div>' +
                '</div>' +
                '<div class="time"><i class="iconfont">&#xe62b;</i><span>'+ /*datas.data[i].time*/  '2016-01-05' + '</span></div>' +
                '<a href="#"><div class="author"><i class="iconfont">&#xe619;</i><span>作者' + datas.data[i].author + '</span></div></a>' +
                '</div>' +
                '</div>';
        picArr.push(datas.data[i].pic);
    }
    return {
            picArr: picArr,
            picHtml: picHtml
        };
}

window.appendPicHTML = appendPicHTML;