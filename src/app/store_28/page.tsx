import Image from 'next/image';
import Hero_28 from './_components/home/Hero_28';
import FeaturedProducts_28 from './_components/home/FeaturedProducts_28';
import { Suspense } from 'react';
import LoadingContainer from './_components/global/LoadingContainer';

export default function Home() {
  return (
    <>
      <Hero_28 />
      {/* <LoadingContainer /> */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts_28 />
      </Suspense>
    </>
  );
}
