module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        templateFormats: ["html", "md", "njk"],
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
