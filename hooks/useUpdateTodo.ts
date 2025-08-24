import { updateTodo } from "@/services/todos";
import { Todo } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useEditCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: Partial<Todo> & { id: string }) => updateTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-todos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-todos-completed"],
      });
    },
    onError: (error: Error) => {
      console.error("Error updating todo:", error);
    },
  });
}

export default useEditCourse;
