import axios from "axios";

import BookData from "../types/bookData.ts";
const endPointUrl: string = process.env.NEXT_PUBLIC_BIEP ?? "";

export default async function getBookInfo(isbn: string, setIsLoading: Function): Promise<any> {

    // Setting the indicator for loading
   setIsLoading(true); 
   try {
       let request_parameter = {
           q: `isbn:${isbn}`
       };
       let res = await axios.get(endPointUrl, {params:request_parameter});
       setIsLoading(false);
       return res;
   }
   catch(err) {
       throw err;
   }
}
