import Header from "../Header";
import Section1 from "../PacksRepere/sectionComponents/Section1";
import Section3 from "../PacksRepere/sectionComponents/Section3";
import Coche from "../Homepage/miniComponents/Coche";
import Title from "../Homepage/miniComponents/Title";
import ListElement from "../exploration/miniComponents/ListElement";
import Section4 from "../PacksRepere/sectionComponents/Section4";
import Section5 from "../PacksRepere/sectionComponents/Section5";
import Section6 from "../PacksRepere/sectionComponents/Section6";


const Trajectoire= ()=> {
    return (  

        <div>
  <Header
      homepage={false}
  packsrepere={false}
  exploration={false}
  trajectoire={true}
  />
<Section1
  image=""
  alt="image"
paragraphe1="Donnez à votre enfant les clés pour définir son projet et réussir Parcoursup avec confiance."
paragraphe2="... Le Pack Trajectoire  est conçu pour offrir un accompagnement complet et structuré, depuis la découverte du profil et des intérêts de votre enfant jusqu’à la sélection précise de formations et d’établissements. Un parcours en plusieurs étapes pour avancer avec confiance, clarté et des choix solides pour l’avenir."
textBlue="À qui s’adresse "
textOrange="ce pack ?"

list1="Lycéens : Définir et confirmer ses parcours d'orientation pour construire sa stratégie Parcoursup"
list2="Étudiants : valider ses choix de poursuite d'études"
textbutton="Trouver une conseillère"
/>

<div className="flex flex-col md:flex-row items-center justify-center gap-5 my-6 mx-5 md:mx-20">

  <div className="space-y-5 w-full md:w-9/12">
    <Title
      text1="Objectif du pack"
      text2="trajetctoire"
      text3="(690€)"
    />

    <p className="text-blue font-lato">
      Aider votre enfant à mieux se connaître, clarifier son projet, identifier les parcours qui lui correspondent et préparer Parcoursup avec sérénité
    </p>
    <span className="text-jauneOr block">un accompagnement en 5 étapes :</span>

    <div className="space-y-5">

      <div className="space-y-4 text-sm">
        <ul><Coche text3="1. Séance repère" /></ul>

        <div>
          <span>Écoute des besoins et questionnements de votre enfant</span>
          <ul>
            <ListElement text="Bilan de sa scolarité, ses difficultés, son organisation de travail" />
            <ListElement text="Réponses aux questions de l’élève et/ou des parents" />
          </ul>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="2. Séance exploration" /></ul>
        <ul>
          <ListElement text="Temps d'échanges avec le conseiller" />
          <ListElement text="Passation de tests psychométriques" />
          <ListElement text="Travail exploratoire  sur des exercices de connaissance de soi" />
          <ListElement text="Travail approfondi sur la connaissance de soi" />
        </ul>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="3. Séance bilan" /></ul>
        <div>
          <span>Remise d’une synthèse personnalisée</span>
          <ul>
            <ListElement text="Propositions de secteurs d'activité adaptés au profil de l’élève" />
            <ListElement text="Mise en place d’un plan d’actions :" />
            <ListElement text="Choix des enseignements de spécialité" />
            <ListElement text="Orientation vers une filière adaptée" />
            <ListElement text="Premières pistes d'établissements adaptés" />
          </ul>
        </div>
      </div>



      <div className="space-y-4 text-sm">
        <ul><Coche text3="4. Séance d'échange " /></ul>
        <ul>
          <ListElement text="Affinement et validation du projet professionnel" />
          <ListElement text="Discussion approfondie autour des choix envisagés" />
         
        </ul>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="5. Séance finale " /></ul>
        <ul className="">
          <ListElement text="Remise d'une synthèse personnalisée et complète" />
          <ListElement text="Sélection de formations et d’établissements correspondant aux objectifs fixés et au profil de votre enfant" />
         
        </ul>
      </div>
    </div>
  </div>

  <div className="w-full md:w-[495px] h-[300px] md:h-[500px]">
    <img src="/trajectoireSection2.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
  </div>

</div>


 <Section3
  text1="À l’issue du Pack Trajectoire, votre enfant aura ?"
  text2="Une meilleure connaissance de lui-même et de ses atouts."
  text3="Un projet professionnel affiné et validé"
  text4="Un choix d’études clair et une stratégie solide pour Parcoursup."
  textButton="Contacter un conseiller "
  icons={true}
  image="bg-trajectoireSection3"
  />

  <Section6

  image="photo4.png"
  text1="Besoin de personnalié "
  text2="votre accompagnement ?"
  textbutton1="Contacter un conseiller " 
 paragraphe1="Chaque enfant est unique, avec ses forces, ses aspirations et parfois des besoins particuliers."
 paragraphe2="Chez Prometheor, nous co-construisons un accompagnement  adapté :  Rendez-vous de cadrage, mise en place d'une solution adaptée avec un suivi évolutif."
  icon={true}

/>

  <Section4

  img1={true}
    img2={true}
    img3={true}
    commentaire1="Nous étions perdus entre la voie générale et la voie pro ; le Pack Repère nous a donné un éclairage limpide en une heure."
    commentaire2="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première." 
    commentaire3="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première."
    profession1="Parents de X"  
    profession2= "Parents de X"
    profession3="Parents de X"
    nom1="Mme et M. Lefevre, Bordeaux"
    nom2="Mme et M. Lefevre, Bordeaux"
    nom3="Mme et M. Lefevre, Bordeaux"
    dimenssion="w-80 h-60"
/>

 <Section5
  Title="Prêt à avancer ?"
  text="Contacter un conseiller pour un premier échange téléphonique :"
   textbutton="Trouver un conseiller"
   image="bg-trajectoireSection5"


  />
  <Section6

  image="photo5.jpg"
  text1="Découvrez "
  text2="nos autres packs"
  textbutton1=" Pack exploration "
  textbutton2="Pack repère "
  icon={true}
  />
        </div>
    );
}

export default Trajectoire ;