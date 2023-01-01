import { RefObject, useEffect, useRef } from 'react';
import { addEventListener, removeEventListener } from '../utils';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickOutside = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickOutside: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickOutside);

  useEffect(() => {
    savedCallback.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      addEventListener(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        removeEventListener(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export { useClickOutside };
