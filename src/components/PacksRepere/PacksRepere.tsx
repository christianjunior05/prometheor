import Section1 from "./sectionComponents/Section1";
import Section2 from "./sectionComponents/Section2";
import Section3 from "./sectionComponents/Section3";
import Section4 from "./sectionComponents/Section4";
import Section5 from "./sectionComponents/Section5";
import Section6 from "./sectionComponents/Section6";
import Header from "../Header";
const PacksRepere = () =>{
    return ( 
        <div>



    <Header
    homepage={false}
    packsrepere={true}
    exploration={false}
    trajectoire={false}

    />
  <Section1
alt="deux dame"
image="section1.png"
paragraphe1="Vous êtes parents et vous vous posez des questions ..."
paragraphe2="... sur le choix de filière de votre enfant ?  Sur une éventuelle réorientation ? Le Pack Repère est conçu pour vous apporter un premier avis éclairé ."
list1="Adapté aux collégiens qui veulent valider leur choix de section( générale, technologique ou professionnelle )."
list2="Lycéens: confirmer ses spécialités et avoir des réponses à vos questions"
list3="Étudiants :réfléchir à sa poursuite d'études ou changer de filière"
textBlue="À qui s’adresse"
textOrange="ce pack ?"
textbutton="Trouver un conseiller "
/>
  
  <Section2/>
  <Section3
  text1="À l'issue de la séance :"
  text2="Une vision plus structurée"
  text3="Des recommandations personnalisées"
  text4="Un plan d'actions et des repères pour avancer sereinement"
  textButton="contact un conseiller"
  icons={true}
  image="bg-section3"
  />
  <Section4
  
     img1={ false}
    img2={ false}
    img3={ false}
    commentaire1="Accompagnement très réussi auprès de mes fils. Sonia est une personne très qualifiée, à l'écoute de chaque élève avec des conseils très pertinents. Elle est également très disponible ! Je recommande vivement."
    commentaire2="Juliette Lacoste est un superbe professeur qui m’a énormément aidé lors de mon parcours scolaire et dans la vie active pour ma recherche d’emploi et dans mes projets personnels. Je la recommande à 100% !Elle est Géniale, elle est très pédagogue et très patiente !" 
    commentaire3="Ma fille a été suivie par Virginie qui a analysé ses qualités et appétences personnelles et professionnelles. Nous avons eu un accès dédié sur une page web. Elle lui a ensuite prodigué les meilleurs conseils et propositions d'établissements. Prometheor est une solution que je recommande vivement aux parents et élèves en phase d'orientation."
    profession1="Élève de terminale"  
    profession2= "classe de terminale"
    profession3="Élève de terminale"
    nom1="Charles"
    nom2="Léa"
    nom3="Jules"
    dimenssion="size-80"
  />
  
  {/* section 12 de la home page réutilisé */}
  <Section5
  Title="Prêt à avancer ?"
  text="Contactez un conseiller pour un premier échange téléphonique :"
   textbutton="Trouvez un conseiller"
   image="bg-section5Repere"


  />
  <Section6

  image="section6.jpg"
  text1="Découvrez "
  text2="nos autres packs"
  textbutton1="Pack exploration"
  textbutton2="Pack exploration"
  icon={true}
  />
        </div>
     );
}

export default PacksRepere ;