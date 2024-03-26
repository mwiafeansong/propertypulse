import Link from 'next/link';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FreaturedProperties from '@/components/FreaturedProperties';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FreaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
