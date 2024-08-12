import {
  Home,
  ShoppingCart,
  KanbanSquare,
  LockKeyhole,
  ChartNoAxesColumn,
  UserRound,
} from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    Icon: Home,
  },
  {
    title: "NFT Marketplace",
    href: "/dashboard/nft-marketplace",
    Icon: ShoppingCart,
  },
  {
    title: "Tables",
    href: "/dashboard/tables",
    Icon: ChartNoAxesColumn,
  },
  {
    title: "Kanban",
    href: "/dashboard/kanban",
    Icon: KanbanSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    Icon: UserRound,
  },
  {
    title: "SignOut",
    href: "/signout",
    Icon: LockKeyhole,
  },
];
