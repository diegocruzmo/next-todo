import { formSchema } from "@/app/(routes)/(home)/components/CreateForm/CreateForm.form";
import { createTodo } from "@/services/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => createTodo(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-todos"] });
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
  });
}

export default useCreateTodo;
