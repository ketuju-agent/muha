import React from 'react';

import Head from 'next/head';

import { siteMetadata } from '@/data/site-metadata';

import type { ImageObject } from 'schema-dts';

interface CommonSEOProps {
    title: string;
    description: string;
    ogType: string;
    ogImage: string | ImageObject[];
    twImage: string;
    canonicalUrl?: string;
}

const CommonSEO = ({ title, description, ogType, ogImage, twImage, canonicalUrl }: CommonSEOProps) => {
    // Get pathname from headers on server-side
    const pathname = '/';

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta property='og:url' content={`${siteMetadata.siteUrl}${pathname}`} />
                <meta property='og:type' content={ogType} />
                <meta property='og:site_name' content={siteMetadata.title} />
                <meta property='og:description' content={description} />
                <meta property='og:title' content={title} />
                {Array.isArray(ogImage) ? (
                    ogImage.map(({ url }) => <meta property='og:image' content={`${url}`} key={`${url}`} />)
                ) : (
                    <meta property='og:image' content={ogImage} key={ogImage} />
                )}

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@tailscale' />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                <meta name='twitter:image' content={twImage} />

                <link rel='canonical' href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${pathname}`} />
            </Head>
        </>
    );
};

interface PageSEOProps {
    title: string;
    description: string;
    image?: string;
}

export const PageSEO = ({ title, description, image }: PageSEOProps) => {
    const socialImagePath = image ? image : siteMetadata.socialBanner;
    const ogImageUrl = socialImagePath.includes('http') ? socialImagePath : siteMetadata.siteUrl + socialImagePath;
    const twImageUrl = ogImageUrl;
    return (
        <CommonSEO title={title} description={description} ogType='website' ogImage={ogImageUrl} twImage={twImageUrl} />
    );
};

export const TagSEO = ({ title, description }: PageSEOProps) => {
    const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
    const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
    const pathname = '/';
    return (
        <>
            <CommonSEO
                title={title}
                description={description}
                ogType='website'
                ogImage={ogImageUrl}
                twImage={twImageUrl}
            />
            <Head>
                <link
                    rel='alternate'
                    type='application/rss+xml'
                    title={`${description} - RSS feed`}
                    href={`${siteMetadata.siteUrl}${pathname}/feed.xml`}
                />
            </Head>
        </>
    );
};
