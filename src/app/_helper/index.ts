export const mappingResponse = (res: { items: any[] }, sort?: string) => {
  let sortDir = ""
  let sortBy = ''

  if (sort) {
    const [a, b] = sort.split(":");
    sortBy = a;
    sortDir = b;
  }

  if (res) {
    return res.items.map((val: any) => ({
      id: val.id,
      title: val.volumeInfo.title,
      authors: val.volumeInfo.authors,
      description: val.volumeInfo.description,
      publishedDate: val.volumeInfo.publishedDate,
      image: val.volumeInfo.imageLinks?.thumbnail || ''
    })).sort(compareValues(sortBy, sortDir))
  }

  return []
};

export const mappingResponseByYear = (res: { items: any[] }, year: string, sort: string) => {
  const temp = mappingResponse(res);
  let sortDir = ""
  let sortBy = ""

  if (sort) {
    const [a, b] = sort.split(":");
    sortBy = a;
    sortDir = b;
  }

  if (year !== '2023') {
    return mappingResponse(res).filter((val) => {
      const date = new Date(year).getFullYear();
      const publishdate = new Date(val.publishedDate).getFullYear();
      return publishdate === date;
    }).sort(compareValues(sortBy, sortDir));
  }
  return temp
};

const compareValues = (key: string, order = 'asc') => {
  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}