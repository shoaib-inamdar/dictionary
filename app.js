const url="https://shoaib-inamdar.github.io/api-file/dictionary.json"
var meaningtag=document.querySelector('.meaningtag')
var wordtag=document.querySelector('.wordtag')
var arr=["10-code","2,3-diphosphoglycerate","Abandonment","ABCs"]
var btn=document.querySelector('#searchicon')

async function getdata(searchedword){
    let response=await fetch(url)
    var data=await response.json();
    // console.log(data)
    
    var result=data.filter((e)=>{
        return e.word.toLowerCase() === searchedword.toLowerCase();
        // console.log(e)
    })
    wordtag.innerHTML = result[0].word
    meaningtag.innerHTML = result[0].meaning
    console.log(result[0].meaning)
    // meaningtag.innerHTML=n.meaning;
    // wordtag.innerHTML=data[5].word;
    
}

btn.addEventListener("click",(e)=>{
    var searchedword=document.querySelector('#search').value;
    getdata(searchedword);
})
// console.log(promise);
// console.log(word)
