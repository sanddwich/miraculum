import CaseInterface from "./CaseInterface";
import MailSettings from "./MailSettings";
import PartnerInterface from "./PartnerInterface";
import SocialLink from "./SocialLink";

export default interface ConfigInterface {
  url: string
  letters: string[]
  partners: PartnerInterface[]
  deeSite: string
  socialLinks: SocialLink[]
  cases: CaseInterface[]
  phoneMinLength: number
  nameMinLength: number
  mailSettings: MailSettings
}