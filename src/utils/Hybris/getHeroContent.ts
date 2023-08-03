import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

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
async function getHeroContent(
  data: Hybris.PageContent,
  locale: string | undefined,
  currency: string,
): Promise<Hybris.HeroComponentProps[] | []> {
  const localeSuffix = `lang=${locale}&curr=${currency}`;
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
    const url = `${BASESITE_URL}/cms/components?`;
    const content = await apiFetch<HeroContent>(`${url}${queryString}${localeSuffix}`);
    const filteredContent: Hybris.HeroComponentProps[] = content.component.map(
      ({ media, headline, content, urlLink }) => ({
        media,
        headline,
        content,
        urlLink,
      }),
    );
    return filteredContent;
  }
  return [];
}
export default getHeroContent;
