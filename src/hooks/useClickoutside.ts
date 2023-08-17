"use client";
import { useEffect, RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
): void => {
  const handleClickOutside = (
    event: React.MouseEvent<Document, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;

    if (
      ref.current &&
      !ref.current.contains(target) &&
      !target.closest(".MuiAutocomplete-popper") &&
      !target.closest(".button-inside-popover")
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      handleClickOutside as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside as unknown as EventListener
      );
    };
  }, [ref, callback]);
};

export default useClickOutside;
