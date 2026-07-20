import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { localizedPath, useLanguage } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { hash: "about" },
  { hash: "expertise" },
  { hash: "work" },
  { hash: "story" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const { language, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const homeHref = (hash: string) =>
    pathname === "/" ? `#${hash}` : localizedPath("/", language, `#${hash}`);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="scroll-progress" aria-hidden="true" />
      <Link className="brand" to={localizedPath("/", language)} aria-label={t.header.homeLabel}>
        <span className="brand-mark">BEI</span>
        <span className="brand-name">Baris Ekin<br />Isik</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? t.header.close : t.header.menu}</span>
        <i aria-hidden="true" />
      </button>

      <nav id="site-navigation" className={menuOpen ? "is-open" : ""}>
        {navItems.map((item, index) => (
          <a key={item.hash} href={homeHref(item.hash)} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{t.header.nav[index]}
          </a>
        ))}
        <LanguageSwitcher />
        <Link
          className="nav-contact"
          to={localizedPath("/contact", language)}
          onClick={() => setMenuOpen(false)}
        >
          {t.header.contact} <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
};

export default SiteHeader;
