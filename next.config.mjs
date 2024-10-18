/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "", // Deixe em branco se não houver porta específica
        pathname: "/u/**", // Isso permite todos os avatares dos usuários (pode ajustar conforme necessário)
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "", // Deixe em branco se não houver porta específica
        pathname: "/vi/**", // Isso permite todos os avatares dos usuários (pode ajustar conforme necessário)
      },
      {
        protocol: "https",
        hostname: "cdn.folhape.com.br",
        port: "", // Deixe em branco se não houver porta específica
        pathname: "/**", // Isso permite todos os avatares dos usuários (pode ajustar conforme necessário)
      },
    ],
  },
};

export default nextConfig;
