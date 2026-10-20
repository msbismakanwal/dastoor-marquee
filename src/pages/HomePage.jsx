import { Hero, Halls, MenuPreview, Functions, About, GalleryPreview, Reviews, Contact } from "../components/HomeSections";
import { VENUE_FACTS } from "../data/venueData";

export default function HomePage() {
  return (
    <>
      <Hero rating={VENUE_FACTS.rating} reviewsCount={VENUE_FACTS.reviewsCount} />
      <Halls />
      <MenuPreview />
      <Functions />
      <About />
      <GalleryPreview />
      <Reviews reviews={VENUE_FACTS.reviews} />
      <Contact />
    </>
  );
}
