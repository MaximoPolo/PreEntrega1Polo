import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
  const clickEnComponentes = () => {
    console.log('Hiciste click en Componentes');
  };

  const clickEnPerifericos = () => {
    console.log('Hiciste click en Perifericos');
  };

  const clickEnPrearmados = () => {
    console.log('Hiciste click en Prearmados');
  };

  return (
    <header className="allNav">
      <h1 className="H1">Mi Tienda</h1>
      <nav className="barra">
        <ButtonComponent nombre="Componentes" callback={clickEnComponentes} />
        <ButtonComponent nombre="Perifericos" callback={clickEnPerifericos} />
        <ButtonComponent nombre="Prearmados" callback={clickEnPrearmados} />
      </nav>
      <CartWidget />
    </header>
  );
}
