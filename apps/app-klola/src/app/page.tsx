import HomePage from '@/shared/components/HomePage';
import { PageSEO } from '@/shared/components/seo';
import { siteMetadata } from '@/data/site-metadata';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <>
          <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
          <HomePage />
        </>
    );
};

export default Page;
