import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
    'use server'
    // const name = formData.get('name')
    // const description = formData.get('description')
    // const priority = formData.get('priority')
    // const dueDate = formData.get('dueDate')

    // const newTask = {name, description, priority, dueDate}

    const newTask = Object.fromEntries(formData.entries())


    console.log('Adding a task with name',newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks')
    }
    return res;
}

export const newTaskAction = async (formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries())

    console.log('Adding a task with name',newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks')
    }
    return res;
} 