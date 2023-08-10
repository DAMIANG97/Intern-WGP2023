import getFooterLinks from 'utils/Hybris/getFooterContent/getFooterLinks';
import getFooterText from 'utils/Hybris/getFooterContent/getFooterText';

async function getFooterContent(data: Hybris.PageContent, localeSuffix: string): Promise<Hybris.FooterComponentProps> {
  try {
    const footerLinks = await getFooterLinks(data, localeSuffix);
    const footerText = await getFooterText(data);

    const filteredContent: Hybris.FooterComponentProps = {
      copyrightText: footerText[0] || '',
      socialText: footerText[1] || '',
      policyLinks: footerLinks[0],
      socialLinks: footerLinks[1],
    };

    return filteredContent;
  } catch (error) {
    return {
      copyrightText: '',
      socialText: '',
      policyLinks: [],
      socialLinks: [],
    };
  }
}
export default getFooterContent;
