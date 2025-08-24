import { formSchema } from "@/app/(routes)/(home)/components/CreateForm/CreateForm.form";
import api from "@/lib/axios";
import { Todo } from "@prisma/client";
import z from "zod";

export const getTodos = async (): Promise<{ data: Todo[] }> => {
  try {
    const response = await api.get("/api/todo");
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};

export const getTodo = async (
  id: string
): Promise<{
  data: Todo;
}> => {
  try {
    const response = await api.get(`/api/todo/${id}`);
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};

export const getTodosCompleted = async (): Promise<{
  completedCount: number;
}> => {
  try {
    const response = await api.get<{ completedCount: number }>(
      "/api/todo/completed"
    );
    return { completedCount: response.data.completedCount };
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (
  values: z.infer<typeof formSchema>
): Promise<{ data: Todo }> => {
  try {
    const response = await api.post("/api/todo", values);
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (todo: Partial<Todo> & { id: string }) => {
  try {
    const { id, ...fieldsToUpdate } = todo;
    const response = await api.patch(`/api/todo/${id}`, fieldsToUpdate);
    return { data: response.data };
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<{ data: Todo }> => {
  try {
    const response = await api.delete(`/api/todo/${id}`);
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};
