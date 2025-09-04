

import Button from "./miniComponents/Button"
import Title from "./miniComponents/Title"
import { TbPointFilled } from "react-icons/tb";
import Coche from "./miniComponents/Coche";
import EnsavoirPlus from "./miniComponents/EnsavoirPlus";
import InfoProfile from "./miniComponents/InfoProfile";
import Temoignage from "./miniComponents/Temoignage";
import DivWebinaire from "./miniComponents/DivWebinar";
import { HiArrowRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../Header";
// tout ce qui est ici concerne la page Homapage
export default function Homepage() {
  return (
    <div>

{/*  entete de la page Homepage */}
    

  <Header
  homepage={true}
  packsrepere={false}
  exploration={false}
  trajectoire={false}
  />



<div className="flex flex-col md:flex-row justify-center items-start md:items-center my-10 space-y-10 md:space-y-0 md:space-x-10 px-6 md:px-20">
  {/* Texte */}
  <div className="font-lato flex-1 flex flex-col justify-between items-start space-y-6">
    <Title text1="Qui " text2=" sommes nous " text3="?" />
    <p className="w-full md:w-10/12 leading-relaxed text-base md:text-lg">
      Premier réseau national de conseillers d'orientation scolaire indépendants, nous accompagnons les collégiens, lycéens et étudiants dans leurs choix d’orientation.
    </p>
    <ul className="leading-7 text-jauneOr space-y-2">
      <li>
        <TbPointFilled className="inline mr-2" />
        Environnement scolaire (méthodologie, handicap)
      </li>
      <li>
        <TbPointFilled className="inline mr-2" />
        Notre engagement qualité (Écoute, neutralité, bienveillance)
      </li>
      <li>
        <TbPointFilled className="inline mr-2" />
        Formation de conseiller d'orientation certifiée Qualiopi
      </li>
    </ul>
    <Button text="Nous découvrir " icons={true} />
  </div>

  {/* Image */}
  <div className=" border h-[300px] md:h-[450px] w-full md:w-1/2 flex justify-center items-center">
    <img
      src="/QuiSommesNous.png"
      alt="plusieurs personnes assises en train d'échanger"
      className="object-cover h-full w-full"
    />
  </div>
</div>


{/* pour qui ? */}


<div className="flex flex-col md:flex-row h-auto md:h-[400px] bg-jauneOr/5 justify-center items-center gap-10 md:gap-40 px-6 md:px-20 py-10 md:py-0">
  {/* Image */}
  <div className="h-60 md:h-80 w-full md:w-auto flex justify-center items-center">
    <img
      src="/photo1.png"
      alt="Un groupe d'amis en pause photo"
      className="object-contain h-full w-full"
    />
  </div>

  {/* Texte */}
  <div className="flex-1 max-w-md">
    <Title text1="pour" text2="qui ?" />
    <ul className="leading-7 py-5 space-y-2">
      <Coche text="Les collégiens (à partir de la classe de 4ème)" />
      <Coche text="Lycéens" />
      <Coche text="Étudiants" />
    </ul>
  </div>
</div>


{/* Nos solution d'orientation */}

<div className="   mt-20 mb-40" >
  <div className="text-center  ">
  <Title text1="Nos solutions" text2="d'orientation"/>
<p className="text-blue mt-10 mb-14  max-md:mx-5 " > Prometheor propose différents packs d'orientation pensés pour répondre à votre besoin:</p>

 <div className=" flex justify-center max-lg:items-center  gap-10 max-md:gap-5 flex-wrap  ">
  <EnsavoirPlus/>
  <EnsavoirPlus/>
  <EnsavoirPlus/>
  <div>

  </div>
 </div>
  </div>
</div>

{/* Parck Personnalisé  */}

<div className="flex flex-col md:flex-row px-6 md:px-20 justify-center items-center gap-8 md:gap-12 bg-jauneOr/5 py-10 ">
  {/* Image */}
  <div className="h-64 md:h-72 w-full md:w-auto flex justify-center items-center">
    <img
      src="/photo4.png"
      alt="Pack personnalisé"
      className="object-contain h-full w-full"
    />
  </div>

  {/* Texte */}
  <div className="w-full md:w-7/12  space-y-4 md:space-y-6">
    <Title text1="Pack Personnalisé" text2="(100% SUR Mesure)" />
    <p className="text-base md:text-lg leading-relaxed text-gray-800 ">
      Chaque enfant est unique, avec ses forces, ses aspirations et parfois des besoins particuliers.
    </p>
    <p className="text-base md:text-lg leading-relaxed text-gray-800 ">
      Chez Prometheor, nous co-construisons un accompagnement adapté : rendez-vous de cadrage, mise en place d'une solution adaptée avec un suivi évolutif.
    </p>

    {/* Bouton inchangé */}
    <Button text="Contactez un conseiller " icons={true} />
  </div>
</div>




{/* Accompagnement Parcoursup */}



<div className="flex max-sm:my-10 flex-col md:flex-row items-center justify-center gap-8  px-6 md:px-32 mb-10">
  {/* Image */}
  <div className="w-full md:w-[600px] h-64 md:h-auto flex justify-center items-center">
    <img
      src="/photo5.jpg"
      alt="Deux personnes assises en train d'échanger"
      className="object-contain h-full w-full"
    />
  </div>

  {/* Texte */}
  <div className="w-full md:w-7/12  space-y-4">
    <Title text1="Accompagnement" text2="Parcoursup" />
    <p className="text-base md:text-lg my-5">
      Module dédié aux élèves de terminale
    </p>

    <ul className="leading-7 md:leading-10 mb-5 space-y-2">
      <li>
        <Coche text3="Aide aux choix des voeux en fonction du profil et du dossier scolaire (top 3 + alternatives)" />
      </li>
      <li>
        <Coche text3="Aide à la rédaction des lettres de motivation et du dossier extra-scolaire" />
      </li>
      <li>
        <Coche text3="Préparation aux entretiens de motivation" />
      </li>
    </ul>

    {/* Bouton inchangé */}
    <Button text="En savoir plus " icons={true} />
  </div>
</div>

{/* Rencontrez nos conseillers */}


<div className="flex  justify-center gap-10  p-10  bg-jauneOr/5 flex-wrap">
  {/* Texte et liste */}
  <div className="w-full lg:w-7/12  space-y-4">
    <Title text1="Rencontrez " text2="nos conseillers" />
    <p className="text-base md:text-lg my-5">
      Nos Valeurs : écoute, neutralité, bienveillance : c'est la promesse de nos conseillers.
    </p>

    <ul className="my-5 space-y-4">
      <li>
        <Coche text2="Formation des conseillers certifiée Qualiopi" />
      </li>
      <li>
        <Coche text2='Notre expérience au coeur de notre méthode des "3P" (Personnalité, Parcours, Projet).' />
      </li>
      <li>
        <Coche text2="Mise à jour continue : maîtrise des dernières réformes (Parcoursup, filières émergentes, métiers de demain)." />
      </li>
      <li>
        <Coche text2="Expérience terrain : Des expertises complémentaires : méthodologie de travail, scolarité, troubles des apprentissages, gestion du stress." />
      </li>
    </ul>

    {/* Bouton inchangé */}
    <Button text="Trouvez un conseiller" />
  </div>

  {/* Composant profil */}
  <div className="w-full lg:w-auto flex justify-center items-center">
    <InfoProfile />
  </div>
</div>


{/* nos chiffre clés */}



<div className="bg-blue text-white p-10 my-20">
  <h4 className="font-dmserif text-center text-3xl md:text-4xl mb-10">
    Nos chiffres clés
  </h4>

  <ul className="flex flex-wrap justify-evenly items-start gap-10">
    <li className="flex flex-col items-center text-center max-w-[160px]">
      <img src="/photo7.png" alt="Icone expérience" className="mb-4" />
      <span className="text-jauneOr font-dmserif text-3xl my-2">+10 ans</span>
      <span className="text-xs">D'expérience dans l'orientation scolaire</span>
    </li>

    <li className="flex flex-col items-center text-center max-w-[160px]">
      <img src="/photo8.png" alt="Icone familles" className="mb-4" />
      <span className="text-jauneOr font-dmserif text-3xl my-2">+2 500</span>
      <span className="text-xs">Familles accompagnées depuis 2015</span>
    </li>

    <li className="flex flex-col items-center text-center max-w-[160px]">
      <img src="/photo9.png" alt="Icone satisfaction" className="mb-4" />
      <span className="text-jauneOr font-dmserif text-3xl my-2">94%</span>
      <span className="text-xs">Taux de satisfaction auprès des clients</span>
    </li>

    <li className="flex flex-col items-center text-center max-w-[160px]">
      <img src="/photo10.png" alt="Icone élèves" className="mb-4" />
      <span className="text-jauneOr font-dmserif text-3xl my-2">500</span>
      <span className="text-xs">Élèves suivis en 2024</span>
    </li>

    <li className="flex flex-col items-center text-center max-w-[160px]">
      <img src="/photo11.png" alt="Icone formation" className="mb-4" />
      <span className="text-jauneOr font-dmserif text-3xl my-2">100%</span>
      <span className="text-xs">
        De nos conseillers ont suivi notre formation certifiée Qualiopi
      </span>
    </li>
  </ul>
</div>







{/* Temoignage d'anciens élèves */}

<div className="my-20">
  <p className="text-center leading-10">  
    <Title text1="Témoignage" text2="d'anciens élèves" />
    <span className="font-montserrat font-semibold" > Ils ont réussi grâce à leur accompagnement avec Prometheor :</span>
</p>
<Temoignage/>
</div>

{/* Webinaire & Blog */}


<div className=" max-[1000px]:space-y-10  max-[1000px]:flex-wrap max-[1000px]:justify-center  flex justify-between items-center px-20 py-16 bg-jauneOr/15 ">

<div className="  ">
  <div className=" max-[1000px]:flex max-[1000px]:flex-col  size-full ">
 <Title text1="Webinars " text2="& Blog"/>
<button className=" text-white  max-sm:text-xs  block mb-5 mt-7   bg-jauneOr py-4 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
            Decouvrir le blog 
            <HiArrowRight className="font-semibold text-xl ml-2  inline "/>
      </button>

      <button className=" text-white block  max-sm:text-xs   bg-jauneOr py-4 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
            Decouvir les Webinars
            <HiArrowRight className="font-semibold text-xl ml-2  inline "/>
      </button>
  </div>

</div>
  



<div className="flex max-sm:flex-col   items-center gap-5">



<div className="max-[730px]:grid    max-[730px]:grid-cols-1 max-[730px]:justify-center  max-[730px]:flex-wrap size-full grid grid-cols-2 gap-5">
<DivWebinaire/>
<DivWebinaire/>
<DivWebinaire/>
<DivWebinaire/>
  </div>

  <div className=" flex max-sm:flex-row  max-[730px]:hi flex-col items-center gap-5">
     <IoIosArrowDown className="border rotate-180 text-3xl p-1 cursor-pointer rounded-full text-gray-400 border-gray-400" />
     <IoIosArrowDown className="border text-3xl p-1 cursor-pointer rounded-full text-blue border-blue" />
  </div>
</div>


</div> 



{/*  Nos partenaire de confiance */}



<div className="flex  max-[900px]:flex-col max-[900px]:items-center justify-center gap-10 my-20 px-6 md:px-20">
  
  {/* Image */}
  <div className="w-full md:w-[400px] h-[300px] flex justify-center">
    <img src="/photo12.png" alt="Partenaires" className="object-contain w-full h-full" />
  </div>

  {/* Texte */}
  <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-4">
    <Title text1="Nos" text2="partenaires de confiance" />
    <p className="text-xs text-jauneOr">
      Pour vous garantir un accompagnement complet et rigoureux, Prometheor collabore avec :
    </p>
    <p className="text-sm md:text-base">
      Afin d’offrir à chaque jeune un accompagnement complet, nous collaborons avec des partenaires de confiance tels qu’Anacours (soutien scolaire), Unisco (orientation et projets éducatifs) et SupÉtudes (accompagnement pour les études à l’international, notamment au Canada).
    </p>
    <p className="text-sm md:text-base">
      Grâce à cette complémentarité, nous proposons des solutions sur mesure, alliant suivi pédagogique, accompagnement personnalisé et ouverture vers l’étranger, pour guider chaque parcours vers la réussite.
    </p>
  </div>

</div>


{/* section  pret a passe a l'etape suivante */}
   <div className=" pl-20  max-sm:pl-5 place-content-center bg-footer my-10 h-[500px] bg-no-repeat bg-cover bg-center">
           <div className=" border flex flex-col justify-center items-start  space-y-4  max-[955px]:w-3/5 max-[550px]:w-4/5 max-[550px]:  w-2/5  py-5 px-10 bg-white/50 rounded-xl">
           <h2 className="max-xl:text-4xl max-[680px]:text-2xl  font-dmserif text-5xl text-blue "> Prêt à passer à l’étape suivante ?</h2>
           <p className=" max-xl:text-sm    font-lato ">Choisissez dès maintenant l’un de nos conseillers pour définir ensemble la formule la plus adaptée.</p>
           <p className="max-xl:text-sm  font-lato ">Prendre un rendez-vous :</p>
           <Button text="Trouvez un conseiller" icons={true} />

           </div>
  </div> 



    </div>


  )
}
