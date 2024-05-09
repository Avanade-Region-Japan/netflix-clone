// import { expect, jest, test, describe, it, build } from '@jest/globals';
// import { tmdbApi } from './discover';
// import { Mock, UnknownFunction } from 'jest-mock';
// import { TMDB_V3_API_KEY } from "src/constant";

// describe('tmdbApi', () => {
//   const MEDIA_TYPE = 'movie';

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should call getVideosByMediaTypeAndGenreId endpoint with the correct parameters', async () => {
//     const genreId = 123;
//     const page = 1;

//     const mockQueryFn = jest.fn();
//     const mockTransformResponseFn = jest.fn();

//     const mockApi = tmdbApi.injectEndpoints({
//       endpoints: (build: { query: (arg0: { query: Mock<UnknownFunction>; transformResponse: Mock<UnknownFunction>; }) => any; }) => ({
//         getVideosByMediaTypeAndGenreId: build.query({
//           query: mockQueryFn,
//           transformResponse: mockTransformResponseFn,
//         }),
//       }),
//     });

//     await mockApi.endpoints.getVideosByMediaTypeAndGenreId.initiate({
//       mediaType: MEDIA_TYPE,
//       genreId,
//       page,
//     });

//     expect(mockQueryFn).toHaveBeenCalledWith({
//       url: `/discover/${MEDIA_TYPE}`,
//       params: { api_key: TMDB_V3_API_KEY, with_genres: genreId, page },
//     });
//     expect(mockTransformResponseFn).toHaveBeenCalled();
//   });

//   it('should call getVideosByMediaTypeAndCustomGenre endpoint with the correct parameters', async () => {
//     const apiString = 'popular';
//     const page = 1;

//     const mockQueryFn = jest.fn();
//     const mockTransformResponseFn = jest.fn();

//     const mockApi = tmdbApi.injectEndpoints({
//       endpoints: (build) => ({
//         getVideosByMediaTypeAndCustomGenre: build.query({
//           query: mockQueryFn,
//           transformResponse: mockTransformResponseFn,
//         }),
//       }),
//     });

//     await mockApi.endpoints.getVideosByMediaTypeAndCustomGenre.initiate({
//       mediaType: MEDIA_TYPE,
//       apiString,
//       page,
//     });

//     expect(mockQueryFn).toHaveBeenCalledWith({
//       url: `/${MEDIA_TYPE}/${apiString}`,
//       params: { api_key: TMDB_V3_API_KEY, page },
//     });
//     expect(mockTransformResponseFn).toHaveBeenCalled();
//   });

//   it('should call getAppendedVideos endpoint with the correct parameters', async () => {
//     const id = 123;

//     const mockQueryFn = jest.fn();

//     const mockApi = tmdbApi.injectEndpoints({
//       endpoints: (build) => ({
//         getAppendedVideos: build.query({
//           query: mockQueryFn,
//         }),
//       }),
//     });

//     await mockApi.endpoints.getAppendedVideos.initiate({
//       mediaType: MEDIA_TYPE,
//       id,
//     });

//     expect(mockQueryFn).toHaveBeenCalledWith({
//       url: `/${MEDIA_TYPE}/${id}`,
//       params: { api_key: TMDB_V3_API_KEY, append_to_response: 'videos' },
//     });
//   });

//   it('should call getSimilarVideos endpoint with the correct parameters', async () => {
//     const id = 123;

//     const mockQueryFn = jest.fn();

//     const mockApi = tmdbApi.injectEndpoints({
//       endpoints: (build) => ({
//         getSimilarVideos: build.query({
//           query: mockQueryFn,
//         }),
//       }),
//     });

//     await mockApi.endpoints.getSimilarVideos.initiate({
//       mediaType: MEDIA_TYPE,
//       id,
//     });

//     expect(mockQueryFn).toHaveBeenCalledWith({
//       url: `/${MEDIA_TYPE}/${id}/similar`,
//       params: { api_key: TMDB_V3_API_KEY },
//     });
//   });
// });

// function beforeEach(arg0: () => void) {
//     throw new Error('Function not implemented.');
// }
