"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./CreateForm.form";
import { Textarea } from "@/components/ui/textarea";
import useCreateTodo from "@/hooks/useCreateTodo";
import { toast } from "sonner";

export function CreateForm({ onSuccess }: { onSuccess?: () => void }) {
  const { mutateAsync: createTodo } = useCreateTodo();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createTodo(values);
      toast("Todo created successfully!");
      onSuccess?.();
    } catch {
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="mb-4"
                  placeholder="Learn React, read a book, etc..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="mb-4"
                  placeholder="Take a course of React..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size={"sm"}
          className="cursor-pointer w-full"
          variant={"outline"}
          type={"submit"}
        >
          Create
        </Button>
      </form>
    </Form>
  );
}
