"use client";

import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import useGetTodos from "@/hooks/useGetTodos";
import useUpdateTodo from "@/hooks/useUpdateTodo";
import useDeleteTodo from "@/hooks/useDeleteTodo";
import useGetTodosCount from "@/hooks/useGetTodosCount";
import { TodoCard } from "../TodoCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TodosInfo() {
  const { todos, isPending } = useGetTodos();

  const { todosCount } = useGetTodosCount();
  const { mutateAsync: editTodo } = useUpdateTodo();
  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"completed" | "pending">("pending");

  if (isPending) return <SkeletonCard />;
  if (todos.length === 0) return <div>No To-Do Found</div>;

  const handleCheck = async (id: string, status: boolean) => {
    await editTodo({ id, status });
    toast.success("Todo updated!");
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    toast.success("Todo deleted!");
  };

  const filteredTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) => {
      if (filter === "completed") return todo.status;
      if (filter === "pending") return !todo.status;
    });

  return (
    <div className="w-full py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex gap-2">
          <Button
            className="cursor-pointer"
            onClick={() => setFilter("pending")}
            variant={filter === "pending" ? "default" : "outline"}
            size={"sm"}
          >
            Pending
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => setFilter("completed")}
            variant={filter === "completed" ? "default" : "outline"}
            size={"sm"}
          >
            Completed
            <Badge variant="secondary" className="text-xs">
              {todosCount}
            </Badge>
            <BadgeCheckIcon />
          </Button>
        </div>

        <Input
          id="search"
          type="search"
          placeholder="Search..."
          className="w-full sm:w-48 border-2 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredTodos.length === 0 && search.length > 0 ? (
        <p className="text-center text-slate-500">No todos match your search</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onCheck={handleCheck}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
