import { BASE_URL } from 'utils/Hybris/endpoints';

function getCartHero(data: Hybris.PageContent) {
  const contentSlot = data.contentSlots.contentSlot.find((slot) => slot.slotId === 'HeroBannerContentSlot');
  const media = contentSlot?.components.component.find((component) => component.uid === 'PerfectPictureBanner')?.media;
  if (media) {
    return {
      media: {
        code: media.code ?? '',
        mime: media.mime ?? '',
        url: `${BASE_URL}${media.url}`,
        altText: media.altText ?? contentSlot.name,
      },
      name: contentSlot.name,
    };
  }
  return { name: '', media: { code: '', mime: '', altText: '', url: '' } };
}

export default getCartHero;
