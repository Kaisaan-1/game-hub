import useData from "./useData";

//abstraction of endpoints for useData
interface Genre {
  id: number;
  name: string;
}



const useGenres = () =>useData<Genre>('/genres')

export default useGenres;
