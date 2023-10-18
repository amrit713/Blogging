import { UserAvatar } from "@/components/user-avatar";
export const UserInfo = () => {
  return (
    <div className="flex  items-center gap-x-2">
      <UserAvatar src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&w=500" />

      <div className="">
        <p className="text-sm font-semibold"> User name</p>
        <p className="text-xs text-zinc-500"> 30 minutes ago</p>
      </div>
    </div>
  );
};
