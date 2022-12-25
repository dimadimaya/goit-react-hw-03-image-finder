async function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=30633166-da637d447e23da33de67e6409&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      // console.log(response.json());
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинок с запросом ${name}`));
  });
}

const api = {
  fetchImages,
};

export default api;
