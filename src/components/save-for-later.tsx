import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { BookmarkPlus } from "lucide-react";

const SaveForLater = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <BookmarkPlus className="w-5 h-5 text-zinc-500  " />
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white text-xs font-medium">
          Save for later
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SaveForLater;
