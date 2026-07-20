import { useLocation } from "react-router-dom";
import { localizedPath, useLanguage } from "../i18n";

const SiteFooter = () => {
  const { pathname } = useLocation();
  const { language, t } = useLanguage();
  const homePath = localizedPath("/", language);
  const topPath = pathname === "/" ? "#home" : localizedPath("/", language, "#home");

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href={homePath}>BEI</a>
        <p>{t.footer.lineOne}<br />{t.footer.lineTwo}</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/barisekinisik/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/06bisik03" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://drive.google.com/file/d/1LMTPv6QnJopfFqu2RvN5NLa7L2CfBIkp/view?usp=sharing" target="_blank" rel="noreferrer">{t.footer.cv} ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Baris Ekin Isik</span>
        <span>{t.footer.location}</span>
        <a href={topPath}>{t.footer.backToTop}</a>
      </div>
    </footer>
  );
};

export default SiteFooter;
