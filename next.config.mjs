import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@"] = path.join(__dirname, ".");
        return config;
    },
};

export default nextConfig;
