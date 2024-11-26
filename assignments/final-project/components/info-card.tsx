import { Card, CardContent } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { AlertCircle, FileText, CheckCircle2, PenLine } from 'lucide-react'
import { cn } from "@/lib/utils"

interface InfoCardProps {
  title: string
  description: string
  status: "NOTICE" | "COMPLETE NOW" | "COMPLETE SOON" | "COMPLETED"
  icon?: "alert" | "file" | "check" | "pen"
}

export function InfoCard({ title, description, status, icon = "alert" }: InfoCardProps) {
  const IconComponent = {
    alert: AlertCircle,
    file: FileText,
    check: CheckCircle2,
    pen: PenLine,
  }[icon]

  const iconColor = status === "COMPLETED" ? "text-green-500" : "text-primary"

  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <div className={cn("mt-1", iconColor)}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{title}</h3>
              <StatusBadge status={status} />
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

