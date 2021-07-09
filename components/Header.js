import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>FullStack</span> Project
      </h1>
      <p className={headerStyles.description}>Gilad Dekel</p>
    </div>
  );
}

export default Header
