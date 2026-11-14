"use client";

import { useEffect, useRef, useState } from "react";

export default function Gate({ hero, children }) {
  const [open, setOpen] = useState(false);
  const titlePage = useRef(null);

  useEffect(() => {
    if (open) titlePage.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <>
      <header className="book-stage" data-open={open}>
        <div className="book">
          <div className="title-page" ref={titlePage} tabIndex={-1} inert={!open}>
            <div className="title-page-copy">
              {hero}
              <a className="book-link" href="#invitation-details">Event details <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="book-cover" inert={open}>
            <div className="cover-front">
              <div className="cover-border" aria-hidden="true" />
              <span className="bangle-mark" aria-hidden="true"><i /><i /><i /></span>
              <h2 lang="ml" className="ml cover-title">വളകാപ്പ്</h2>
              <p className="cover-names">Arju &amp; Juhi</p>
              <button className="open-book" type="button" aria-expanded={open} aria-controls="invitation-details" onClick={() => setOpen(true)}>
                Open invitation <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="cover-back" aria-hidden="true" />
          </div>
        </div>
      </header>
      <div id="invitation-details" hidden={!open}>{open && children}</div>
    </>
  );
}
