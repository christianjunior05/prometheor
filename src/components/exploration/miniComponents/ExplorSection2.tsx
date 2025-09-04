import Title from "../../Homepage/miniComponents/Title";
import Coche from "../../Homepage/miniComponents/Coche";
import ListElement from "./ListElement";


const  ExplorSection=()=> {
    return ( 
        <div className="flex items-center justify-center gap-10 my-6 mx-20">


    <div className="space-y-5 w-7/12 ">
  <Title
    text1="objectif du"
    text2="pack exploration"
    text3="(490)"

    />
    <p className="text-blue font-lato "> Aider votre enfant à y voir clair dans ses options scolaires et professionnelles, en identifiant ses atouts, ses centres d’intérêt et les pistes d’orientation les plus cohérentes avec son profil</p>
    <span className="text-jauneOr block ">un accompagnement en 3 étapes :</span>

    <div className="space-y-5">
        
        <div className="space-y-4 text-sm">
            <ul><Coche text3="1. Séance repère"/></ul>

            <div>
       <span>Écoute des besoins et questionnements de votre enfant</span>
   <ul>
    <ListElement text="Bilan de sa scolarité, ses difficultés, son organisation de travail" />
    <ListElement text="Réponses aux questions de l’élève et/ou des parents" />
          
   </ul>
            </div>
   
        </div>

         <div className="space-y-4 text-sm">
            <ul><Coche text3="2. Séance exploration"/></ul>
            
   <ul>

      <ListElement text="Temps d'échanges avec le conseiller" />
      <ListElement text="Passation de tests psychométriques" />
      <ListElement text="Travail exploratoire  sur des exercices de connaissance de soi" />
      <ListElement text="Travail approfondi sur la connaissance de soi" />
           
  	
   </ul>
        </div>


         <div className="space-y-4 text-sm">
            <ul><Coche text3="3. Séance bilan"/></ul>
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
            <ul><Coche text3="1. Séance bilan"/></ul>

            <div>
       <span>Remis d'une synthèse personnalisée</span>
   <ul>
    <ListElement text="Propositions de secteurs d'activité adaptés au profil de l’élève" />
    <ListElement text="Mise en place d’un plan d’actions :" />
    <ListElement text="Choix des enseignements de spécialité" />
    <ListElement text="Orientation vers une filière adaptée" />
    <ListElement text="Activités extrascolaires à privilégier" />
    <ListElement text=" Premières pistes d'établissements adaptés" />	 
   </ul>
            </div>
   
        </div>
    </div>

    </div>

    <div className="w-[495x] h-[500px] "><img src="/explorsection2.jpg" alt="" className="size-full" /></div>

</div>
     );
}

export default ExplorSection;