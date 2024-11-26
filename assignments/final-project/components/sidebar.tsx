import { Home, BookOpen, Calendar, DollarSign, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-h-screen border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-primary">
            <BookOpen className="mr-2 h-4 w-4" />
            Classes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 h-4 w-4" />
            Planner
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <DollarSign className="mr-2 h-4 w-4" />
            Finances
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Heart className="mr-2 h-4 w-4" />
            Resources
          </Button>
        </div>
      </div>
    </div>
  )
}

