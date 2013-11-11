jQuery(function(){
    var timeCallback = function(){

        var time = new Date(),
            concat = ':',
            hour = time.getHours(),
            minu = time.getMinutes();

        if(hour<10){
            hour = '0'+hour;
        }
        if(minu<10){
            minu = '0'+minu;
        }
        jQuery('.cevatime .hour').text(hour);
        jQuery('.cevatime .minute').text(minu);

        jQuery('.cevatime .colon').css('opacity', (time.getMilliseconds()>500)?1:0);
    }

    var aktiv = window.setInterval(timeCallback, 100);
})