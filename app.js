const url="https://shoaib-inamdar.github.io/api-file/dictionary.json"
var meaningtag=document.querySelector('.meaningtag')
var wordtag=document.querySelector('.wordtag')
var arr=["10-code","2,3-diphosphoglycerate","Abandonment","ABCs"]
var btn=document.querySelector('#searchicon')
var loading=document.querySelector(".skeletonload");


async function getdata(searchedword){
    wordtag.innerHTML = ''
    meaningtag.innerHTML =''
    let response=await fetch(url)
    var data=await response.json();
    // console.log(data)
    
    var result=data.filter((e)=>{
        return e.word.toLowerCase() === searchedword.toLowerCase();
        // console.log(e)
    })
    loading.style.opacity=1;
    setTimeout(()=>{
        loading.style.opacity=0;
        // console.log("hello")
    },2000)
    setTimeout(() => {
        if(result.length>0){
            wordtag.innerHTML = result[0].word
            meaningtag.innerHTML = result[0].meaning
        }
        else{
            wordtag.innerHTML = "No Match Found";
            document.querySelector("#search").value='';
        }
    }, 2000);
    console.log(result[0].meaning)
    // meaningtag.innerHTML=n.meaning;
    // wordtag.innerHTML=data[5].word;
    document.querySelector("#search").value='';
}

function search(){
    var searchedword=document.querySelector('#search').value;
    getdata(searchedword);
}
btn.addEventListener("click",(e)=>{
    search();
})
// console.log(promise);
// console.log(word)

document.onkeydown=function(e){
    switch(e.keyCode){
        case 13:search();
    }
}