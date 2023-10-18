import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  FormControl,
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrandIcon } from "../Icon";
import { useModal } from "@/hooks/use-modal-store";

const formSchema = z.object({
  search: z.string().min(1, {
    message: "Search is required",
  }),
});

export const SearchModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const modalOpen = isOpen && type === "search";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    onClose();
  };
  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className=" overflow-hidden">
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="px-6  pt-6 w-full relative">
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
        <div className="px-6   flex items-center justify-center gap-x-2 text-zinc-600">
          <Search className="w-4 h-4" />
          <p>Search for tags, people, article, and more</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
