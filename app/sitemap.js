const baseUrl = "https://omarwoodshop.co.il";

export default function sitemap() {
  return [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/404`, priority: 0.1 },
  ];
}
