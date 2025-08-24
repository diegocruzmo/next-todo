import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTodosCompleted } from "@/services/todos";

function useGetTodosCount() {
  const {
    data,
    isPending,
    error,
  }: UseQueryResult<{ completedCount: number }, Error> = useQuery({
    queryKey: ["get-todos-completed"],
    queryFn: getTodosCompleted,
  });

  const todosCount = data?.completedCount ?? 0;

  return { isPending, error, todosCount };
}

export default useGetTodosCount;
