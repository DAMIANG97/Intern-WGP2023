import { BASE_URL } from 'utils/Hybris/endpoints';

interface HeroContent {
  media: {
    code: string;
    mime: string;
    altText: string;
    url: string;
  };
  name: string;
}

function getHeroContentSearch(data: Hybris.PageContent): HeroContent {
  const slot = data.contentSlots.contentSlot.find((slot) => slot.slotId === 'Section2Slot-search');
  const banners = slot?.components.component.find((component) => component.uid === 'PerfectPictureBanner');

  const media = {
    code: '',
    mime: '',
    altText: '',
    url: '',
  };

  const heroPicture: HeroContent = {
    name: banners?.name ?? '',
    media: banners?.media
      ? {
          ...media,
          ...banners.media,
          url: `${BASE_URL}${banners.media.url}`,
        }
      : media,
  };

  return heroPicture;
}

export default getHeroContentSearch;
