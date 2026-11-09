interface DownloadButtonProps {
  isVisible: boolean;
}

export default function DownloadButton({ isVisible }: DownloadButtonProps) {
  if (!isVisible) return null;

  return (
    <a
      className="btn-download"
      href="./assets/cv_WillianOliveira_pt.pdf"
      download="CV_Willian_Oliveira.pdf"
      aria-label="Baixar currículo em formato PDF"
    >
      <img src="./icons/download.png" alt="" />
      <span>Baixar CV</span>
    </a>
  );
}
