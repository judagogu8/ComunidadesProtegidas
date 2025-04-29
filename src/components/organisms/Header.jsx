import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import '../../assets/styles/organisms/Header.css';

function Header({ activeTab, scrollToSection, isNavOpen, toggleNav }) {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-wrapper">
          <Logo className="logo" />
        </div>
        <h1 className="company-name">Comunidades Protegidas</h1>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
        <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <NavItem
            label="Inicio"
            sectionId="inicio"
            tabName="inicio"
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label="Servicios"
            sectionId="servicios"
            tabName="servicios"
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label="Cómo Funciona"
            sectionId="como-funciona"
            tabName="como-funciona"
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label="Contacto"
            sectionId="contacto"
            tabName="contacto"
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;