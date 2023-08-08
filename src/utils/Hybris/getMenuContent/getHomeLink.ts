function getHomeLink(data: Hybris.PageContent) {
  const homeLinkSlot = data.contentSlots.contentSlot.find((slot) => slot.slotId === 'HomepageNavLinkSlot');
  if (homeLinkSlot) {
    const homeLinkComponent = homeLinkSlot.components.component.find(
      (component) => component.uid === 'HomepageNavLink',
    );
    if (homeLinkComponent) {
      return {
        itemId: null,
        uid: homeLinkComponent.uid,
        title: homeLinkComponent.linkName,
        categoryCode: null,
        children: [],
      } as Hybris.MenuElements;
    }
  }
}
export default getHomeLink;
