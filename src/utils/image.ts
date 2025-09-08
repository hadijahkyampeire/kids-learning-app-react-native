import type { ImageSourcePropType } from 'react-native';

// Accept a remote URL string or a local require() number
export type Img = string | number;

export const imgSrc = (img?: Img): ImageSourcePropType | undefined =>
  typeof img === 'string' ? { uri: img } : img;