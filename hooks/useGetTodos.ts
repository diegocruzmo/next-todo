import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTodos } from "@/services/todos";
import { Todo } from "@prisma/client";

function useGetTodos() {
  const { data, isPending, error }: UseQueryResult<{ data: Todo[] }, Error> =
    useQuery({
      queryKey: ["get-todos"],
      queryFn: getTodos,
    });

  const todos = data?.data ?? [];

  return { isPending, error, todos };
}

export default useGetTodos;
