import React from "react";
import "./PageHero.css";

const PageHero = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="hero-content-wrapper">
          {breadcrumbs && (
            <nav className="breadcrumb-nav">
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {index > 0 && <span className="separator"> / </span>}
                  {crumb.link ? (
                    <a href={crumb.link}>{crumb.label}</a>
                  ) : (
                    <span className="current">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
