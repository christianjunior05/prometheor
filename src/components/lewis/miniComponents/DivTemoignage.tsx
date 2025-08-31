type Typage={
    commentaire:string,
    image?:boolean,
    nom:string,
    profession:string
}

const  DivTemoignage=({  commentaire,
    image,
    nom,
    profession}:Typage)=> {
    return ( 
        <div className=" size-80 font-lato flex flex-col p-5 bg-jauneOr/5 rounded-xl shadow-jauneOr/20 shadow-lg">
     <p className=" mb-7">
{commentaire}
     </p> 
     <div className="mb-2">
  <i className="fa-solid fa-star text-jauneOr"></i>
  <i className="fa-solid fa-star text-jauneOr"></i>
  <i className="fa-solid fa-star text-jauneOr"></i>
  <i className="fa-solid fa-star text-jauneOr"></i>
  <i className="fa-solid fa-star text-jauneOr"></i>
     </div>

    
     <div className="flex items-center gap-3">
{  image && <div className="size-10 ">
        <img src="/photo6.png" alt="" className="size-full object-cover rounded-full" />
     </div>}
    <div className="">
      <span className="block"> {nom} </span>
     <span className="block"> {profession} </span>   
    </div>

     </div>
   
     
    </div>
     );
}

export default DivTemoignage;