import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThirdSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join us in the fight against cancer. Early detection can make all the difference.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
      >
        <Link href="#contact">Get Started</Link>
      </Button>
    </section>
  )
}
