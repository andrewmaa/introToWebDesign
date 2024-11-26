import { Sidebar } from "../../components/sidebar"
import { InfoCard } from "../../components/info-card"
import { Button } from "../../components/ui/button"
import { Plus, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-[200px]" />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Hi Andrew!</h1>
            <p className="text-lg text-muted-foreground">
              Happy <span className="text-primary font-semibold">Fall semester!</span> Review your{" "}
              <span className="text-primary font-semibold">classes and student information</span> below.
            </p>
          </div>
          <Button size="icon" className="rounded-full bg-primary">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="text-2xl font-semibold">My Classes</h2>
              <ArrowRight className="h-5 w-5" />
            </div>
            <InfoCard
              title="Add/Drop ends September 16"
              description="September 16 is the last day to change your classes before a 'W' is added on your transcript."
              status="NOTICE"
              icon="alert"
            />
            <InfoCard
              title="Review waitlisted classes"
              description="Review the classes you are waitlisted for, and make changes if necessary. Note: you will be skipped over the waitlist should there be any conflicting classes."
              status="NOTICE"
              icon="alert"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="text-2xl font-semibold">My Information</h2>
              <ArrowRight className="h-5 w-5" />
            </div>
            <InfoCard
              title="Missing immigration documents"
              description="OGS needs your most up-to-date and accurate visa information to comply with government regulations."
              status="COMPLETE NOW"
              icon="file"
            />
            <InfoCard
              title="Complete mandatory immigration module"
              description="OGS requires all students in F-1 and J-1 status to complete the US Immigration Requirements Training."
              status="COMPLETE SOON"
              icon="pen"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Completed Items</h2>
            <InfoCard
              title="Met course credit requirements"
              description="You completed this requirement on May 16, 2024."
              status="COMPLETED"
              icon="check"
            />
            <InfoCard
              title="Update local address information"
              description="You completed this requirement on March 24, 2024."
              status="COMPLETED"
              icon="check"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

