"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Pencil, Settings, AppWindowIcon } from "lucide-react";

const formSchema = z.object({
  search: z.string().min(1, {
    message: "Search is required",
  }),
});

export const SearchFeed = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Card className="max-w-[720px] mx-auto">
      <CardHeader>
        <CardDescription className="text-center font-semibold text-black">
          Search - the dev search engine powered by Hashnode AI
        </CardDescription>
      </CardHeader>
      <CardContent className=" overflow-hidden">
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" pt-2 w-full relative">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-zinc-200 rounded-3xl h-[50px] border-2 focus-visible:border-primary  focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder=" Start typing to search"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
        <div className=" pt-6 flex items-center justify-between">
          <Button variant="ghost" className="text-zinc-600">
            {" "}
            <Pencil className="w-4 h-4 mr-2" /> Write an article{" "}
          </Button>

          <Button variant="ghost" className="text-zinc-600">
            {" "}
            <Settings className="w-4 h-4 mr-2" /> Blog dashoard{" "}
          </Button>
          <Button variant="ghost" className="text-zinc-600">
            {" "}
            <AppWindowIcon className="w-4 h-4 mr-2" /> Manage blogs{" "}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
