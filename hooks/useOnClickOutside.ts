import { useEffect } from "react";
const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: () => void
) => {
  useEffect(
    () => {
      const listener = (event: MouseEvent): any => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("mousedown", listener);
      document.addEventListener("mouseup", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("mouseup", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
export default useOnClickOutside;
