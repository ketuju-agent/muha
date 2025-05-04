import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ServiceSection } from '@/components/service-section';
import { Button } from '@packages/ui/components/base/button';
import { Card, CardContent } from '@packages/ui/components/base/card';

export default function AquascapeServices() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />

            <main className='mx-auto mt-24 max-w-[480px] space-y-6 px-4 py-4'>
                <Card className='overflow-hidden border-none bg-green-50'>
                    <CardContent className='p-4'>
                        <h1 className='mb-2 text-2xl font-bold text-green-800'>
                            Jasa Design Aquascape dan Maintenance
                        </h1>
                        <p className='mb-4 text-sm text-green-700'>
                            Layanan dan support yang profesional untuk aquascape Anda
                        </p>
                        <Button className='w-full bg-green-500 text-white hover:bg-green-600'>Hubungi Kami</Button>
                    </CardContent>
                </Card>

                <ServiceSection
                    title='Jasa Installasi Aquarium Baru'
                    description='Kami bisa melakukan installasi aquarium aquascape untuk ruang tamu atau kantor Anda.'
                    services={[
                        'Design untuk Aquascape',
                        'Design Paludarium',
                        'Design Vivarium',
                        'Design Aquarium Ikan Hias Air Tawar',
                        'Green Wall'
                    ]}
                    imageSrc='/placeholder.svg'
                />

                <ServiceSection
                    title='Jasa Redesign'
                    description='Ingin memperbaharui atau mengembangkan aquarium lama Anda?'
                    services={[
                        'Redesign Aquascape',
                        'Pembersihan dan pembenahan aquarium lama',
                        'Penambahan equipment baru',
                        'Konsultasi perawatan dan perancangan'
                    ]}
                    imageSrc='/placeholder.svg'
                />

                <ServiceSection
                    title='Jasa Maintenance / Perawatan'
                    description='Kami dapat membantu merawat aquarium di rumah atau kantor Anda.'
                    services={[
                        'Pengecekan air dan trimming rutin',
                        'Pembersihan filter',
                        'Perawatan dan pengecekan peralatan',
                        'Penggantian tanaman dan ikan bila perlu'
                    ]}
                    imageSrc='/placeholder.svg'
                />

                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}
