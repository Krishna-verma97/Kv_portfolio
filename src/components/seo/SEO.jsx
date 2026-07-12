import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://your-domain.com"; // Change after deployment

export default function SEO({
  title = "Krishna Verma | Full Stack Developer",
  description =
    "Portfolio of Krishna Verma - MERN Stack Developer, DevOps Enthusiast and AWS Learner.",
  keywords =
    "Krishna Verma, MERN, React, Node.js, DevOps, AWS, Portfolio",
  image = "/og-image.png",
  type = "website",
}) {
  const location = useLocation();

  const canonical = `${SITE_URL}${location.pathname}`;

  const ogImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

    const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Krishna Verma",
      url: SITE_URL,
      image: ogImage,
      jobTitle: "Full Stack Developer",
      description,
      sameAs: [
        "https://github.com/Krishna-verma97",
        "https://www.linkedin.com/in/krishna-verma-19a6912a0/",
      ],
      knowsAbout: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Docker",
        "AWS",
        "Linux",
        "DevOps",
        "Git",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Krishna Verma Portfolio",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Krishna Verma Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Theme */}
      <meta name="theme-color" content="#0f172a" />
      <script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>
    </Helmet>
  );
}