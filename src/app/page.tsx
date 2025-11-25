"use client"
import {useState, useEffect} from "react";

import {validateInputISBN13, convertJson2BookData} from "../utils.ts";

import getBookInfo from "../data/getBookInfo.ts";

import BookDataTable from "../layout/bookDataTable.tsx";
import LoadingSpinner from "../layout/loadingSpinner.tsx";

import BookData from "../types/bookData.ts";

export default function Home() {

    const [inputISBN, setInputISBN] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [bookData, setBookData] = useState<BookData>();
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputISBN(e.target.value);
    };

    const handleSubmit = async () => {
        setErrorMsg("");

        try {
            validateInputISBN13(inputISBN);

            let res = await getBookInfo(inputISBN, setIsLoading);

            let book_info = res.data.items[0] ?? {};

            const book_data: BookData = convertJson2BookData(book_info);
            setBookData(book_data);
        }
        catch(err: any) {
            console.log("ERROR: ");
            console.log(err);

            setErrorMsg(err.message);
        }

    };

    return (
        <div className="flex w-screen h-screen items-center flex-col gap-5 overflow-scroll pt-50">

            <h1>
                ISBN_13 Searcher
            </h1>
            
           
            <div className="flex gap-3">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder={"example: 9780679733737"}
                    className={`p-3 border-2`}
                    defaultValue={inputISBN}

                    autoFocus
                />

                <button className="bg-black text-white p-3 " onClick={handleSubmit}>
                    Search
                </button>
            </div>

            <p className="text-red-500">{errorMsg}</p>

            <LoadingSpinner isLoading={isLoading} />

            <BookDataTable  bookData={bookData}/>

        </div>
  );
}
