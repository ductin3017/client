import { API_BOOK, API_BOOK_CATEGORY } from "~/utils/url-api";
import http from "~/utils/http";

const GetInforBook = async (bookId) => {
	try {
		const response = await http.get(`${API_BOOK}/${bookId}`);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const BookFreeApi = async () => {
	try {
		const response = await http.get(`${API_BOOK_CATEGORY}`);
		const freeCategory = response.data.find(
			(category) => category.name === "Free"
		);
		if (freeCategory) {
			const productsResponse = await http.get(
				`${API_BOOK_CATEGORY}/${freeCategory._id}`
			);
			return productsResponse.data.books;
		}
	} catch (error) {
		console.error("Error fetching free books data:", error);
		throw error;
	}
};

const BookNewApi = async () => {
	try {
		const response = await http.get(`${API_BOOK_CATEGORY}`);
		const buyCategory = response.data.find(
			(category) => category.name === "New"
		);
		if (buyCategory) {
			const productsResponse = await http.get(
				`${API_BOOK_CATEGORY}/${buyCategory._id}`
			);
			return productsResponse.data.books;
		}
	} catch (error) {
		console.error("Error fetching free books data:", error);
		throw error;
	}
};

const BookSuggestApi = async () => {
	try {
		const response = await http.get(`${API_BOOK_CATEGORY}`);
		const freeCategory = response.data.find(
			(category) => category.name === "Suggests"
		);
		if (freeCategory) {
			const productsResponse = await http.get(
				`${API_BOOK_CATEGORY}/${freeCategory._id}`
			);
			return productsResponse.data.books;
		}
	} catch (error) {
		console.error("Error fetching free books data:", error);
		throw error;
	}
};

const BookRetailApi = async () => {
	try {
		const response = await http.get(`${API_BOOK_CATEGORY}`);
		const freeCategory = response.data.find(
			(category) => category.name === "Bestsellers"
		);
		if (freeCategory) {
			const productsResponse = await http.get(
				`${API_BOOK_CATEGORY}/${freeCategory._id}`
			);
			return productsResponse.data.books;
		}
	} catch (error) {
		console.error("Error fetching free books data:", error);
		throw error;
	}
};

export { GetInforBook, BookNewApi, BookFreeApi, BookSuggestApi, BookRetailApi };
