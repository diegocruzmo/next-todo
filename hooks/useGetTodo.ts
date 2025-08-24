import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTodo } from "@/services/todos";
import { Todo } from "@prisma/client";

function useGetTodo(id: string) {
  const {
    data,
    isPending,
    error,
  }: UseQueryResult<
    {
      data: Todo;
    },
    Error
  > = useQuery({
    queryKey: ["get-todo", id],
    queryFn: () => getTodo(id),
  });

  const todo = data?.data;

  return { isPending, error, todo };
}

export default useGetTodo;
