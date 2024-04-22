const path = require("path");

exports.createPages = async ({ actions }: any) => {
    const { createPage } = actions;
    
        createPage({
            path: "/",
            component: path.resolve("template/Home.tsx"),
        });
    
        createPage({
            path: "/about",
            component: path.resolve("template/About.tsx"),
        });
    
        createPage({
            path: "/company",
            component: path.resolve("template/Company.tsx"),
        });
    
        createPage({
            path: "/products",
            component: path.resolve("template/Products.tsx"),
        });
    
};
