import axios from "axios";
import { useState } from "react";

function useFetch() {
  const [searchUnsplash, setSearchUnsplash] = useState<any[]>([]);
  const [searchPixabay, setSearchPixabay] = useState<any[]>([]);
  const [pixabay, setPixabay] = useState<any[]>([]);
  const [unsplash, setUnsplash] = useState<any[]>([]);
  const [pageUnSplash, setPageUnsplash] = useState(1);
  const [pagePixabay, setPagePixabay] = useState(1);
  const [searchPagePixabay, setSearchPagePixabay] = useState(1);
  const [searchPageUnsplash, setSearchPageUnsplash] = useState(1);

  function fetchUnsplash(input: string) {
    const url = `https://api.unsplash.com/search/photos?page=${searchPageUnsplash}&per_page=30&query=${input}&client_id=bhSb6DOp9rZlvX01Up9LRE8kuHVbAFp0PtD0i_GnxP8`;
    axios.get(url).then((res) => {
      setSearchUnsplash([...searchUnsplash, ...res.data.results]);
    });
  }

  function fetchPixabay(input: string) {
    const url = `https://pixabay.com/api/?image_type=all&page=${searchPagePixabay}&per_page=200&q=${input}&key=22298070-355c92a626e0de2e656085884`;

    axios.get(url).then((all) => {
      setSearchPixabay([...searchPixabay, ...all.data.hits]);
    });
  }

  function getPixabay() {
    const url = `https://pixabay.com/api/?page=${pagePixabay}&per_page=200&key=22298070-355c92a626e0de2e656085884`;
    axios.get(url).then((res) => {
      setPixabay([...pixabay, ...res.data.hits]);
    });
  }

  function getUnsplash() {
    const url = `https://api.unsplash.com/photos/?page=${pageUnSplash}&per_page=30&client_id=bhSb6DOp9rZlvX01Up9LRE8kuHVbAFp0PtD0i_GnxP8`;
    axios.get(url).then((res) => {
      setUnsplash([...unsplash, ...res.data]);
    });
  }

  return {
    searchUnsplash,
    fetchUnsplash,
    searchPixabay,
    fetchPixabay,
    getPixabay,
    pixabay,
    getUnsplash,
    unsplash,
    setPageUnsplash,
    pageUnSplash,
    setPagePixabay,
    pagePixabay,
    searchPagePixabay,
    searchPageUnsplash,
    setSearchPagePixabay,
    setSearchPageUnsplash,
  };
}

export default useFetch;
