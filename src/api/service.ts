import {API_ENDPOINT} from "./endpoints.ts";
import {User} from "../types/user.ts";

async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            return []
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return [];
    }
}

export default getUsers;