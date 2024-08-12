import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";

function SmallCard() {
  return (
    <Card x-chunk="dashboard-05-chunk-1" className="rounded-lg p-4">
      <CardHeader className="mb-2 p-0">
        <CardDescription className="text-xs md:text-sm">
          This Week
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
          $1,329
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 hidden md:flex mb-2">
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
      <CardFooter className="hidden md:flex">
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
}

export default SmallCard;
