let str='aaabbbbbvvvvvssss'
function repeat(str){
let res=''
let count=1

for(i=1;i<=str.length;i++){
    if(str[i]==str[i-1]){
        count++
    }else{
        res+=str[i-1]+count
        count=1
    }
}
return res
}

console.log(repeat(str))