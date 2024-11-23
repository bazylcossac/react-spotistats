import { clientId, clientSecret } from "../apiKeys";

/// token sie refreshuje po nowym zmoutnowaniu app ale trzeba obsluzyc bledy:
/// kiedy token traci waznosc po godzinie, nalezy zrefhresowac token

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
  //   if (response.refresh_token) {
  //     localStorage.setItem("refresh_token", response.refresh_token);
  //   }
}
