import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2" href="#">
        <DropletsIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <div className="flex items-center gap-2">
        <Button className="px-4 py-2 text-sm font-medium" variant="link">
          About
        </Button>
        <Button className="px-4 py-2 text-sm font-medium" variant="link">
          Pricing
        </Button>
        <Button className="px-4 py-2 text-sm font-medium" variant="outline">
          Login
        </Button>
      </div>
    </header>
    </div>
  )
}

function DropletsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </svg>
    )
  }