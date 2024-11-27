/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV == "development" ? '/dev' : '/app',
    // output: 'export',
    /**
     * Set the output type for static file generation during npm run build.
     * This configuration is used for production-ready builds.
     */
    redirects:async ()=>{
        return [
            {
                source:'/redirection/:childRedirection', // Note: We use ":" in the URL for dynamic child route
                destination:'/redirection',
                permanent:false // Note: We set permanent to false for SEO purposes. It should be set to true only if the page is permanently deleted or cloned.
            },
            {
                source:'/url-while-we-want-to-redirect',
                destination:'/page-where-we-want-to-redirect',
                permanent:false
            }
        ]
    }
};

export default nextConfig;
