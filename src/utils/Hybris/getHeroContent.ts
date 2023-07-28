import apiFetch from 'utils/apiFetch';
import { BASE_URL } from 'utils/Hybris/endpoints';

//Types for fetched content

interface HeroContent {
  component: HeroComponent[];
}
interface HeroComponent {
  media: {
    code: string;
    mime: string;
    altText: string;
    url: string;
  };
  headline: string;
  content: string;
  urlLink: string;
  pagination: {
    count: number;
    hasNext: boolean;
    hasPrevious: boolean;
    page: number;
    totalCount: number;
    totalPages: number;
  };
  sorts: [];
}

/**
 * Gets banner names from homepage content data and fetches required images and decriptions.
 */
const getHeroContent = async (data: Hybris.PageContent): Promise<HeroComponentProps[] | []> => {
  const banners = data.contentSlots.contentSlot
    .find((slot) => slot.slotId === 'HeroContentSlot-Homepage')
    ?.components.component.find((component) => component.uid === 'Hero AL')?.banners;
  if (banners) {
    const queryString = banners
      .split(' ')
      .map((string) => {
        const prefix = 'componentIds=';
        return prefix.concat(string).concat('&');
      })
      .join('');
    const url = `${BASE_URL}cms/components?`;
    const content = await apiFetch<HeroContent>(url.concat(queryString));
    const filteredContent: HeroComponentProps[] = content.component.map(({ media, headline, content, urlLink }) => ({
      media,
      headline,
      content,
      urlLink,
    }));
    return filteredContent;
  }
  return [];
};
export default getHeroContent;
