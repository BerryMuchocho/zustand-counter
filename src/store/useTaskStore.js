import { create } from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [],

    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),

    removeTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId)
    })),

    toggleTask: (taskId) => set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )
    }))
}));

export default useTaskStore;
