import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const lister = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', lister);
    document.addEventListener('touchstart', lister);
    return () => {
      document.removeEventListener('mousedown', lister);
      document.removeEventListener('touchstart', lister);
    };
  }, [ref, handler]);
}
