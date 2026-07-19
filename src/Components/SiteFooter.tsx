const SiteFooter = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <a className="footer-brand" href="/">BEI</a>
      <p>Thoughtful systems.<br />Quietly bold experiences.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/barisekinisik/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/06bisik03" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1LMTPv6QnJopfFqu2RvN5NLa7L2CfBIkp/view?usp=sharing" target="_blank" rel="noreferrer">Curriculum Vitae ↗</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Baris Ekin Isik</span>
      <span>Aachen, Germany · 50.7753° N</span>
      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
);

export default SiteFooter;
