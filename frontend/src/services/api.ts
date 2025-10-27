export interface Movie {
  id: number
  title: string
  release_date: string
  [key: string]: any
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch("/api/popular");
  if (!response.ok) throw new Error("Failed to fetch popular movies");
  const data = await response.json();
  console.log("Fetched popular movies:", data); 
  return data.results ?? data;
};


export const searchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return []
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
  if (!response.ok) throw new Error('Failed to search movies')
  const data = await response.json()
  return data.results ?? data
}
