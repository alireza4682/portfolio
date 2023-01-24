import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/facebook.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/seyedalireza-arezoumandan/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinImg} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/alireza4682"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={githubImg} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
