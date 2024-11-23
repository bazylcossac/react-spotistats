import { useState, useEffect } from "react";

const spacedFollowers = (followers: number) => {
  if (!followers) return;
  const str = followers.toString();
  const reversed = str.split("").reverse().join("");
  const spacedReversed = reversed.replace(/(.{3})/g, "$1 ");
  return spacedReversed.split("").reverse().join("").trim();
};

const popularityWidth = (popularity: number) => {
  const firstValue = popularity / 100;
  return (firstValue * 12).toFixed(0);
};

export function getCookieValue(name: string | null | undefined) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
}

export function useDebounce(value: string, delay = 500) {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return deboucedValue;
}

export { spacedFollowers, popularityWidth };
