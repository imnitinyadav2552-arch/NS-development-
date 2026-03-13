let apkLink="";

fetch("about.json")
.then(function(res){return res.json()})
.then(function(data){

document.getElementById("appName").innerText=data.name;
document.getElementById("version").innerText=data.version;
document.getElementById("detailName").innerText=data.name;
document.getElementById("package").innerText=data.package;
document.getElementById("arch").innerText=data.architecture;
document.getElementById("perm").innerText=data.permissions;
document.getElementById("android").innerText=data.android_support;

document.getElementById("size").innerText="1 MB";

document.getElementById("about").innerHTML=data.about.replace(/\n/g,"<br>");

apkLink=data.apk;

})
.catch(function(e){
console.log("JSON Error:",e);
});

const btn=document.getElementById("downloadBtn");

btn.addEventListener("click",function(e){

if(!apkLink){
alert("APK not loaded");
return;
}

const wave=document.createElement("div");
wave.className="wave";

wave.style.left=(e.clientX-100)+"px";
wave.style.top=(e.clientY-100)+"px";

document.body.appendChild(wave);

setTimeout(function(){
window.location.href=apkLink;
},700);

});

const toggle=document.getElementById("aboutToggle");
const content=document.getElementById("about");
const arrow=document.getElementById("arrow");

toggle.onclick=function(){

if(content.style.maxHeight){

content.style.maxHeight=null;
arrow.style.transform="rotate(0deg)";

}else{

content.style.maxHeight=content.scrollHeight+"px";
arrow.style.transform="rotate(90deg)";

}

};

const imgs=document.querySelectorAll(".screenshots img");
const popup=document.getElementById("popup");
const popupImg=document.getElementById("popupImg");

imgs.forEach(function(img){

img.onclick=function(){
popup.style.display="flex";
popupImg.src=this.src;
};

});

popup.onclick=function(){
popup.style.display="none";
};