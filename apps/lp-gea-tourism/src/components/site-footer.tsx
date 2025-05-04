import { siteConfig } from '@/config/site';
import { SiteFooterRaizora } from '@packages/ui/components/layouts/footers/footer-raizora';

import { LogoLink } from './logoLink';
import { Button } from './ui/button';

const footerLinks = [
    {
        title: 'Services',
        links: ['Car Rentals', 'Insurance Options', 'Corporate Rentals', 'Special Offers', 'FAQs']
    },
    {
        title: 'Resources',
        links: [
            'Help Center',
            'Privacy Policy',
            'Terms of Service',
            'Accessibility',
            'Vehicle Guides',
            'Customer Testimonials'
        ]
    },
    {
        title: 'Company',
        links: ['About', 'Contact Us', 'Blog', 'Partners', 'Customers', 'Careers', 'Press']
    },
    {
        title: 'Social',
        links: ['Youtube', 'Twitter', 'Instagram', 'Facebook']
    }
];

export function SiteFooter() {
    const githubUrl = siteConfig.links.github;

    return <SiteFooterRaizora logoLink={<LogoLink />} />;
}
