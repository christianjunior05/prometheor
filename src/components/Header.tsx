

import Button from "./Homepage/miniComponents/Button";

type Typage = {
  homepage?: boolean;
  packsrepere?: boolean;
  exploration?: boolean;
  trajectoire?: boolean;
};

const Header = ({ homepage, packsrepere, exploration, trajectoire }: Typage) => {
  return (
    <div>
      {/* Homepage */}
      {homepage && (
        <div className="bg-homepage h-[500px] bg-cover bg-center flex items-center px-6 md:px-20">
          <div className="text-white font-dmserif max-w-full md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl my-4 leading-tight">
              La promesse d’une orientation choisie.
            </h1>
            <p className="text-base sm:text-lg md:text-xl my-6 leading-relaxed">
              Donnez à votre enfant les clés de sa réussite, en toute confiance.
            </p>
            <Button text="Découvrir nos offres" icons={true} />
          </div>
        </div>
      )}

      {/* Pack Repère */}
      {packsrepere && (
        <div className="bg-repere h-[400px] bg-cover bg-center flex items-center">

          <div className="flex flex-col justify-center size-full backdrop-brightness-50">
          <div className=" px-6 md:px-20 space-y-4  text-white font-dmserif max-w-full md:max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl leading-snug">
              Des réponses claires et personnalisées pour guider
              <span className="text-jauneOr"> l’orientation de votre enfant.</span>
            </p>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              Un rendez-vous pensé pour lever les doutes, rassurer et apporter un
              premier éclairage sur ses choix de filière.
            </p>
            <p className="text-sm sm:text-base md:text-xl leading-relaxed">
              Parce que chaque choix éclairé commence par une meilleure connaissance de soi.
            </p>
          </div>
          </div>
          
        </div>
      )}

      {/* Exploration */}
      {exploration && (
        <div className="bg-exploration h-[400px] bg-cover bg-center flex items-center">
       <div className="backdrop-brightness-50 size-full flex flex-col justify-center">
  <div className="px-6 md:px-20 space-y-4  text-white font-dmserif max-w-full md:max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl leading-snug">
              Explorer pour mieux se
              <span className="text-jauneOr"> connaître et choisir sa voie</span>
            </p>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              Un accompagnement qui aide à mieux se connaître, identifier ses intérêts
              et ouvrir les premières pistes d’orientation en toute confiance.
            </p>
            <p className="text-sm sm:text-base md:text-xl leading-relaxed">
              Derrière chaque réussite se trouve un accompagnement qui fait la différence.
            </p>
          </div>
       </div>
       
        
        </div>
      )}

      {/* Trajectoire */}
      {trajectoire && (
        <div className="bg-trajectoire h-[400px] bg-cover bg-center flex items-center">
        
        <div className="backdrop-brightness-50 size-full flex flex-col justify-center">

        <div className="px-6 md:px-20 space-y-4   text-white font-dmserif max-w-full md:max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl mb-5 leading-snug">
              De l’orientation à l’action : un plan complet et concret pour avancer
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Un parcours complet pour définir son profil, explorer les formations adaptées.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              L’accompagnement qui transforme les doutes en décisions.
            </p>
          </div>

        </div>
        
          
        </div>
      )}
    </div>
  );
};

export default Header;
