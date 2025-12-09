import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import TeamSlider from '@/components/TeamSlider';
import Features from '@/components/Features';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <TrustBadges />
      <Testimonials />
      <TeamSlider />
      <Newsletter />
    </>
  );
}
