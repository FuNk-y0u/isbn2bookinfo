import BookData from "./types/bookData.ts";

const inputValidationRegex:RegExp = new RegExp(process.env.NEXT_PUBLIC_BIREX ?? "");

export function convertJson2BookData(json_data: Record<any, any>): BookData{
    const info = json_data.volumeInfo ?? {};

    return {
        title: info.title ?? "",
        authors: info.authors ?? [],
        categories: info.categories ?? [],
        description: info.description ?? "",
        image_url: info.imageLinks?.thumbnail ?? "",
        language: info.language ?? "",
        publisher: info.publisher ?? "",
        published_date: info.publishedDate ?? "",
        page_count: info.pageCount ?? 0,
    };
}

export function validateInputISBN13(input_data: string): void {
    let input_valid = inputValidationRegex.test(input_data.trim());
    if(!input_valid) {
        throw new Error("Invalid ISBN13 Book number");
    }
};
