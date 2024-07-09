import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
              alt="homeLink"
              className="object-contain"
            />
          </a>
          <p className="leading-7 text-base font-montserrat text-white-400 sm:max-w-sm mt-6">
            Get shoes ready for the new terms aat your nearest Nike store . Find
            Your perfect size in store . Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((socialLink, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
              >
                <img src={socialLink.src} alt="links" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div key={link}>
              <h1 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h1>

              <ul>
                {link.links.map((item) => (
                  <li
                    key={item}
                    className="mt-3 leading-normal cursor-pointer text-base 
                    text-white-400 hover:text-coral-red"
                  >
                    <a>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
