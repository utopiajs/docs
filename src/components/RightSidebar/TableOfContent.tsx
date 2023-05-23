import type { FC } from 'react';
import type { TocItem } from '../../utils/generateToc';
import { useState, useRef } from 'react';
import { unescape } from '../../utils/html-entities';
import { useActiveAnchor } from './useActiveAnchor';
import './TableOfContent.css';

interface IProps {
  toc: TocItem[];
  labels: {
    onThisPage: string;
  };
}

const TableOfContents = ({ toc = [], labels }: IProps): FC => {
  const [currentHeading, setCurrentHeading] = useState({
    slug: toc[0]?.slug,
    text: toc[0]?.text,
  });
  const containerRef = useRef(null);
  const markerRef = useRef(null);

  useActiveAnchor(containerRef, markerRef);
  const onThisPageID = 'on-this-page-heading';

  const onLinkClick = (e) => {
    setCurrentHeading({
      slug: e.currentTarget.getAttribute('href')!.replace('#', ''),
      text: e.currentTarget.textContent || '',
    });
  };

  const TableOfContentsItem: FC = ({ heading }: { heading: TocItem }) => {
    const { depth, slug, text, children } = heading;
    return (
      <li>
        <a
          className={`toc-header-link depth-${depth} ${currentHeading.slug === slug ? 'current-header-link' : ''}`.trim()}
          href={`#${slug}`}
          onClick={onLinkClick}
        >
          {unescape(text)}
        </a>
        {children.length > 0 ? (
          <ul>
            {children.map((heading) => (
              <TableOfContentsItem key={heading.slug} heading={heading} />
            ))}
          </ul>
        ) : null}
      </li>
    );
  };

  return (
    <div className="docs-outline-wrap" ref={containerRef}>
      <div className="outline-marker-placeholder"></div>
      <div className="outline-content">
        <div className="outline-marker" ref={markerRef}></div>
        <h2 className="toc-heading" id={onThisPageID}>
          {labels.onThisPage}
        </h2>
        <ul className="toc-root">
          {toc.map((heading) => (
            <TableOfContentsItem key={heading.slug} heading={heading} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
