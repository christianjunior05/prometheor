

import Button from "../miniComponents/Button"
import Title from "../miniComponents/Title"
import { TbPointFilled } from "react-icons/tb";
import Coche from "../miniComponents/Coche";
import EnsavoirPlus from "../miniComponents/EnsavoirPlus";
import InfoProfile from "../miniComponents/InfoProfile";
import Temoignage from "../miniComponents/Temoignage";
// tout ce qui est ici concerne la page Homapage
export default function Homepage() {
  return (
    <div>

{/*  entete de la page Homepage */}
    <div className=" pl-20 place-content-center bg-header h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="  text-white   font-dmserif   ">
          <h1 className="text-5xl my-4 ">La promesse d'une orientation choisie</h1>
          <p className="text-xl my-6">Donnez à votre enfant les clés de sa réussite, en toute confiance. </p>
         <Button text=" Découvrir nos offres"  icons={true} />
        </div>
    </div>

{/*  section qui somme nous */}
    <div className=" flex justify-center items-center my-10 ">


      <div className="font-lato w-1/2 h-[350px] flex flex-col justify-between items-start  ">
        <Title text1="Qui " text2=" sommes nous "  text3="?"/>
        <p className="w-9/12 ">Premier réseau national de conseillers d'orientation scolaire indépendants, nous accompagnons les collégiens, lycéens et étudiants dans leurs choix d’orientation.</p>
        <ul  className="leading-7  text-jauneOr ml-2 " >
          <li className=""> <TbPointFilled className="inline"/> <span> Environnement scolaire (méthodologie, handicap)</span> </li>
          <li className=""> <TbPointFilled className="inline"/> <span>Notre engagement qualité  (Ecoute, neutralité, bienveillance)</span> </li>
          <li className=""> <TbPointFilled className="inline"/> <span> Formation de conseiller d'orientation certifiée Qualiopi </span> </li>

        </ul>
        <Button text="Nous decouvrir" icons={true} />
      </div>

      <div className="border h-[450px] ">
       <img src="/QuiSommesNous.png" alt="plusieur personne entrain assis entrain d'echanger" className="size-full object-contain" />
      </div>

    </div>


{/* pour qui ? */}

<div className="flex h-[400px] bg-jauneOr/15  justify-center items-center gap-40 ">
  <div className="h-80">
    <img src="/photo1.png" alt=" un groupe d'amis en pause photo" className=" size-full" />
  </div>
  <div>
    <Title text1="pour" text2="qui ?"   />
    <ul className=" leading-7 py-5">
      <Coche text="Les collégiens( à partir de la classe de 4 ème ) "/>
      <Coche text="Lycéens "/>
      <Coche text="Etudiants"/>
    </ul>
    
  </div>
</div>


{/* Nos solution d'orientation */}

<div className="   mt-20 mb-40" >
  <div className="text-center  ">
  <Title text1="Nos solutions" text2="d'orientation"/>
<p className="text-blue mt-10 mb-14" > Prometheor propose différents packs d'orientation pensés pour répondre à votre besoin:</p>

 <div className=" flex justify-center gap-10 flex-wrap  ">
  <EnsavoirPlus/>
  <EnsavoirPlus/>
  <EnsavoirPlus/>
  <div>

  </div>
 </div>
  </div>
</div>

{/* Parck Personnalisé  */}

<div className=" flex px-10  justify-center items-center gap-10 bg-jauneOr/15 ">
  <div className="  h-72   my-10 ">
    <img src="/photo4.png" alt="" className=" size-full object-contain" />
  </div>
  <div className="  my-5  w-7/12 ">
    <Title text1="Pack Personalisé" text2="(100% SUR Mesure)" />
  <p className="my-5">Chaque enfant est unique, avec ses forces, ses aspirations et parfois des besoins particuliers. </p>
  <p className="mb-5">Chez Prometheor, nous co-construisons un accompagnement  adapté :  Rendez-vous de cadrage, mise en place d'une solution adaptée avec un suivi évolutif.</p>
   <Button text="Contactez un conseiller" icons={true} />
  </div>
</div>


{/* Accompagnement Parcoursup */}

<div className="flex items-center justify-center gap-10 pl-32 mb-5 ">
  <div className="size-[600px]  "><img className=" size-full object-contain" src="/photo5.jpg" alt="deux personne assisent entrain d'echanger  " /></div>
  <div className=" w-full  ">
    <Title text1="Accompagnement" text2="Parcourirsup"/>
    <p className="my-5">Module dédié aux élèves de terminale</p>
    <div>

      <ul className="leading-10 mb-5">
      <li><Coche text3="Aide aux choix des voeux en fonction du profil et du dossier scolaire (top 3 + alternatives)" /></li>
      <li><Coche text3=" Aide à la rédaction des lettres de motivation et du dossier extra-scolaire" /></li>
      <li><Coche text3="Préparation aux entretiens de motivation" /></li>

      </ul>

      <Button text="En savoir plus" icons={true}  />
      
    </div>
  </div>
</div>


{/* Rencontrez nos conseillers */}
<div className="flex justify-center gap-20 flex-wrap  p-20 bg-jauneOr/15   ">
  <div className=" w-7/12 ">
    <Title text1="Rencontrez " text2="nos conseillers"/>
    <p className="my-5">Nos Valeurs : écoute, neutralité, bienveillance: c'est la promesse de nos conseillers.</p>
    <ul className=" my-5 ">

      <li className="mb-5"><Coche text2=" Formation des conseillers certifiée Qualiopi" /></li>
      <li className="mb-5"><Coche text2='Notre expérience au coeur de notre méthode des "3P" (Personnalité, Parcours, Projet).' /></li>
       <li className="mb-5"><Coche text2="Mise à jour continue : maîtrise des dernières réformes (Parcoursup, filières émergentes, métiers de demain)." /></li>
       <li className="mb-5"><Coche text2="Expérience terrain : Des expertises complémentaires : méthodologie de travail, scolarité, troubles des apprentissages, gestion du stress." /></li>
    </ul>
      <Button text="trouvez un conseiller"  />
  </div>
  <InfoProfile/>
</div>

{/* nos chiffre clés */}

<div className="bg-blue text-white p-10 my-20">
  <h4 className="font-dmserif text-center text-4xl mb-10">Nos chiffres clés</h4>


    <ul className="flex justify-evenly items-baseline flex-wrap ">
      <li className="flex flex-col items-center justify-center  ">
        <img src="/photo7.png" alt="" />
        <span className="text-jauneOr font-dmserif text-3xl my-4"> +10 ans </span>
        <span className="text-xs">D'expériences dans l'orientation scolaire </span>
      </li>
          <li className="flex flex-col items-center  ">
        <img src="/photo8.png" alt="" />
        <span className="text-jauneOr font-dmserif text-3xl my-4 "> + 2 500 </span>
        <span className="text-xs">Familles Acompagner depuis 2015 </span>
      </li>
          <li className="flex flex-col items-center  ">
        <img src="/photo9.png" alt="" />
        <span className="text-jauneOr font-dmserif text-3xl my-4"> 94% </span>
        <span className="text-xs">De taux de satisfaction auprès des clients </span>
      </li>
          <li className="flex flex-col items-center  ">
        <img src="/photo10.png" alt="" />
        <span className="text-jauneOr font-dmserif text-3xl my-4"> 500 </span>
        <span className="text-xs " >Élèves suivis en 2024  </span>
      </li>
          <li className="flex flex-col items-center justify-center  ">
        <img src="/photo11.png" alt="" />
        <span className="text-jauneOr font-dmserif text-3xl my-4 "> 100% </span>
        <span className="text-xs">De nos conseillers ont suivi notre  </span>
        <span className="text-xs" >formation certifiée Qualiopi</span>
      </li>
    </ul>
 
</div>


{/* Temoignage d'anciens élèves */}

<div>
  <p className="text-center leading-10">  
    <Title text1="Témoignage" text2="d'anciens élèves" />
    <span className="font-montserrat font-semibold" > Ils ont réussi grâce à leur accompagnement avec Prometheor :</span>
</p>
<Temoignage/>
</div>

{/* section  pret a passe a l'etape suivante */}
  <div className=" pl-20 place-content-center bg-footer my-10 h-[500px] bg-no-repeat bg-cover bg-center">
           <div className="  mb-5  w-2/5 h-80  py-5 px-10 bg-white/50 rounded-xl">
           <h2 className=" mb-5 font-dmserif text-5xl text-blue "> Prêt à passer à l’étape suivante ?</h2>
           <p className=" mb-5 font-lato ">Choisissez dès maintenant l’un de nos conseillers pour définir ensemble la formule la plus adaptée.</p>
           <p className=" mb-5 font-lato ">Prendre un rendez-vous :</p>
           <Button text="Trouvez un conseiller" icons={true} />

           </div>
  </div>




    </div>


  )
}
