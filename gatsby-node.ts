const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/",
    component: path.resolve("src/template/home-page.tsx"),
  });
  createPage({
    path: "/products",
    component: path.resolve("src/template/products-page.tsx"),
  });
  createPage({
    path: "/company",
    component: path.resolve("src/template/company-page.tsx"),
  });
  createPage({
    path: "/blog",
    component: path.resolve("src/template/blog-page.tsx"),
  });
  createPage({
    path: "/products/research",
    component: path.resolve("src/template/research-page.tsx"),
  });
};
