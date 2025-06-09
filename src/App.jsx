import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchData from "./service/APi";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import toast from "react-hot-toast";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageModal, setImageModal] = useState({});

  function openModal(photo) {
    setImageModal(photo);
    setIsOpen(true);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!search) {
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await fetchData(search, page);
        if (response.data.total === 0) {
          toast("There is no matches by your query!");
          return;
        }
        setPhotos((prev) => [...prev, ...response.data.results]);
        setHasMorePhotos(page < response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPhotos();
  }, [search, page]);

  const handleSubmit = (query) => {
    setSearch(query);
    setPage(1);
    setPhotos([]);
    setError(null);
    setHasMorePhotos(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      <ImageGallery openModal={openModal} values={photos} />
      {loading && <Loader />}
      {error && (
        <ErrorMessage message={`Something went wrong! ${error.message}`} />
      )}
      {hasMorePhotos && <LoadMoreButton onClick={handleLoadMore} />}
      <ImageModal
        value={imageModal}
        isOpen={modalIsOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
