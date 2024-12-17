import axios from "axios";
import { User } from "../basic/6";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

const data = await fetchData<User>("httpw://dhddh");
const data2 = await fetchData<{ name: string }>("https://gshgdvf");
