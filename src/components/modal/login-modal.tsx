import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
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
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Email must be valid ",
    }),

  password: z.string().min(8, {
    message: "Password must be 8 character long",
  }),
});

export const LoginModal = () => {
  const { isOpen, onOpen, onClose, type } = useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const modalOpen = isOpen && type === "login";

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    onClose();
  };
  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle className=" flex items-center justify-center flex-col space-y-4 text-center font-semibold text-black px-6 pt-8 text-xl">
            <BrandIcon />
            <p>Log in</p>
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500 text-sm font-medium ">
            Hey, Enter your details to get Log in to your account
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="px-6 w-full relative">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="uppercase font-semibold text-zinc-600 text-xs">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-zinc-00 border-2 focus-visible:border-primary  focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder=" Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="uppercase font-semibold text-zinc-600 text-xs">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-zinc-300 border-2 focus-visible:border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder=" Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="px-6 pt-6 flex flex-col gap-y-2">
              <Button className="w-full">
                Log in
                {isLoading && <Loader className="animate-spin w-4 h-4 ml-2" />}
              </Button>
            </div>
          </form>
        </Form>
        <div className="px-6 pb-6  ">
          <Button
            variant="outline"
            className="w-full"
            // onClick={() => signIn("google")}
          >
            Login With Google
          </Button>
          <div className="flex text-sm gap-x-2 items-center text-zinc-600">
            <p>Didn&rsquo;t have acount?</p>
            <Button variant="link" onClick={() => onOpen("signup")}>
              sign up
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
