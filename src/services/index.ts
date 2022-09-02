import axios from "axios";

const BASE_URL = "http://localhost:3000";
const TODOS_PATH = "todos";

export const getTodos = async () => {
    try {
        const todosUrl = [BASE_URL, TODOS_PATH].join("/");
        const todos = await axios.get(todosUrl);

        return todos.data;   
    } catch (err) {
        console.log(err);
    }
}

export const addTodo = async (todo: string) => {
    try {
        const todosUrl = [BASE_URL, TODOS_PATH].join("/");
        const data = { title: todo, isCompleted: false };

        await axios.post(todosUrl, data);
    } catch (err) {
        console.log(err);
    }
}

export const updateTodo = async (todo: string, id: number) => {
    try {
        const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
        const data = { title: todo, isCompleted: false };

        await axios.put(todosUrl, data);
    } catch (err) {
        console.log(err)
    }
}

export const patchTodo = async (isCompleted: boolean, id: number) => {
    try {
        const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
        const data = { isCompleted };

        await axios.patch(todosUrl, data);
    } catch (err) {
        console.log(err);
    }
}

export const deleteTodo = async (id: number) => {
    try {
        const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
        await axios.delete(todosUrl);
    } catch (err) {
        console.log(err);
    }
}