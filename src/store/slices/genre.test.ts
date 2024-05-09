import { useGetGenresQuery } from './genre';
import { expect, jest, test, describe, it, beforeEach, afterEach } from '@jest/globals';
import { tmdbApi } from "src/store/slices/apiSlice";
import { TMDB_V3_API_KEY } from "src/constant";
import { Genre } from 'src/types/Genre';
import { PaginatedMovieResult, MEDIA_TYPE } from "src/types/Common";

const mediaType = MEDIA_TYPE.Movie;
describe('useGetGenresQuery', () => {
    const mockGenres: Genre[] = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' },
        { id: 3, name: 'Drama' },
    ];

    // beforeEach(() => {
    //     jest.spyOn(useGetGenresQuery, 'useGetGenresQuery').mockResolvedValue(mockGenres);
    // });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should fetch genres for a specific media type', async () => {
        const expectedUrl = `/genre/${mediaType}/list`;
        const expectedParams = { api_key: TMDB_V3_API_KEY };

        useGetGenresQuery(mediaType);

        expect(useGetGenresQuery).toHaveBeenCalledWith(expectedUrl, expectedParams);
    });
});

it('should transform the response and return the genres', async () => {
    const result = useGetGenresQuery(mediaType);

    expect(result).toEqual([
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' },
        { id: 3, name: 'Drama' },
    ]);
});
