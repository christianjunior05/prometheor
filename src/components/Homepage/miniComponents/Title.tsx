type Typage = {
  text1: string;
  text2: string;
  text3?: string;
};

const Title = ({ text1, text2, text3 }: Typage) => {
  return (
    <h2 className="text-blue font-lato font-dmserif  text-4xl max-md:text-center  ">
      {" "}
      {text1} <span className="text-jauneOr"> {text2} </span> {text3}{" "}
    </h2>
  );
};

export default Title;
