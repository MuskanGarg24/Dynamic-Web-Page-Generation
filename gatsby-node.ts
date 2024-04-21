const path = require("path");

exports.createPages = async ({ actions }: any) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: path.resolve("./src/template/home-page.tsx"),
  });

  createPage({
    path: "/about",
    component: path.resolve("./src/template/about-page.tsx"),
  });

  createPage({
    path: "/company",
    component: path.resolve("./src/template/company-page.tsx"),
  });

  createPage({
    path: "/products",
    component: path.resolve("./src/template/products-page.tsx"),
  });

  // createPage({
  //     path: "/",
  //     component: path.resolve("template/Home.tsx"),
  // });

  // createPage({
  //   path: "/about",
  //   component: path.resolve("template/About.tsx"),
  // });

  // createPage({
  //   path: "/company",
  //   component: path.resolve("template/Company.tsx"),
  // });

  // createPage({
  //   path: "/products",
  //   component: path.resolve("template/Products.tsx"),
  // });
};
