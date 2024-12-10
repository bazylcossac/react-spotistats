export type TopArtistsType = {
  external_urls: Record<string, string> | null;
  followers: Record<string, null | number>;
  genres: string[];
  href: string;
  id: string;
  images: Record<string, string | undefined>[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type TopTracksType = {
  album: Record<string, any>;
  artists: Record<string, string | Record<string, string>>[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Record<string, string>;
  external_urls: Record<string, string>;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type UserPlaylistsType = {
  colaboration: boolean;
  description: string;
  external_urls: Record<string, string>;
  href: string;
  id: string;
  images: Record<string, string | undefined>[];
  name: string;
  owner: Record<string, string>;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Record<string, string | number>;
  type: string;
  uri: string;
};
