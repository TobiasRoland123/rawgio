export const getCroppedImageUrl = (url: string | null) => {
  const newUrl = url ? url.replace('/media/games/', '/media/crop/600/400/games/') : 'https://placehold.co/600x400';

  return newUrl;
};
