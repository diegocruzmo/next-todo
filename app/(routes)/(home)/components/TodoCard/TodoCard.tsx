"use client";

import { Button } from "@/components/ui/button";
import { Check, Delete } from "lucide-react";
import { format } from "date-fns";
import { UpdateModal } from "../UpdateModal";

interface TodoCardProps {
  todo: {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    status: boolean;
  };
  onCheck: (id: string, status: boolean) => void;
  onDelete: (id: string) => void;
}

export function TodoCard({ todo, onCheck, onDelete }: TodoCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h2>{todo.title}</h2>
        <p className="text-slate-500 text-xs">
          {format(todo.createdAt, "dd/MM/yyyy")}
        </p>
      </div>

      <p className="rounded-md text-sm text-slate-500">{todo.description}</p>

      <div className="flex flex-col justify-evenly content-center mt-2 gap-2">
        <Button
          onClick={() => onCheck(todo.id, !todo.status)}
          variant="outline"
          size="sm"
          className="cursor-pointer"
        >
          <Check />
          <p className="text-xs font-light">Check / Uncheck</p>
        </Button>

        <UpdateModal
          id={todo.id}
          title={todo.title}
          description={todo.description}
        />

        {/* <Button
          onClick={() => onEdit(todo.id, todo.title, todo.description)}
          variant="outline"
          size="sm"
          className="cursor-pointer"
        >
          <Edit />
          <p className="text-xs font-light">Edit</p>
        </Button>
         */}

        <Button
          onClick={() => onDelete(todo.id)}
          variant="outline"
          size="sm"
          className="cursor-pointer"
        >
          <Delete />
          <p className="text-xs font-light">Delete</p>
        </Button>
      </div>
    </div>
  );
}
