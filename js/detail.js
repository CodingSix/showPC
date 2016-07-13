$(function(){

    // 判断是否点赞
    var flag=null;
    $(".icon-bg").click(function(){
        console.log(flag);
        if(!flag==true){
            $(".icon-bg").css({
                border:"1px solid #ec6f6f",
                color:"#ec6f6f"
            })
            flag=!flag;
        }
        else{
            $(".icon-bg").css({
                border:"1px solid #9aabb8",
                color:"#9aabb8"
            })
            flag=!flag;
        }
    })
})