import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

async function fetchLinksData(queryString: string, localeSuffix: string): Promise<Hybris.Components> {
  return await apiFetch<Hybris.Components>(
    `${BASESITE_URL}/cms/components?componentIds=${queryString}&${localeSuffix}`,
  );
}

function mapLinkEntriesToFooterLinks(entries: Hybris.Component[]): Hybris.FooterLink[] {
  return entries.map(({ uid, linkName, url }) => ({
    key: uid || '',
    name: linkName || '',
    url: url || '',
  }));
}

async function getFooterLinks(data: Hybris.PageContent, localeSuffix: string): Promise<Hybris.FooterLink[][]> {
  const footerNav = data.contentSlots.contentSlot
    .find((slot) => slot.slotId === 'FooterSlot')
    ?.components.component.find((component) => component.uid === 'FooterNavigationComponent');

  if (footerNav) {
    const queryPolicyLinks = footerNav.navigationNode?.children.map((child) => {
      if (child.uid === 'SAPCommerceNavNode' || child.uid === 'SAPCustomerExperienceNavNode') {
        return child.children.map((child) => child.entries.map((entry) => entry.itemId));
      }
      return [];
    });

    const querySocialLinks = footerNav.navigationNode?.children.map((child) => {
      if (child.uid === 'FollowUsNavNode') {
        return child.children.map((child) => child.entries.map((entry) => entry.itemId));
      }
      return [];
    });

    const queryLinks = [queryPolicyLinks, querySocialLinks];

    const [policyLinks, socialLinks] = await Promise.all(
      queryLinks.map(async (element) => {
        try {
          const contentLinks = await fetchLinksData(element?.flat(Infinity).join(',') || '', localeSuffix);

          if (contentLinks && contentLinks.component) {
            return mapLinkEntriesToFooterLinks(contentLinks.component);
          }
        } catch (error) {
          console.error('cannot fetch', error);
        }
      }),
    );

    return [policyLinks ?? [], socialLinks ?? []];
  }
  return [];
}

export default getFooterLinks;
