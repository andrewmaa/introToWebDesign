import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: "NOTICE" | "COMPLETE NOW" | "COMPLETE SOON" | "COMPLETED"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "NOTICE":
        return "bg-orange-200 text-orange-700 hover:bg-orange-200"
      case "COMPLETE NOW":
        return "bg-red-200 text-red-700 hover:bg-red-200"
      case "COMPLETE SOON":
        return "bg-yellow-200 text-yellow-700 hover:bg-yellow-200"
      case "COMPLETED":
        return "bg-green-200 text-green-700 hover:bg-green-200"
      default:
        return ""
    }
  }

  return (
    <Badge variant="secondary" className={cn(getStatusStyles(), className)}>
      {status}
    </Badge>
  )
}

