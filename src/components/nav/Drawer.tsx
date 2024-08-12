import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SideBar from "./SideBar";
import { MenuIcon } from "lucide-react";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerDemo() {
  //   const [goal, setGoal] = React.useState(350);

  //   function onClick(adjustment: number) {
  //     setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  //   }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose>
          <SideBar />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
