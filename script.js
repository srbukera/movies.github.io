 const movi=[
  {  dow:"download ",title:"leo full movies in hindi hd " ,link:  "https://ww4.filesdl.in/view/tOR5vJXkDg",image:"back.jpeg"},
   {  dow:"download ",title:"animal full{ movie hd print" ,link:  "https://www1.fastxyz.in/file.php?id=bGkxMzVsaDQzcjhqN2R6",image:"../images/animal.jpeg"},
   {  dow:"download ",title:"aquaman full movie hd " ,link:  "",image:"../images/Aquaman.jpeg"},
   {  dow:"download ",title:"avtar 1 full movie hd " ,link:  "https://tinyurl.com/r8mrwz7f",image:"avtar1.jpeg"},
   {  dow:"download ",title:" sam bahadur full movie hd" ,link:  "Sambhadurhttps://www1.fastxyz.in/file.php?id=bmFueXRnN2x3a3pxOHpp",image:"sam.jpeg"},
   {  dow:"download ",title:"tiger 3 full movie " ,link:  "   https://hindipeedia.com/red.php",image:"tiger.jpeg"},
   {  dow:"download ",title:"vikram full movie hindi hd " ,link:  "",image:"vikram.jpeg"},
   {  dow:"download ",title:"dora full movie in hindi " ,link:  "https://tinyurl.com/yjjrw9r3",image:"Dora.jpeg"},
   {  dow:"download ",title:"leo full movies in hindi hd " ,link:  "https://ww4.filesdl.in/view/tOR5vJXkDg",image:"back.jpeg"},
   {  dow:"download ",title:" Radheshyam full movie in hd print" ,link:  "https://tinyurl.com/64vpz5c2",image:"vikram.jpeg"},
   {  dow:"download ",title:"rustom full movie in hd print(akshay kumar movies) " ,link:  "https://tinyurl.com/56m48xz6",image:"Dora.jpeg"},
   {  dow:"download ",title:" tiger nageshvara rao full movie hindi dubbed" ,link:  "https://tinyurl.com/mus86d5s",image:"back.jpeg"},
 

];



var currentpage=1;

function loadpage(page){ 
  var  moviperpage=8;
  const startind= (page - 1) * moviperpage;
  const endind=startind + moviperpage;
  const moviesdisplay=movi.slice(startind,endind);


  add(moviesdisplay);

  currentpage=page;

  document.getElementById("back").disabled=currentpage===1;

}

function add(movi){
var movieslist=document.getElementById("movieslist")
movieslist.innerHTML='';

movi .forEach(movi => {
    const image=document.createElement("img")
    const link =document.createElement("a")
    const list=document.createElement("h4")
    const p=document.createElement("h1")
    p.style.fontSize="20px"
    link.style.backgroundColor="green"

    image.src=movi.image
    link.href=movi.link
    link.textContent=movi.dow
    p.textContent=movi.title

    
    list.appendChild(image);
    list.appendChild(link);
    list.appendChild(p);
    movieslist.appendChild(list);
});
}

loadpage( currentpage);

function searchmovies(){
  const search =document.getElementById("search").value.toLowerCase();
  const filtermovies=movi.filter(movi=>movi.title.toLowerCase().includes(search));
loadpage(1);
add(filtermovies)


}
document.getElementById("search").addEventListener("keyup",searchmovies)