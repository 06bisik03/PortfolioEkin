import SiteHeader from "./Components/SiteHeader";

const NotFoundPage = () => (
  <div className="not-found-page">
    <SiteHeader />
    <main>
      <div className="not-found-code" aria-hidden="true">404</div>
      <div className="not-found-copy">
        <p className="eyebrow">A beautiful wrong turn</p>
        <h1>This page has<br /><em>left the room.</em></h1>
        <p>The address may have changed, but the way back is simple.</p>
        <a className="button button-primary" href="/">Return home <span>↖</span></a>
      </div>
    </main>
  </div>
);

export default NotFoundPage;
