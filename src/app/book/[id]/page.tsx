async function getBook(id: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBQ_6EXMyfegzv4XJ4VCvc5CgZT1zuXwLQ`,
    {
      cache: 'force-cache'
    }
  );


  if (res.status > 500) {
    throw new Error('Failed to fetch data')
  }
  const response = await res.json()
  return response

}

const Page = async ({ searchParams }: {
  searchParams: { id: string }
}) => {
  const product = await getBook(searchParams.id);


  return (
    <section className="overflow-hidden text-gray-100">
      {product && (
        <div className="container px-5 pt-32 pb-4 mx-auto sm:py-24">
          <div className="flex flex-wrap items-center mx-auto lg:max-w-5xl">
            <img
              alt={product.volumeInfo.title}
              className="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
              src={product.volumeInfo.imageLinks.thumbnail}
            />

            <div className="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {product.volumeInfo.authors[0]}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-100 title-font">
                {product.volumeInfo.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
                    {product.volumeInfo.publishedDate}
                  </span>
                </span>
              </div>
              <div
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: product.volumeInfo.description }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-auto border-t border-gray-700 lg:max-w-5xl"></div>
        </div>
      )}
    </section>
  );
};

export default Page;
