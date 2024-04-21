
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router';

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mb-6">
          <Link href="#">
            <MountainIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
          </Link>
        </div>
        <form className="space-y-4">
          <div>
            <Label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </Label>
            <Input
              className="w-full px-3 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50 dark:border-gray-800"
              id="email"
              placeholder="example@email.com"
              type="email"
            />
          </div>
          <div>
            <Label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full px-3 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50 dark:border-gray-800"
              id="password"
              placeholder="********"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              href="#"
            >
              Forgot Password?
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800"
              href = "/dashboard"
            >
              Login
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?
          <Link
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            href="/signup"
          >
             Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
