import ButtonStar from "@components/buttons/ButtonStar.jsx";

const ButtonDownloadCV = () => {
  const cv_path = "/doc/resume.pdf";

  const handleDownloadClick = () => {
    console.log("Clicked");
    window.open(cv_path, "_blank");
  };

  return <ButtonStar onClick={handleDownloadClick} btn_text="Download Cv" />;
};

export default ButtonDownloadCV;
