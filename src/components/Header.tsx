interface HeaderProps {
  isReduced: boolean;
  onClick: () => void;
}

function Header({ isReduced, onClick }: HeaderProps) {
  return (
    <>
      <header className={isReduced ? "header h-reduced" : "header"}>
        <button id="btn" onClick={onClick}>
          Ok
        </button>
      </header>
    </>
  );
}

export default Header;
