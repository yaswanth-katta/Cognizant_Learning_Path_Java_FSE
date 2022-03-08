function modifyString(str)
{
    s=str.split(' ').join('');
    return s.toLowerCase();
}

function uniqueCharacters(str)
{
    var result='';
    for(var key of str){
       // console.log(key);
        if(result.search(key.toLowerCase())<0){
            result+=key.toLowerCase()
        }
    }
    return(modifyString(result));
} 

