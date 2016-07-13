/**
 * 图片加载对象
 * Created by kuntang on 16-7-10.
 */


var imgLoader = new Object();

//加载完成状态
imgLoader.status = 'init';

/**
 * 加载函数
 * @param url 图片URL地址 单个地址或者地址数组
 * @param cb 成功加载完图片后调用的函数
 * @param errCb  图片加载失败后调用的函数
 */
imgLoader.load = function (obj, url, index, errCb) {
    //console.log(typeof url)
    if (typeof url === 'string') {
        imgLoader.status = 'loading';
        //loading(url);
    } else if (url instanceof Array) {
        for(var i = 0; i < url.length; i++){
            loading(url[i],i);
        }
    }

    

    function loading(url,i) {
        //如果是单张图片的话就
        if(!i)  i=0;

        var img = new Image();
        img.src = url;
        //console.log(url)
        img.onload = function () {
            if(index){
                $(obj).eq(index).append(img);
                animationer.fadeIn(this);
            }else{
                $(obj).eq(i).append(img);
                animationer.fadeIn(this);
            }
        };
        img.onerror = function () {
            if(errCb) errCb();
        }
    }
}

window.imgLoader = imgLoader;