import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export const spacedFollowers = (followers: number) => {
  if (!followers) return;
  const str = followers.toString();
  const reversed = str.split("").reverse().join("");
  const spacedReversed = reversed.replace(/(.{3})/g, "$1 ");
  return spacedReversed.split("").reverse().join("").trim();
};

export const popularityWidth = (popularity: number) => {
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

export function clearCookies() {
  const allCookies = Cookies.get();
  for (const cookieName in allCookies) {
    Cookies.remove(cookieName, { path: "/", domain: ".accounts.spotify.com" });
  }
}

export async function logoutFromSpotify() {
  try {
    await fetch("https://accounts.spotify.com/en/logout", {
      method: "GET",
      credentials: "include",
    });
  } catch (error) {
    console.error("Error logging out from Spotify:", error);
  }
}
