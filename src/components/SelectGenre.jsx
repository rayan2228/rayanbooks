import { useDispatch } from "react-redux";
import { topicChange } from "../redux/slices/genreSlice";

const genres = [
  "choose an option",
  "Fiction",
  "Mystery",
  "Novel",
  "Narrative",
  "Historical Fiction",
  "Science fiction",
  "Thriller",
  "Memoir",
  "Fantasy Fiction",
  "Biography",
  "Short Story",
  "Children's literature",
  "History",
  "Essay",
  "Fantasy",
  "Science",
  "Humor",
  "Autobiography",
  "Poetry",
  "Social science",
  "Adventure fiction",
  "Romance",
  "Crime Fiction",
  "Fairy tale",
  "Satire",
  "Speculative fiction",
  "Detective fiction",
  "Review",
];
const SelectGenre = () => {
  const dispatch = useDispatch();
  return (
    <form className="my-5 max-w-56">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an topic
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => dispatch(topicChange(e.target.value))}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre.toLowerCase()}>
            {genre}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SelectGenre;
