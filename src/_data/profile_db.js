import {
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaWrench,
  FaUser,
  FaIdBadge,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

// Contact details
const margin_end = "me-3";
export const contactDetailsData = {
  name: {
    type: "Name",
    text: "Samuel K. Ablordeppey",
    icon: <FaUser className={margin_end} />,
  },
  profile: {
    type: "Profile",
    text: "Data Analyst",
    icon: <FaIdBadge className={margin_end} />,
  },
  location: {
    type: "Location",
    text: "Kumasi - Ghana",
    icon: <FaMapMarkerAlt className={margin_end} />,
  },
  email: {
    type: "Email",
    text: "jhayphix05@gmail.com",
    icon: <FaEnvelope className={margin_end} />,
  },
  phone: {
    type: "Phone",
    text: "+233 248 359 918",
    icon: <FaPhone className={margin_end} />,
  },
};

export const contactSocialIconsData = [
  {
    name: "whatsapp",
    title: "Whatsapp",
    url: "https://wa.me/233248359918?text=Hello Jhay, I need your service!!",
    target: "_blank",
    style: "text_whatsapp",
    icon: <FaWhatsapp className="social_icon" />,
  },
  {
    name: "twitter",
    title: "Twitter",
    url: "https://wa.me/233248359918?text=Hello Jhay, I need your service!!",
    target: "_blank",
    style: "text_twitter",
    icon: <FaTwitter className="social_icon" />,
  },
  {
    name: "github",
    title: "Github",
    url: "https://github.com/jhayphix",
    target: "_blank",
    style: "text_secondary_1",
    icon: <FaGithub className="social_icon" />,
  },
  {
    name: "facebook",
    title: "Facebook",
    url: "https://wa.me/233248359918?text=Hello Jhay, I need your service!!",
    target: "_blank",
    style: "text_facebook",
    icon: <FaFacebook className="social_icon" />,
  },
];

export const aboutMeContentData = [
  {
    id: 1,
    text: "I am a skilled data analyst with a passion for transforming raw data into meaningful insights.",
  },
  {
    id: 2,
    text: "Over the course of three years, I've honed my expertise in essential tools like Excel, Tableau, SQL, and Python. ",
  },
  {
    id: 3,
    text: "Specifically mastering data cleaning, exploration, and visualization. ",
  },
  {
    id: 4,
    text: "My commitment to delivering impactful results through data analysis is what drives me, and I look forward to sharing my insights with you through my portfolio.",
  },
];

export const skillsRatingsData = [
  {
    id: 1,
    name: "Excel",
    rate: "91",
  },
  {
    id: 2,
    name: "Tableau",
    rate: "95",
  },
  {
    id: 3,
    name: "SQL",
    rate: "85",
  },
  {
    id: 4,
    name: "Python",
    rate: "80",
  },
  {
    id: 5,
    name: "Pandas",
    rate: "87",
  },
  {
    id: 6,
    name: "Data cleaning",
    rate: "93",
  },
  {
    id: 7,
    name: "Data Exploration",
    rate: "91",
  },
  {
    id: 8,
    name: "Data Visualization",
    rate: "95",
  },
];
