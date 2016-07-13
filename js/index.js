$(function(){
    //页面滚动事件
    window.onscroll=function(){
        var osTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop>50){
            var top=osTop-50;
            $(".banner-bg").css({
                backgroundPosition:"0 -"+ top + "px"
            });
        }
        
        
        if(osTop>200){
            $(".top-form").css({
                display:"inline-block"
            })

            $("#header").css({
               backgroundColor:"#fff",
            });

            $(".header-item").css({
                color:"#000"
            });
            
            $(".register").css({
                color:"#fff"
            });   

            $("#header").addClass("addstyle");
            
        }
        else{
            $(".top-form").css({
                display:"none"
            })
            $("#header").removeClass("addstyle");
            $(".header-item").css({
                color:"#fff"
            });
             $("#header").css({
               backgroundColor:"transparent",
            });

        }

    }
})