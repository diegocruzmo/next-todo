"use client";
import { useState } from "react";

import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import useUpdateTodo from "@/hooks/useUpdateTodo";

interface UpdateModalProps {
  id: string;
  title: string;
  description: string;
}

export function UpdateModal({ id, title, description }: UpdateModalProps) {
  const { mutateAsync: editTodo } = useUpdateTodo();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [open, setOpen] = useState(false);

  const handleSave = async () => {
    if (newTitle.length < 2 || newDescription.length < 2) {
      toast.error("Title and description must be at least 2 characters!");
      return;
    }

    await editTodo({ id, title: newTitle, description: newDescription });
    setOpen(false);
    toast.success("Todo updated!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Edit />
          <p className="text-xs font-light">Edit</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>To-Do</DialogTitle>
          <DialogDescription>Edit a To-Do.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Button
            onClick={handleSave}
            size={"sm"}
            className={"cursor-pointer"}
            variant={"outline"}
            type={"submit"}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
