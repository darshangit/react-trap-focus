import React, { useEffect, useRef, useState } from "react";

const getEventKeyCode = (evt) => evt.keyCode;

const TAB_KEY = 9;

const focusTrap = (event, elements) => {
  if (elements?.length > 0) {
    const key = getEventKeyCode(event);
    const firstFocusableEl = elements[0];
    const lastFocusableEl = elements[elements.length - 1];

    if (key === TAB_KEY) {
      if (event.shiftKey) {
        if (document?.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        }
      } else if (document?.activeElement === lastFocusableEl) {
        event.preventDefault();
        firstFocusableEl.focus();
      }
    }
  }
};

const FocusTrap = ({ children, querySelector = '[role="button"]' }) => {
  const ref = useRef(null);
  const [allButtonEls, setAllElements] = useState([]);

  useEffect(() => {
    setAllElements(ref?.current?.querySelectorAll(querySelector));
  }, []);

  const onKeyDown = (event) => focusTrap(event, allButtonEls);

  return (
    <div ref={ref} onKeyDown={onKeyDown}>
      {children}
    </div>
  );
};

export { FocusTrap, focusTrap };
