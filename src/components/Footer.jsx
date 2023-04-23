import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-gradient-to-r from-zinc-700 to-gray-900 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-serif font-semibold text-2xl text-yellow">
            ALIREZA AREZOUMANDAN
          </p>
          <p className="font-serif text-md text-yellow">2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
