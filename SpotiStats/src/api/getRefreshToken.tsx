import { clientId, clientSecret } from "../apiKeys";

export async function getRefreshToken() {
  const OldRefreshToken = localStorage.getItem("refresh_token");

  if (!OldRefreshToken) {
    console.error("Cannot acces OldRefreshToken");
  }

  const url = "https://accounts.spotify.com/api/token";
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", OldRefreshToken!);
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  };

  const body = await fetch(url, payload);

  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
}
