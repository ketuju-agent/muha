import { defineCollection, z } from "astro:content";
const agents = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    contact: z.array(
      z.object({
        item: z.string(),
      })
    ),
    languages: z.array(
      z.object({
        item: z.string(),
      })
    ),
    stats: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    images: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    office: z.string(),
    officeAddress: z.string(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const sale = defineCollection({
  schema: z.object({
    price: z.string(),
    projectName: z.string(),
    address: z.string(),
    details: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    specs: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    location: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    about: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    aboutImages: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    amenities: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    amenitiesImages: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    video: z.object({
      url: z.string(),
    }),
  }),
});
const rent = defineCollection({
  schema: z.object({
    price: z.string(),
    projectName: z.string(),
    address: z.string(),
    details: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    specs: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    location: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    about: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    aboutImages: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    amenities: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
    amenitiesImages: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    video: z.object({
      url: z.string(),
    }),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
     avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  agents: agents,
  rent: rent,
  sale: sale,
  posts: postsCollection,
  infopages: infopages,
};
