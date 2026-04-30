import tasks from '../data/tasks.json'

export const getTasks = async() => {
    return tasks
}

export const postTask = async () => {
    newTask.id = tasks.length+1
    tasks.push(newTask)
    return {ok: true, message: 'task added successfully'}
}