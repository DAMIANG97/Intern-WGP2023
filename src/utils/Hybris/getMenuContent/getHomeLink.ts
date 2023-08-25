import { RoutePaths } from 'utils/routes';

function getHomeLink(data: Hybris.PageContent) {
  const homeLinkSlot = data.contentSlots.contentSlot.find((slot) => slot.slotId === 'HomepageNavLinkSlot');
  if (homeLinkSlot) {
    const homeLinkComponent = homeLinkSlot.components.component.find(
      (component) => component.uid === 'HomepageNavLink',
    );
    if (homeLinkComponent) {
      return {
        itemId: 'Home',
        uid: homeLinkComponent.uid,
        title: homeLinkComponent.linkName,
        categoryCode: null,
        children: [],
        url: RoutePaths.home,
      } as Hybris.MenuElements;
    }
  }
}
export default getHomeLink;
