type Typage = {
  commentaire: string;
  image?: boolean;
  nom: string;
  profession: string;
  className: string;
};

const DivTemoignage = ({
  commentaire,
  image,
  nom,
  profession,
  className,
}: Typage) => {
  return (
    <div className={`${className} rounded-xl border`}>
      {/* Commentaire */}
      <p className="text-sm max-md:text-base max-sm:text-sm ">{commentaire}</p>

      {/* Étoiles */}
      <div className="my-3 flex  text-sm max-md:text-base">
        <i className="fa-solid fa-star text-jauneOr"></i>
        <i className="fa-solid fa-star text-jauneOr"></i>
        <i className="fa-solid fa-star text-jauneOr"></i>
        <i className="fa-solid fa-star text-jauneOr"></i>
        <i className="fa-solid fa-star text-jauneOr"></i>
      </div>

      {/* Nom et profession */}
      <div className="flex items-center gap-3 mt-3">
        {image && (
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img
              src="/photo6.png"
              alt={nom}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}
        <div>
          <span className="block text-sm md:text-base font-semibold">{nom}</span>
          <span className="block text-xs md:text-sm">{profession}</span>
        </div>
      </div>
    </div>
  );
};

export default DivTemoignage;
