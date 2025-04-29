import '../../assets/styles/molecules/NavItem.css';

function NavItem({ label, sectionId, tabName, activeTab, scrollToSection }) {
  return (
    <li
      className={activeTab === tabName ? 'active' : ''}
      onClick={() => scrollToSection(sectionId, tabName)}
    >
      {label}
    </li>
  );
}

export default NavItem;