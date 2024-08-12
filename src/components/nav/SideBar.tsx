import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Package2 } from "lucide-react";
import { navItems } from "./navItems";

function SideBar() {
  return (
    <TooltipProvider>
      <nav className="flex flex-col gap-4 p-3">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={item.href}
            className={`flex items-center gap-2 ${
              index === navItems.length - 1 ? "mt-auto" : ""
            } hover:bg-stone-100 p-2 rounded`}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <item.Icon className="h-5 w-5" />
                  <span className="sr-only">{item.title}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="md:hidden">
                {item.title}
              </TooltipContent>
            </Tooltip>
            <p className="capitalize">{item.title}</p>
          </Link>
        ))}
      </nav>
    </TooltipProvider>
  );
}

export default SideBar;
