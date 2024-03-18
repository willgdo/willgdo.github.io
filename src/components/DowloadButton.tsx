interface DowloadButtonProps {
  isReduced: boolean;
}

function DowloadButton({ isReduced }: DowloadButtonProps) {
  return (
    <a
      className={`${isReduced ? "btn-download-cv" : "hidden"}`}
      href="./assets/cv_WillianOliveira.pdf"
      download
    >
      <img src="./icons/download.png" alt="download CV" />
      <span>Baixar CV</span>
    </a>
  );
}

export default DowloadButton;
