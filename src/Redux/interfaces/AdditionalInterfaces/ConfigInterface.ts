import PartnerInterface from "./PartnerInterface";
import SocialLink from "./SocialLink";

export default interface ConfigInterface {
  url: string
  letters: string[]
  partners: PartnerInterface[]
  deeSite: string
  socialLinks: SocialLink[]
}