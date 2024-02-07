import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api/todo";

export const getTodos = async () => {
    //TODO: API URL設定
    const url = API_URL + "/get";
    // const url = `${API_URL}/get`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    //TODO: API URL設定
    const url = API_URL + "/add";
    // const url = `${API_URL}/add`; 
    const data = JSON.stringify(todos);
    //TODO: APIで保存し、データを返す
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        if (!response.ok) {
            throw new Error('Failed to post todos');
        }
        return await response.json(); 
    } catch (error) {
        console.error(error);
    }
}
