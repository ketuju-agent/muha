import { Map } from '@/components/ui/Map/map';
import { CallToAction } from '@/components/ui/call-to-action';
import FeatureDivider from '@/components/ui/feature-divider';
import Features from '@/components/ui/features';
import { Hero } from '@/components/ui/hero';
import { SolarAnalytics } from '@/components/ui/solar-analytics';
import Testimonial from '@/components/ui/testimonial';

export default function Home() {
    return (
        <main className='relative mx-auto flex flex-col'>
            <div className='pt-56'>
                <Hero />
            </div>
            <div id='feature' className='mt-52 px-4 xl:px-0'>
                <Features />
            </div>
            <div id='testimony' className='mt-32 px-4 xl:px-0'>
                <Testimonial />
            </div>
            <FeatureDivider className='my-16 max-w-6xl' />
            <div className='px-4 xl:px-0'>
                <Map />
            </div>
            <FeatureDivider className='my-16 max-w-6xl' />
            <div className='mt-12 mb-40 px-4 xl:px-0'>
                <SolarAnalytics />
            </div>
            <div className='mt-10 mb-40 px-4 xl:px-0'>
                <CallToAction />
            </div>
        </main>
    );
}
