import { useEffect, useState } from 'react';
import { Button, SearchForm, Grid, Text, CardItem } from 'components';
import { getImages } from 'service/image-service';

export const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [endOfResults, setEndOfResults] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    getImages(searchQuery, page).then(data => {
      setImages(prevState => {
        const newImages = [...prevState, ...data.photos];
        if (newImages.length === data.total_results) {
          setEndOfResults(true);
        }
        return newImages;
      });
    });
  }, [searchQuery, page]);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onChangeSearchQuery = newSearchQuery => {
    setSearchQuery(newSearchQuery);
    setPage(1);
    setImages([]);
    setEndOfResults(false);
  };

  return (
    <>
      <SearchForm onSubmit={onChangeSearchQuery}></SearchForm>
      {images.length > 0 && (
        <Grid>
          {images.map(item => (
            <CardItem key={item.id}>
              <img src={item.src.large} alt={item.alt} />
            </CardItem>
          ))}
        </Grid>
      )}
      {images.length > 0 && !endOfResults && (
        <Button type="button" onClick={onClickLoadMore}>
          Load more
        </Button>
      )}
      {images.length === 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
    </>
  );
};
