import { Zodios, type ZodiosOptions, makeApi } from '@zodios/core';

import { z } from 'zod';

const TokenRequestSchema = z.object({ phone: z.string(), password: z.string() }).partial().passthrough();
const TokenResponseSchema = z.object({ token: z.string() }).partial().passthrough();
const ErrorResponseSchema = z.object({ message: z.string() }).partial().passthrough();
const OrganizationSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    phone: z.number(),
    nib: z.string(),
    npwp: z.string(),
    address: z.string(),
    email: z.string().email(),
    image: z.string()
  })
  .partial()
  .passthrough();
const CreateOrganizationRequestSchema = z
  .object({
    name: z.string(),
    phone: z.number(),
    nib: z.string(),
    npwp: z.string(),
    address: z.string(),
    email: z.string().email(),
    image: z.string()
  })
  .partial()
  .passthrough();
const Product = z
  .object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    price: z.number(),
    stock: z.number(),
    createdAt: z.string().datetime({ offset: true })
  })
  .passthrough();

export const schemas = {
  TokenRequestSchema,
  TokenResponseSchema,
  ErrorResponseSchema,
  OrganizationSchema,
  CreateOrganizationRequestSchema,
  Product
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/auth/employee/token',
    alias: 'authEmployeeToken',
    description: `Get token to access the app`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: TokenRequestSchema
      }
    ],
    response: z.object({ token: z.string() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.object({ message: z.string() }).partial().passthrough()
      }
    ]
  },
  {
    method: 'post',
    path: '/auth/token',
    alias: 'authToken',
    description: `Get token`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: TokenRequestSchema
      }
    ],
    response: z.object({ token: z.string() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.object({ message: z.string() }).partial().passthrough()
      }
    ]
  },
  {
    method: 'get',
    path: '/organization',
    alias: 'getOrganization',
    description: `Get organization`,
    requestFormat: 'json',
    response: OrganizationSchema,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.object({ message: z.string() }).partial().passthrough()
      }
    ]
  },
  {
    method: 'post',
    path: '/organization',
    alias: 'createOrganization',
    description: `Create organization`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateOrganizationRequestSchema
      }
    ],
    response: OrganizationSchema,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.object({ message: z.string() }).partial().passthrough()
      }
    ]
  },
  {
    method: 'get',
    path: '/products',
    alias: 'getProducts',
    requestFormat: 'json',
    response: z
      .object({
        data: z.array(Product),
        pagination: z
          .object({
            current_page: z.number().int(),
            per_page: z.number().int(),
            total_items: z.number().int(),
            total_pages: z.number().int()
          })
          .passthrough()
      })
      .passthrough()
  },
  {
    method: 'post',
    path: '/products',
    alias: 'createProduct',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: Product
      }
    ],
    response: Product
  },
  {
    method: 'get',
    path: '/products/:id',
    alias: 'getProductById',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string()
      }
    ],
    response: Product
  },
  {
    method: 'delete',
    path: '/products/:id',
    alias: 'deleteProduct',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string()
      }
    ],
    response: z.void()
  }
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
