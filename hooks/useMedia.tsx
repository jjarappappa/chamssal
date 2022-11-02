import { useEffect, useState } from "react";

/**
 * Modified from link below
 * @see https://observablehq.com/@werehamster/avoiding-hydration-mismatch-when-using-react-hooks
 * @param mediaQueryString
 * @returns {unknown}
 */
export default function useMedia(mediaQueryString: string) {
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    console.log(mediaQueryList);
    const listener = () => setMatches(mediaQueryList.matches === true ? 1 : -1);
    listener();
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQueryString]);

  return matches;
}
