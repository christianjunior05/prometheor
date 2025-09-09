import { FaArrowRight } from "react-icons/fa";



const Concours = () => {
  return (
    <div className="min-h-screen">
    
      {/* Hero Section - Transformé en Tailwind CSS */}
  <header className="h-[400px] bg-trajectoireHeader gb-center bg-cover flex  items-center pl-10 bg-no-repeat ">
      <div className="space-y-3">
  <p className="text-4xl text-white font-dmserif">Préparez efficacement <span className="text-jauneOr " >vos concours et certifications post-bac</span> </p>
  <p className="text-xl text-white font-dmserif  " >Vous visez une école de commerce ou une école d’ingénieur après le bac ?</p>
  <p className="text-white  font-montserrat w-10/12 ">Vous souhaitez valoriser votre niveau en français ou en anglais avec une certification reconnue ?  <br/>  Nous vous proposons des stages de préparation ciblés, adaptés aux exigences des épreuves et aux profils des candidats.</p>
      </div>
     </header>

      {/* Section: Concours d'entrée en école de commerce */}
      <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
            <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/commerce.jpg"
                alt="Étudiants préparant concours commerce"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>
            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-blue font-lato ">
               Concours d'entrée  <span className="text-jauneOr "> en école de <br/> commerce post-bac</span>
              </h2>
              <p className="  ">
                Nos stages vous préparent aux épreuves écrites et orales des principaux concours :
                    
              </p>

              <p className="  w-full">
                <span className="text-jauneOr font-semibold ">Objectif :</span> s'entraîner sur les épreuves clés (logique, raisonnement, synthèse, anglais) 
               <br/> et développer une posture convaincante à l'oral.
                 </p>
              <ul className="space-y-3">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className="text-gray-600 text-sm font-medium ">
                    ACCES, SESAME
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className="text-gray-600 text-sm font-medium ">
                    Oraux de motivation des Bachelors et BBA (parcours hors concours commun)
                  </span>
                </li>
              </ul>

                     <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                        En savoir plus
                    </button>
           
            </div>
          </div>
      
      </section>

      {/* Section: Concours d'entrée en école d'ingénieur */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-400">Concours d'entrée</span> en école d'<span className="text-yellow-400">ingénieur post-bac</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous accompagnons les élèves souhaitant intégrer une école via les concours suivants :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) ou d'autres écoles sur dossier
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                <span className="text-yellow-400 font-semibold">Objectif :</span> consolider les acquis scientifiques, optimiser la gestion du temps et réussir les entretiens de motivation.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/45c4858ae07bf0aab2c507ef6cc8ec257a259ef3.jpg"
                alt="Étudiants préparant concours ingénieur"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

         <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
           
            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-jauneOr font-lato ">
               Concours d'entrée  <span className="text-blue "> en école<br/> d'ingénieur post-bac</span>
              </h2>
              <p className="  ">
                Nous accompagnons les élèves souhaitant intégrer une école via les concours suivants : 
                    
              </p>

                 <p className="  w-full">
                <span className="text-jauneOr font-semibold ">Objectif :</span> 
                 consolider les acquis scientifiques, optimiser la gestion du temps et réussir <br/> les entretiens de motivation.
              </p>
              <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className=" text-sm font-medium ">
                   Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
                 Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) <br/>  ou d’autres écoles sur dossier
                  </span>
                </li>
              </ul>

           
            </div>

             <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/ingenieur.jpg"
                alt="Étudiants préparant concours commerce"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>
          </div>
      
      </section>

      {/* Section: Préparations aux certifications */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/6f68e071cea952a95001bca9545ebdce79eb537d.jpg"
                alt="Étudiants préparant certifications"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-400">Préparations aux certifications</span> en langue et en <span className="text-yellow-400">expression écrite</span> : pour tous les âges
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Pour renforcer son dossier ou répondre aux attendus d'une formation, nous proposons des préparations aux :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Tests d'anglais (TOEIC®, IELTS®, CLOE)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Certificat Voltaire (maîtrise de l'orthographe et de l'expression écrite)
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
                Nos formations combinent :
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Des sessions en petits groupes, en présentiel ou à distance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Un accompagnement personnalisé
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheck className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Et l'accès à une plateforme de cours en ligne, pour s'entraîner et se perfectionner entre les séances (vidéos, exercices interactifs, fiches méthodes...)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Pour découvrir les programmes détaillés et les prochaines dates, accédez à nos stages de préparation.
              </p>
            </div>
          </div>
        </div>
      </section> */}

         <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
           

          <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/certificat.png"
                alt="Étudiants préparant une certification"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>

            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-blue font-lato ">
               Preparation   <span className="text-jauneOr ">aux certificat en <br /> langue et en expression </span>: pour <br /> tous les ages

              </h2>
              <p className="   ">
                Pour renforcer son dossier ou répondre aux attendus d’une formation, <br /> nous   proposons  des préparations aux:                    
              </p>

             <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className=" text-sm font-medium ">
                 Tests d’anglais (TOEIC®, IELTS®, CLOE)
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
              Certificat Voltaire (maîtrise de l’orthographe et de l’expression écrite)               
              </span>
                </li>
              </ul>
   
           
           <p>Nos formations combinent :</p>
              <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className="text-sm font-medium ">
                   Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
                 Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) <br/>  ou d’autres écoles sur dossier
                  </span>
                </li>
              </ul>

           <p>Pour découvrir les programmes détaillés et les prochaines dates :</p>


             <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                     Accéder aux stages de préparation  <FaArrowRight className="inline" />
                    </button>
            </div>

            
          </div>
      
      </section>

      {/* Section: Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Intéressé par nos <span className="text-yellow-400">stages</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Choisissez dès maintenant l'une de nos conseillères pour définir ensemble la formule la plus adaptée.
              </p>
              <p className="text-gray-600">
                Nos formations sont conçues pour répondre aux besoins spécifiques de chaque élève, 
                avec un accompagnement personnalisé et des méthodes éprouvées pour maximiser vos chances de réussite.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/85b777e62dcfdbbb49faf0a2366fce480e7ab670.jpg"
                alt="Étudiants en formation"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concours;

