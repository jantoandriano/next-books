export const mappingResponse = (res: { data: { items: any[] } }) => {
  if (res) {
    return res.data.items.map((val: any) => ({
      id: val.id,
      title: val.volumeInfo.title,
      authors: val.volumeInfo.authors,
      description: val.volumeInfo.description,
      publishedDate: val.volumeInfo.publishedDate,
      image: val.volumeInfo.imageLinks?.thumbnail || ''
    }));
  } else {
    return [];
  }
};

export const mappingResponseByYear = (res: { data: { items: any[] } }, year: string) => {
  if (year !== '2023') {
    const test = res.data.items
      .map((val: any) => ({
        id: val.id,
        title: val.volumeInfo.title,
        authors: val.volumeInfo.authors,
        description: val.volumeInfo.description,
        publishedDate: val.volumeInfo.publishedDate,
        image: val.volumeInfo.imageLinks?.thumbnail || ''
      }))
      .filter((val) => {
        const date = new Date(year).getFullYear();
        const publishdate = new Date(val.publishedDate).getFullYear();
        return publishdate === date;
      });

    return test;
  }

  return res.data.items.map((val: any) => ({
    id: val.id,
    title: val.volumeInfo.title,
    authors: val.volumeInfo.authors,
    description: val.volumeInfo.description,
    publishedDate: val.volumeInfo.publishedDate,
    image: val.volumeInfo.imageLinks?.thumbnail || ''
  }));
};
