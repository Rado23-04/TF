import { useState} from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Types
type Task = {
  id: number;
  title: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  assignedTo: string;
};

// Draggable Task Item
const TaskItem = ({ task, moveTask }: { task: Task; moveTask: (id: number, newStatus: string) => void }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
        
      className={`p-4 mb-2 rounded shadow-md cursor-pointer ${isDragging ? "opacity-50" : "bg-white"}`}
    >
      <h4 className="font-bold">{task.title}</h4>
      <p className="text-sm">Assigné à : {task.assignedTo}</p>
      <p className="text-xs text-gray-600">Priorité : {task.priority}</p>
    </div>
  );
};

// Task Column (Drop Area)
const TaskColumn = ({ status, tasks, moveTask }: { status: string; tasks: Task[]; moveTask: (id: number, newStatus: string) => void }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: number }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div  className={`w-1/3 p-4 border rounded-lg ${isOver ? "bg-gray-100" : "bg-gray-50"}`}>
      <h3 className="text-lg font-bold mb-4">{status}</h3>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};

// Main Task Component
export default function Task() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Fix Login Issue", status: "To Do", priority: "High", assignedTo: "Alice" },
    { id: 2, title: "Update Docs", status: "In Progress", priority: "Medium", assignedTo: "Bob" },
    { id: 3, title: "Deploy to Prod", status: "Done", priority: "Low", assignedTo: "Charlie" },
  ]);

  // Fonction pour déplacer une tâche
  const moveTask = (id: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus as Task["status"] } : task))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Tableau de Bord - Gestion des Tâches</h1>
        <div className="flex gap-4">
          <TaskColumn status="To Do" tasks={tasks.filter((t) => t.status === "To Do")} moveTask={moveTask} />
          <TaskColumn status="In Progress" tasks={tasks.filter((t) => t.status === "In Progress")} moveTask={moveTask} />
          <TaskColumn status="Done" tasks={tasks.filter((t) => t.status === "Done")} moveTask={moveTask} />
        </div>
      </div>
    </DndProvider>
  );
}
