/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        host_dev: 'http://localhost:3000',
        port_dev: "3000",
        user_dev: 'root',
        password_dev: 'root',
        database_dev: 'peer_assessment',

    }
};

export default nextConfig;
