import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-r from-[#e0f2fe] to-[#e0f2fe] dark:from-[#0c4a6e] dark:to-[#0c4a6e]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Take Control of Your Water Usage
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our app helps you track your daily water consumption, set goals, and make informed decisions to
                    reduce your environmental impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0c4a6e] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#0c4a6e]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0c4a6e] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#e0f2fe] dark:text-[#0c4a6e] dark:hover:bg-[#e0f2fe]/90 dark:focus-visible:ring-[#e0f2fe]"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-white dark:bg-[#0c4a6e]"
          id="how-it-works"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#e0f2fe] px-3 py-1 text-sm dark:bg-[#0c4a6e]/50">
                  How it Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple Steps to Better Water Management
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our app makes it easy to track your water usage and make informed decisions to reduce your
                  environmental impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">1. Track Your Usage</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Log your daily water usage to get a clear picture of your consumption.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">2. Set Goals</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Establish water-saving goals and monitor your progress towards them.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">3. Reduce Consumption</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Receive personalized tips to help you reduce your water usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[#e0f2fe] dark:bg-[#0c4a6e]"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-[#0c4a6e]/50">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features to Help You Save Water
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our app offers a range of features to help you track, manage, and reduce your water usage.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Daily Usage Tracking</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Log your water usage throughout the day to get a clear picture of your consumption.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Goal Setting</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Set personalized water-saving goals and track your progress towards them.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Tips</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Receive tailored recommendations to help you reduce your water usage.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-white dark:bg-[#0c4a6e]"
          id="testimonials"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#e0f2fe] px-3 py-1 text-sm dark:bg-[#0c4a6e]/50">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from real people who have used our app to take control of their water usage.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “Using this app has helped me reduce my water usage by over 20%. I'm saving money and doing my part
                  for the environment.”
                </blockquote>
                <div>
                  <div className="font-semibold">Emily Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Homeowner, San Francisco</div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “This app has made it so easy to track my water usage and set realistic goals. I'm proud to be doing
                  my part to conserve water.”
                </blockquote>
                <div>
                  <div className="font-semibold">Michael Lee</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Apartment Resident, Seattle</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Water Tracker. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}