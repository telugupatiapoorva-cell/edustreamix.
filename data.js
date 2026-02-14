const data = {

general:{
English:[
{name:"Part A - English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D"},
{name:"Part B - English by Nisa", link:"https://youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8"},
{name:"Whole - Sara’s Learning Point", link:"https://youtube.com/playlist?list=PLjNdhMBtsxpwAyVG7o59hqSCUYKKHvz-Y"}
],
Telugu:[
{name:"Dandu Venkatramulu", link:"https://youtube.com/playlist?list=PLyjVm5GfnmY6UUa5iLn-GQNPkW7y1CeMh"},
{name:"Matrubhasha", link:"https://youtube.com/playlist?list=PL7noKDJp4ZRKVkWtOlT6edyqABvC-zjNI"}
],
Hindi:[
{name:"Disha Hindi Classes", link:"https://youtube.com/playlist?list=PLsTBUOfP6EhdnT2rEau2eaprGMdw6BZra"}
],
Sanskrit:[
{name:"Dandu Venkatramulu", link:"https://youtube.com/playlist?list=PLyjVm5GfnmY7ynZnZ0neH3LcGAi1oBzHh"}
]
}

};

function loadSubjects(){
const course=document.getElementById("courseSelect").value;
const subjectSelect=document.getElementById("subjectSelect");
subjectSelect.innerHTML="<option value=''>Select Subject</option>";
document.getElementById("playlistContainer").innerHTML="";

if(course && data[course]){
Object.keys(data[course]).forEach(subject=>{
let option=document.createElement("option");
option.value=subject;
option.textContent=subject;
subjectSelect.appendChild(option);
});
}
}

function loadPlaylists(){
const course=document.getElementById("courseSelect").value;
const subject=document.getElementById("subjectSelect").value;
const container=document.getElementById("playlistContainer");
container.innerHTML="";

if(course && subject){
data[course][subject].forEach(item=>{
let div=document.createElement("div");
div.className="playlist-item";
div.textContent=item.name;
div.onclick=()=>window.open(item.link,"_blank");
container.appendChild(div);
});
}
}

function searchPlaylists(){
let input=document.getElementById("searchBox").value.toLowerCase();
let items=document.getElementsByClassName("playlist-item");
for(let i=0;i<items.length;i++){
let txt=items[i].textContent.toLowerCase();
items[i].style.display=txt.includes(input) ? "block" : "none";
}
}
