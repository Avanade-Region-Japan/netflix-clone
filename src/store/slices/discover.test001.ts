import { test, describe, expect } from '@jest/globals';
import { unwrapResult } from '@reduxjs/toolkit';
import { PaginatedMovieResult, MEDIA_TYPE } from "src/types/Common";
import {
useGetVideosByMediaTypeAndGenreIdQuery,
useGetVideosByMediaTypeAndCustomGenreQuery,
useLazyGetVideosByMediaTypeAndCustomGenreQuery,
useGetAppendedVideosQuery,
useLazyGetAppendedVideosQuery,
useGetSimilarVideosQuery,
useLazyGetSimilarVideosQuery,
} from './discover';

// discoverのテストを書く
describe('discover', () => {
test('fetchDiscoverMovies', async () => {
    // Queryを実行
    const result = await useGetVideosByMediaTypeAndGenreIdQuery({
        mediaType: MEDIA_TYPE.Movie,
        genreId: 123,
        page: 1,
    });
    const unwrappedResult = result;
    // 結果がuseGetVideosByMediaTypeAndGenreIdQuery型であることを確認
    expect(result).toBeInstanceOf(unwrappedResult);
});

// test('fetchDiscoverMoviesByCustomGenre', async () => {
//     // テスト対象の関数を実行
//     const result = await extendedApi.endpoints.getVideosByMediaTypeAndCustomGenre.initiate({
//       mediaType: MEDIA_TYPE,
//       apiString: 'customGenre',
//       page: 1,
//     });
//     // 結果をunwrap
//     const unwrappedResult = unwrapResult(result);
//     // 結果がPaginatedMovieResult型であることを確認
//     expect(unwrappedResult).toBeInstanceOf(PaginatedMovieResult);
// });
// test('fetchAppendedVideos', async () => {
//     // テスト対象の関数を実行
//     const result = await extendedApi.endpoints.getAppendedVideos.initiate({
//         mediaType: MEDIA_TYPE,
//         id: 123,
//     });
//     // 結果をunwrap
//     const unwrappedResult = unwrapResult(result);
//     // 結果がMovieDetail型であることを確認
//     expect(unwrappedResult).toBeInstanceOf(MovieDetail);
// });

// test('fetchSimilarVideos', async () => {
//     // テスト対象の関数を実行
//     const result = await extendedApi.endpoints.getSimilarVideos.initiate({
//       mediaType: MEDIA_TYPE,
//       id: 123,
//     });
//     // 結果をunwrap
//     const unwrappedResult = unwrapResult(result);
//     // 結果がPaginatedMovieResult型であることを確認
//     expect(unwrappedResult).toBeInstanceOf(PaginatedMovieResult);
// });
});
