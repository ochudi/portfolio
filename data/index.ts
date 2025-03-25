export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Blog", link: "https://blog-chudi.vercel.app/" },
];

export const gridItems = [
  {
    id: 1,
    title: "I believe in strong client collaboration and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[30vh] lg:min-h-[60vh] text-gray-400 flex flex-col justify-end",
    imgClassName: "w-full md:h-full",
    titleClassName: "justify-end",
    img: "/chudi.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available across time zones to fit your schedule.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about technology and building great products.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a professional dashboard.",
    description: "The Inside Scoop:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's work together on your next project!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fin-Dash",
    des: "A financial dashboard that allows you monitor both stock and crypto prices, trends, and market data in real-time.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://findash-stocks.vercel.app",
  },
  {
    id: 2,
    title: "Horizon AI",
    des: "The innovative financial solution that offers AI insights to MSMEs and access to micro-loans.",
    img: "/p2.svg",
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://horizonai-main.vercel.app/",
  },
  {
    id: 3,
    title: "BTF Luxuries",
    des: "An e-commerce platform that offers luxury products and services to high-end clients.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://btf-luxuries.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce Admin",
    des: "A responsive admin dashboard that allows you manage products, orders, and customers with ease.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://ecommerce-admin-delta-blue.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Chukwudi was a game-changer. His expertise in both frontend and backend development made everything run smoothly. He’s proactive, detail-oriented, and always goes the extra mile. If you need a reliable developer, he’s the one.",
    name: "Sarah Afolabi",
    title: "CEO, LinePath Nigeria",
  },
  {
    quote:
      "Chukwudi completely revamped our UI/UX, making our platform more intuitive and visually appealing. His problem-solving skills and attention to detail made a huge difference. He’s a rare find in the tech space!",
    name: "Joshua Nwachukwu",
    title: "Head of IT, UNIV Nigeria",
  },
  {
    quote:
      "From start to finish, Chukwudi was a true partner. He understood our vision and delivered results beyond what we imagined. His technical skills and commitment to excellence set him apart.",
    name: "Ifeoluwa Afolabi",
    title: "Content Creator",
  },
  {
    quote:
      "Chukwudi brings energy and expertise to every project. Thanks to his frontend skills and keen eye for detail, we launched a sleek, high-performance product on time. Couldn’t have asked for a better collaborator.",
    name: "Nicholas Tali",
    title: "Founder, Nauvitel Electronics",
  },
  {
    quote:
      "Chukwudi’s ability to bridge UI/UX design with software development helped us create a seamless product. He’s creative, professional, and always delivers top-notch work. Highly recommended!",
    name: "Bola Sokoya",
    title: "CEO, Luxury Biz",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer",
    desc: "Designed and maintained scalable backend systems using Django, PostgreSQL, and Docker. Developed high-performance APIs and optimized data processing workflows.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Built responsive and visually engaging web applications using React, Next.js, and Tailwind CSS. Focused on accessibility, performance, and SEO-friendly design.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data Engineer",
    desc: "Developed efficient data pipelines and processing systems using Python, PostgreSQL, and cloud-based solutions. Focused on data analysis, storage, and optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "UI Designer",
    desc: "Created modern, user-friendly interfaces with Figma and Adobe XD. Worked closely with developers to bring intuitive, aesthetically pleasing designs to life.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ochudi",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/mrofoma",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ochudi/",
  },
];
