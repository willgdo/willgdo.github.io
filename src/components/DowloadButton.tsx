interface DowloadButtonProps {
  isMinimized: boolean;
}

function DowloadButton({ isMinimized }: DowloadButtonProps) {
  return (
    <a
      className={`${isMinimized ? "btn-download" : "hidden"}`}
      href="./assets/cv_WillianOliveira.pdf"
      download
    >
      <img src="./icons/download.png" alt="download CV" />
      <span>Baixar CV</span>
    </a>
  );
}

export default DowloadButton;
