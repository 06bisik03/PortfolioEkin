import { useEffect, RefObject } from 'react';

const useIntersectionObserver = (
  ref: RefObject<Element>,
  callback: (visible: boolean) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback(true);
          observer.disconnect();
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, callback, options]);
};

export default useIntersectionObserver;
