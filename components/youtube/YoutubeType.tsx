export interface YoutubeListResponse {
  youtubeList: YoutubeResponse[]
}

export interface YoutubeResponse {
  id: string,
  thumbnailUrl: string,
  title: string,
  url: string
}