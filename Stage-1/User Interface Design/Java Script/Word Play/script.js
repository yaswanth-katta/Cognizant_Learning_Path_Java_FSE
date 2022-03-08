function wordPlay(number){
    var result='';
    if(number>50){
        return 'Range is High';
    }else if(number<1){
        return 'Not Valid';
    }else{
        for(var i=1;i<=number;i++){
            if(i%5===0 && i%3===0){
                result+=' '+'jump';
            }else if(i%3===0){
                result+=' '+'Tap';
            }else if(i%5===0){
                result+=' '+'Clap';
            }else{
                result+=' '+i;
            }
        }
    }
    return result;
}

