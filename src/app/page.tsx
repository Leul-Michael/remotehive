import { Button } from "@/components/button"
import Section from "@/components/section-wrapper"
import { HeroImage } from "./svgs"
import PopularCategories from "@/components/hero/popular-categories"

export default function Home() {
  return (
    <>
      <Section
        className="hero bg-accent-blue gap-0 text-primary-foreground"
        full
      >
        <div className="flex flex-col gap-8 items-center justify-center h-full min-h-[90vh] max-w-[900px] mx-auto w-full text-center">
          <p className="text-secondary/80 font-semibold">
            Super, Simple, Reliable
          </p>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold leading-none">
            Find Remote Only Jobs from anywhere!
          </h1>
          <p className="md:text-2xl text-xl text-secondary/80 font-medium max-w-[800px] mx-auto">
            Find Jobs, Create Jobs, and Work remotely with Professional, with
            the Help of Remote Hive.
          </p>
          <div className="flex items-center gap-8">
            <Button size="lg" variant="cta" className="text-lg">
              Find a Job
            </Button>
            <Button size="lg" variant="secondary" className="text-lg">
              Create a Job
            </Button>
          </div>
        </div>
        <div className="light-accent flex -mt-20 flex-col justify-center items-center">
          <HeroImage />
        </div>
      </Section>
      <Section className="py-20">
        <PopularCategories />
      </Section>
    </>
  )
}
