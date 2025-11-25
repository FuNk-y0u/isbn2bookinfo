import BookData from "../types/bookData.ts";

export default function BookDataTable(props) {

    let bookData = props.bookData;

    if(bookData) {
        return (
            
<div className="flex gap-8 p-8 bg-white text-black">
  <div className="flex-shrink-0">
    <img
      src={bookData.image_url}
      alt={bookData.title}
      className="w-64 h-auto border-4 border-black shadow-2xl"
    />
  </div>

  <div className="flex-1 space-y-6">
    <div className="border-b-2 border-black pb-4">
      <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
        TITLE
      </h1>
      <h2 className="text-3xl font-bold">{bookData.title}</h2>
    </div>

    <div className="border-b border-gray-300 pb-4">
      <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
        AUTHORS
      </h1>
      <div className="space-y-1">
        {bookData.authors.map((data) => (
          <h2 key={data} className="text-lg">
            {data}
          </h2>
        ))}
      </div>
    </div>

    <div className="border-b border-gray-300 pb-4">
      <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
        CATEGORIES
      </h1>
      <div className="flex flex-wrap gap-2">
        {bookData.categories.map((data) => (
          <span
            key={data}
            className="px-3 py-1 bg-black text-white text-sm font-semibold"
          >
            {data}
          </span>
        ))}
      </div>
    </div>

    <div className="border-b border-gray-300 pb-4">
      <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
        DESCRIPTION
      </h1>
      <p className="text-gray-700 leading-relaxed">
        {bookData.description}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div>
        <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
          LANGUAGE
        </h1>
        <h2 className="text-lg uppercase">{bookData.language}</h2>
      </div>

      <div>
        <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
          PAGE COUNT
        </h1>
        <h2 className="text-lg">{bookData.page_count}</h2>
      </div>

      <div>
        <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
          PUBLISHER
        </h1>
        <h2 className="text-lg">{bookData.publisher}</h2>
      </div>

      <div>
        <h1 className="text-sm font-bold tracking-wider text-gray-600 mb-2">
          PUBLISHED DATE
        </h1>
        <h2 className="text-lg">{bookData.published_date}</h2>
      </div>
    </div>
  </div>
</div>

        );
    }
    return "";
};
