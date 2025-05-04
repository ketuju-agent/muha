import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import apiClient from '@/shared/api/apiClient';

/**
 * Hook for fetching all products
 * @returns Query result with products data
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => apiClient.getProducts()
  });
};

/**
 * Hook for fetching a product by ID
 * @param id - Product ID
 * @returns Query result with product data
 */
export const useProductById = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => apiClient.getProductById({ params: { id } }),
    enabled: !!id
  });
};

/**
 * Hook for deleting a product
 * @returns Mutation result for product deletion
 *
 * On success, invalidates the cache for the products list query.
 */
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.deleteProduct(undefined, { params: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });
};
