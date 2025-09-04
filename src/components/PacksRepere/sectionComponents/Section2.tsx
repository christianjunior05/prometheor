


import Title from "../../Homepage/miniComponents/Title";
import Coche from "../../Homepage/miniComponents/Coche";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 my-20 px-6 md:px-0">
      {/* Texte */}
      <div className="w-full md:w-1/2 space-y-4">
        <Title text1="Objectif du" text2="parck repère" text3="(150€ )" />
        <p className="text-blue font-medium text-sm md:text-base">
          Accompagner un élève qui s’interroge sur son orientation ou souhaite
          confirmer un choix de filière, en répondant à ses questions et en lui
          présentant des pistes concrètes.
        </p>
        <ul className="space-y-3 md:space-y-4">
          <Coche text3="1. séance avec un conseiller d’orientation." />
          <Coche text3="2. Écoute active des besoins et des questionnements de l’élève." />
          <Coche text3="3. Réponses aux questions de l’élève " />
          <Coche text3="4. compte rendu de la séance" />
        </ul>
      </div>

      {/* Image */}
      <div className="w-full md:w-96 h-64 md:h-auto rounded-lg">
        <img
          src="/section2.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Section2;
