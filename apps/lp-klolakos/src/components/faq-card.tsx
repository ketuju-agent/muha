'use client';

interface FAQCardProps {
    question: string;
    answer: string;
}

export function FAQCard({ question, answer }: FAQCardProps) {
    return (
        <div className='rounded-[0.7rem] bg-white p-3 shadow-sm'>
            <p className='font-medium text-[#111B21]'>Q: {question}</p>
            <p className='mt-2 text-sm text-[#667781]'>{answer}</p>
        </div>
    );
}
