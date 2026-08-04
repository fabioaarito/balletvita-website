import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { ModalidadesSection } from "@/components/modalidades"
import { TeachersSection } from "@/components/teachers"
import { PalcoSection } from "@/components/palco"
import { InfoCards } from "@/components/info"
import { GallerySection } from "@/components/gallery"
import { TestimonialsSection } from "@/components/testimonials"
import { ContactSection } from "@/components/contact"
import { AssociationSection } from "@/components/association"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ModalidadesSection />
      <TeachersSection />
      <PalcoSection />
      <InfoCards />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <AssociationSection />
      <Footer />
    </main>
  )
}
