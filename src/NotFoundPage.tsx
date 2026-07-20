import SiteHeader from "./Components/SiteHeader";
import { localizedPath, useLanguage } from "./i18n";

const NotFoundPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="not-found-page">
      <SiteHeader />
      <main>
        <div className="not-found-code" aria-hidden="true">404</div>
        <div className="not-found-copy">
          <p className="eyebrow">{t.notFound.eyebrow}</p>
          <h1>{t.notFound.titleLead}<br /><em>{t.notFound.titleAccent}</em></h1>
          <p>{t.notFound.description}</p>
          <a className="button button-primary" href={localizedPath("/", language)}>
            {t.notFound.action} <span>↖</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
