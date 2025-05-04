'use client';

import { ChatBubble } from '@/components/chat-bubble';
import { FAQCard } from '@/components/faq-card';
import { FeatureCard } from '@/components/feature-card';
import { Button } from '@packages/ui/src/components/base/button';
import { Card } from '@packages/ui/src/components/base/card';

import { BookOpen, CheckCircle, MessageCircle, Receipt, Wallet } from 'lucide-react';

const features = [
    {
        icon: Wallet,
        title: 'Pembayaran Online',
        items: [
            'Terima pembayaran via QRIS, transfer bank',
            'Anak kos bisa bayar kapan aja',
            'Aman, kerja sama dengan Midtrans'
        ]
    },
    {
        icon: Receipt,
        title: 'Pencatatan Otomatis',
        items: [
            'Langsung tercatat kalau ada yang bayar',
            'Kirim kwitansi otomatis ke penghuni',
            'Gak perlu repot catat manual'
        ]
    },
    {
        icon: BookOpen,
        title: 'Pembukuan Lengkap',
        items: ['Catat pemasukan & pengeluaran', 'Hitung cicilan KPR & gaji staff', 'Laporan keuangan otomatis']
    },
    {
        icon: BookOpen,
        title: 'Kelola Perawatan',
        items: ['Jadwal service AC & cleaning', 'Catat renovasi & perbaikan', 'Koordinasi dengan vendor']
    },
    {
        icon: MessageCircle,
        title: 'Komunikasi Mudah',
        items: [
            'Kirim tagihan via WhatsApp & email',
            'Broadcast pengumuman ke semua penghuni',
            'Chat langsung dengan penghuni'
        ]
    }
];

const faqs = [
    {
        question: 'Kalau saya gaptek gimana?',
        answer: 'Tim kami akan bantu setup dan ajari sampai Ibu bisa. Ada panduan lengkap + support 24/7 via WhatsApp 👩‍💻'
    },
    {
        question: 'Data saya aman gak?',
        answer: 'Aman Bu! Kami terdaftar di KOMINFO dan pakai sistem pembayaran Midtrans yang sudah dipercaya 🔒'
    },
    {
        question: 'Kalau mau berhenti gimana?',
        answer: 'Bisa stop kapan aja Bu, gak ada kontrak. Tapi coba dulu gratis 14 hari ya! 😊'
    },
    {
        question: 'Bisa dipakai di HP?',
        answer: 'Bisa Bu! Buka di browser HP aja, gak perlu install app khusus 📱'
    }
];

export default function Home() {
    return (
        <main className='flex-1 p-3 pt-42'>
            <div className='mx-auto max-w-xl space-y-3'>
                <ChatBubble isUser time='14:58'>
                    <p>
                        Aduhh bingung nih, anak kos pada telat bayar... Tiap bulan harus nagih satu-satu, belum lagi
                        nyatet di buku suka ilang 😫 Ada yang bisa bantu gak ya? 🙏
                    </p>
                </ChatBubble>

                <ChatBubble time='14:59' avatar='/placeholder.svg' username='tele - klolakos'>
                    <p>
                        Waah, pasti capek ya Bu harus nagih satu-satu... Apalagi kalau bukunya ilang, waduh... 😔 Ibu
                        punya berapa kamar kos?
                    </p>
                </ChatBubble>

                <ChatBubble isUser time='15:00'>
                    <p>
                        Ada 15 kamar, udah 3 tahun berjalan. Tiap bulan pasti ada aja yang telat bayar, kadang sampe
                        lupa siapa yang udah bayar siapa yang belum 😅
                    </p>
                </ChatBubble>

                <ChatBubble time='15:01' avatar='/placeholder.svg' username='tele - klolakos'>
                    <div className='space-y-3'>
                        <p>
                            Nah, Ibu gak sendirian kok yang ngalamin ini. Banyak pemilik kos yang sama capeknya. Makanya
                            kami bikin SuperKos, aplikasi khusus buat bantu ibu-ibu pemilik kos 🤗
                        </p>

                        <div className='rounded-[0.7rem] bg-[#F0F9FF] p-3'>
                            <p className='font-medium text-[#0369A1]'>Dengan SuperKos, Ibu bisa:</p>
                            <ul className='mt-2 space-y-2 text-[#0369A1]'>
                                <li className='flex items-center gap-2'>
                                    <CheckCircle className='h-4 w-4' />
                                    <span>Gak perlu capek-capek nagih manual</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckCircle className='h-4 w-4' />
                                    <span>Gak takut buku pembukuan ilang</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckCircle className='h-4 w-4' />
                                    <span>Hemat waktu & tenaga</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ChatBubble>

                <ChatBubble isUser time='15:02'>
                    <p>Wah menarik nih... Emang fiturnya apa aja ya? Saya gaptek soalnya, takut ribet 😅</p>
                </ChatBubble>

                <ChatBubble time='15:03' avatar='/placeholder.svg' username='tele - klolakos'>
                    <div className='space-y-3'>
                        <p>Tenang Bu, SuperKos gampang banget dipakenya! Coba lihat fitur-fitur ini ya... 😊</p>

                        <div className='space-y-3'>
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </ChatBubble>

                <ChatBubble isUser time='15:04'>
                    <p>MasyaAllah lengkap banget... Tapi biayanya berapa ya? Takut mahal 🙈</p>
                </ChatBubble>

                <ChatBubble time='15:05' avatar='/placeholder.svg' username='tele - klolakos'>
                    <div className='space-y-3'>
                        <p>Ibu gak perlu khawatir, kami ada PROMO spesial lho! 🎉</p>

                        <Card className='overflow-hidden rounded-[0.7rem] border-0 shadow-sm'>
                            <div className='bg-[#00A884] p-4 text-white'>
                                <div className='text-center'>
                                    <h3 className='text-lg font-bold'>Harga PROMO Terbatas!</h3>
                                    <p className='text-3xl font-bold'>
                                        Rp6.000<span className='text-base'>/bulan/kamar</span>
                                    </p>
                                </div>
                            </div>
                            <div className='p-4'>
                                <ul className='space-y-2'>
                                    <li className='flex items-center gap-2'>
                                        <CheckCircle className='h-4 w-4 text-[#00A884]' />
                                        <span className='text-sm'>Akses semua fitur SuperKos</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckCircle className='h-4 w-4 text-[#00A884]' />
                                        <span className='text-sm'>Dibayar per 4 bulan</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <CheckCircle className='h-4 w-4 text-[#00A884]' />
                                        <span className='text-sm'>Setup account GRATIS</span>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </ChatBubble>

                <ChatBubble isUser time='15:06'>
                    <p>Hmm... Saya masih ada beberapa pertanyaan nih 🤔</p>
                </ChatBubble>

                <ChatBubble time='15:07' avatar='/placeholder.svg' username='tele - klolakos'>
                    <div className='space-y-3'>
                        <p>Silakan Bu, mungkin pertanyaan Ibu sama dengan yang sering ditanyakan 😊</p>

                        <div className='space-y-3'>
                            {faqs.map((faq, index) => (
                                <FAQCard key={index} {...faq} />
                            ))}
                        </div>
                    </div>
                </ChatBubble>

                {/* Final CTA */}
                <div className='rounded-[0.7rem] bg-white p-4 text-center shadow-sm'>
                    <h2 className='mb-2 text-lg font-bold text-[#111B21]'>Mau Coba Gratis Dulu, Bu?</h2>
                    <p className='mb-4 text-sm text-[#667781]'>Gratis 14 hari pertama, bisa di-cancel kapan saja 🙏</p>
                    <div className='space-y-2'>
                        <Button className='w-full bg-[#00A884] hover:bg-[#027d63]' size='lg'>
                            Daftar Sekarang (Gratis 14 Hari)
                        </Button>
                        <Button
                            variant='outline'
                            className='w-full border-[#00A884] text-[#00A884] hover:bg-[#00A884] hover:text-white'
                            size='lg'>
                            Chat Admin SuperKos (0813-8258-6868)
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
