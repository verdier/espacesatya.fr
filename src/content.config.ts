import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const praticiens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/praticiens' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    titre: z.string(),
    sousTitre: z.string().optional(),
    accroche: z.string(),
    description: z.string().optional(),
    specialites: z.array(z.string()),
    photo: image(),
    photoAlt: z.string(),
    telephone: z.string().optional(),
    email: z.string().optional(),
    siteWeb: z.string().optional(),
    doctolib: z.string().optional(),
    tarifs: z.array(z.object({
      prestation: z.string(),
      prix: z.string(),
      duree: z.string().optional(),
      note: z.string().optional(),
    })).optional(),
    ordre: z.number().default(99),
    actif: z.boolean().default(true),
    nouveau: z.boolean().default(false),
  }),
});

export const collections = { praticiens };
