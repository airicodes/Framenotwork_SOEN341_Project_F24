/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/login/SignIn',
            permanent: true,
          },
        ]
      },

};

// module.exports = {
//     async redirects() {
//       return [
//         // Basic redirect
//         {
//           source: '/',
//           destination: '/login/SignIn',
//           permanent: true,
//         },
//       ]
//     },
//   }

export default nextConfig;
