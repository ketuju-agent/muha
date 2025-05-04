
// interface UserState {
//   user: RequestGetAllUserResponse | null;
//   isLoading: boolean;
//   error: string | null;
//   fetchUser: (id: string) => Promise<void>;
// }

// const dummyData: RequestGetAllUserResponse = {
//   id: '1',
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   role: 'USER',
// };

// export const useUserStore = create<UserState>((set) => ({
//   user: null,
//   isLoading: false,
//   error: null,
//   fetchUser: async (id: string) => {
//     set(() => ({ isLoading: true, error: null }));
//     try {
//       const userData = dummyData;
//       set(() => ({ user: userData, isLoading: false }));
//     } catch (error: unknown) {
//       const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
//       set(() => ({ error: errorMessage, isLoading: false }));
//     }
//   }
// }));

