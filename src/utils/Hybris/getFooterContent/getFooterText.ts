async function getFooterText(data: Hybris.PageContent): Promise<string[]> {
  const footerNav = data.contentSlots.contentSlot
    .find((slot) => slot.slotId === 'FooterSlot')
    ?.components.component.find((component) => component.uid === 'FooterNavigationComponent');

  const footerText: string[] = [];

  if (footerNav) {
    const copyrightText = footerNav.notice;
    const socialText = footerNav.navigationNode?.children.find((child) => child.uid === 'FollowUsNavNode')?.title;

    if (copyrightText && socialText) {
      footerText.push(copyrightText, socialText);
    }
  }
  return footerText;
}

export default getFooterText;
