import { ConfigurationType } from './configuration';
import { expect, jest, test, describe, it } from '@jest/globals';

describe('ConfigurationType', () => {
  const base_url = 'https://api.themoviedb.org/3';
  const secure_base_url = 'https://api.themoviedb.org/3/secure';
  const backdrop_sizes = ['w300', 'w500'];
  const logo_sizes = ['w100', 'w200'];
  const poster_sizes = ['w400', 'w600'];
  const profile_sizes = ['w150', 'w250'];
  const still_sizes = ['w700', 'w900'];
  const change_keys = ['key1', 'key2'];

  it('should have the correct properties', () => {
    const configuration: ConfigurationType = {
      images: {
        base_url,
        secure_base_url,
        backdrop_sizes,
        logo_sizes,
        poster_sizes,
        profile_sizes,
        still_sizes,
      },
      change_keys,
    };

    expect(configuration.images.base_url).toBe(base_url);
    expect(configuration.images.secure_base_url).toBe(secure_base_url);
    expect(configuration.images.backdrop_sizes).toEqual(backdrop_sizes);
    expect(configuration.images.logo_sizes).toEqual(logo_sizes);
    expect(configuration.images.poster_sizes).toEqual(poster_sizes);
    expect(configuration.images.profile_sizes).toEqual(profile_sizes);
    expect(configuration.images.still_sizes).toEqual(still_sizes);
    expect(configuration.change_keys).toEqual(change_keys);
  });
});