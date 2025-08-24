import { deleteTodo } from "@/services/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-todos"] });
    },
    onError: (error) => {
      console.error("Error deleting todo:", error);
    },
  });
}

export default useDeleteTodo;
