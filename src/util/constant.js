import { Smartphone, Users, Code, LaptopMinimalCheck } from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.webp";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold-creekcap.webp";
import ThinkRealityImg from "../assets/web-development-portfolio/think-reality.webp";
import AkashMegaMart from "../assets/web-development-portfolio/Akash-Mega-Mart.webp";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.webp";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.webp";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.webp";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt-Mobile-App.webp";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics-Mobile-App.webp";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap-Mobile-App.webp";
// //portfolio
// import nanoflow from "../assets/portfolio/nanoflow.png";
// import padipal from "../assets/portfolio/padipal.png";
// import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "IntueraAi Solution",
  email: "intueraaisolutions@gmail.com",
  phone: "+91-9510880965",
  address: "company address",
  socialLinks: [
    {
      href: "",
      icon: FaLinkedin,
    },
    {
      href: "",
      icon: FaInstagram,
    },
    { href: "", icon: FaXTwitter },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp:
    "https://api.whatsapp.com/send/?phone=9510880965&text&type=phone_number&app_absent=0",
};

export const services = [
  {
    title: "App Development",
    link: "app-development",
    description:
      "We build custom iOS and Android apps that are smooth, scalable, and ready for real-world use. From MVPs to enterprise-grade systems, our mobile solutions are designed to perform — and keep your users coming back.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "Web Development",
    link: "web-development",
    description:
      "Your website should work as hard as you do. We create responsive, fast-loading websites that reflect your brand and get results. From dynamic platforms to eCommerce solutions, we build the web with purpose.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "UX/UI Design",
    link: "ui-ux-design",
    description:
      "Design is more than visuals — it’s about experience. Our UI/UX process blends strategy and creativity to build intuitive, user-centered interfaces that turn visitors into loyal users.",
    icon: LaptopMinimalCheck,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Tailored Solutions: We provide customized digital solutions that align with your business goals.",
  "Expert Team: Our team consists of experienced professionals dedicated to delivering high-quality results.",
  "Innovative Approach: We stay updated with the latest industry trends to provide innovative solutions.",
  "Client-Centric: We prioritize your needs and work collaboratively to achieve your objectives.",
  "Scalability & Security: Our solutions are designed to grow with your business, ensuring consistent performance and data protection.",
];

export const testimonials = [
  {
    quote:
      "From idea to launch, IntueraAi Solution delivered. They helped us design, build, and ship a cross-platform app faster than we thought possible. Users love it — and so do we.",
    author: "Ravi M., Founder, TransitFlow",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "They nailed the look and feel we wanted, and the backend works flawlessly. We’ve seen a clear uptick in traffic and conversions since launch.",
    author: "Sarah L., Director of Marketing, Lumora Co.",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "They reimagined our product dashboard from the ground up. Cleaner design, faster flow, and fewer support tickets — that says it all.",
    author: "Jon D., Product Manager, PathData",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Their process was smooth, agile, and always clear. We never felt out of the loop — and the final product exceeded expectations.",
    author: "Angela R., CTO, EcoSync Technologies",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "IntueraAi Solution transformed our outdated web platform into a modern, high-performing application. Their attention to detail and expertise in AI integration was a game changer for our business.",
    author: "Neha S., CEO, Innovex Labs",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Tailored Digital Solutions",
    description:
      "We provide customized digital solutions that align with your business goals, ensuring every project is strategically driven.",
  },
  {
    id: 2,
    icon: graph,
    title: "Expert Team, Proven Results",
    description:
      "Our team of experienced professionals is dedicated to delivering high-quality solutions, using the latest industry trends and technologies.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Client-Centric Approach",
    description:
      "We work collaboratively to understand your business needs, offering end-to-end support from ideation to deployment.",
  },
  {
    id: 4,
    icon: start,
    title: "Scalable & Secure Solutions",
    description:
      "Our solutions are designed to grow with your business, prioritizing scalability and robust security protocols.",
  },
];

export const faqs = [
  {
    question: "What services does IntueraAi Solution offer?",
    answer:
      "We specialize in App Development, Web Development, and UI/UX Design, providing custom digital solutions tailored to your business needs.",
  },
  {
    question: "Why choose IntueraAi Solution?",
    answer:
      "We provide tailored solutions, a team of experienced professionals, an innovative approach, and a client-centric process that ensures your project meets your business objectives.",
  },
  {
    question: "What is the process for project development?",
    answer:
      "Our process includes Discovery, Planning, Development, Testing, and Launch, ensuring a seamless workflow from ideation to deployment.",
  },
  {
    question: "How do I get started with IntueraAi Solution?",
    answer:
      "Contact us through our official website to discuss your project and explore how we can help bring your ideas to life.",
  },
  {
    question: "What sets IntueraAi Solution apart from competitors?",
    answer:
      "We combine tailored solutions, expert teams, and innovative strategies to deliver high-quality digital products that drive business success.",
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Tailored Solutions",
    description:
      "We deliver customized digital solutions that align with your business goals, ensuring every project is strategically driven.",
  },
  {
    id: 2,
    icon: quality,
    title: "Innovation",
    description:
      "We stay updated with the latest industry trends to provide innovative solutions that drive business growth.",
  },
  {
    id: 3,
    icon: success,
    title: "Client-Centric Approach",
    description:
      "We prioritize your needs and work collaboratively to achieve your objectives, ensuring a seamless development experience.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Scalability & Security",
    description:
      "Our solutions are built to grow with your business, maintaining robust security protocols throughout.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To transform ideas into impactful digital solutions that drive business success through innovative app development, web development, and UI/UX design.",
  },
  {
    title: "Our Mission",
    description:
      "To provide tailored, high-quality digital solutions that align with our clients’ business goals, combining strategic planning, cutting-edge technologies, and user-centric design.",
  },
  {
    title: "Our Journey",
    description:
      "From startups to established enterprises, IntueraAi Solution has successfully delivered digital solutions that optimize user experiences and drive business growth.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];
// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart ",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// export const blockchainPortfolio = [
//   {
//     id: 1,
//     img: nanoflow,
//     title: "Nanoflow",
//     link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
//   },
//   {
//     id: 2,
//     img: padipal,
//     title: "Padipal",
//     link: "https://padiepal.com",
//   },
//   {
//     id: 3,
//     img: cryptopadie,
//     title: "Cryptopadie",
//     link: "https://cryptopadie.com/",
//   },
// ];
