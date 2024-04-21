const nunjucks = require("nunjucks");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

// Get pages data
const pagesData = yaml.load(
  fs.readFileSync("./src/data/yaml/pages.yaml", "utf8")
);

// render layout template
const layoutTemplate = fs.readFileSync("nunjucks/layout.tsx.njk", "utf8");
const layoutComponents = yaml.load(
  fs.readFileSync("./src/data/yaml/layout.yaml", "utf8")
);
const renderedLayout = nunjucks.renderString(layoutTemplate, {
  components: layoutComponents,
});
const layoutOutputFile = path.join("src/layouts", `index.tsx`);
fs.writeFileSync(layoutOutputFile, renderedLayout);
console.log("Generated", layoutOutputFile);

// render pages and components
const outputDir = "template";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
const pageTemplate = fs.readFileSync("nunjucks/page.tsx.njk", "utf8");
pagesData.forEach((page) => {
  const importedComponents = new Set();
  const { ymlPath, pageName, seo } = page;
  const components = yaml.load(fs.readFileSync(ymlPath, "utf8"));
  components?.forEach((component) => {
    importedComponents.add(component.componentName);
  });
  const renderedTemplate = nunjucks.renderString(pageTemplate, {
    pageName,
    seo,
    components,
    importedComponents: Array.from(importedComponents),
  });
  const outputFile = path.join(outputDir, `${pageName}.tsx`);
  fs.writeFileSync(outputFile, renderedTemplate);
  console.log("Generated", outputFile);
});

// render gatsby-node.ts
const gatsbyNodeTemplate = fs.readFileSync(
  "nunjucks/gatsby-node.ts.njk",
  "utf8"
);
const renderedGatsbyNode = nunjucks.renderString(gatsbyNodeTemplate, {
  pagesData,
});
const gatsbyNodeOutputFile = path.join(__dirname, `gatsby-node.ts`);
fs.writeFileSync(gatsbyNodeOutputFile, renderedGatsbyNode);
console.log("Generated", gatsbyNodeOutputFile);
