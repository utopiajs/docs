import { useEffect } from 'react';

const pageOffset = 46;
function getAnchorTop(anchor: HTMLAnchorElement): number {
  return anchor.parentElement!.offsetTop - pageOffset - 15;
}

function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement | undefined
): [boolean, string | null] {
  const scrollTop = window.scrollY;

  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }

  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }

  return [false, null];
}

function throttleAndDebounce(fn: () => void, delay: number): () => void {
  let timeout: any;
  let called = false;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}

let prevActiveLink: HTMLAnchorElement | null = null;

function useActiveAnchor(container, marker) {
  const setActiveLink = (): void => {
    const links = [].slice.call(container.current.querySelectorAll('.toc-header-link')) as HTMLAnchorElement[];

    const anchors = [].slice
      .call(document.querySelectorAll('.astro-docs .header-anchor'))
      .filter((anchor: HTMLAnchorElement) =>
        links.some((link) => link.hash === anchor.hash && anchor.offsetParent !== null)
      ) as HTMLAnchorElement[];

    // page bottom - highlight last one
    if (anchors.length && window.scrollY + window.innerHeight >= document.body.offsetHeight - 1) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];

      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);

      if (isActive) {
        history.replaceState(null, document.title, hash ? hash : ' ');
        activateLink(hash);
        return;
      }
    }
  };

  const activateLink = (hash: string | null): void => {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('current-header-link');
    }

    const activeLink = (prevActiveLink =
      hash == null ? null : (container.current.querySelector(`a[href="${decodeURIComponent(hash)}"]`) as HTMLAnchorElement));
      if (activeLink) {
      activeLink.classList.add('current-header-link');
      marker.current.style.opacity = '1';
      marker.current.style.top = activeLink.offsetTop + 4 + 'px';
    } else {
      marker.current.style.opacity = '0';
      marker.current.style.top = '25px';
    }
  };

  const onScroll = throttleAndDebounce(setActiveLink, 100);

  useEffect(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener('scroll', onScroll);
  }, []);
}

export { useActiveAnchor };
