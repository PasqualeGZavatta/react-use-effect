import ThemeToggle from "../layout/ui/ThemeToggle";

export default function Header() {
  return (
    <div className="">
      <header className="d-flex justify-content-between m-2">
        <h1>Esercitazione per 01/10/26</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}
