module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('./src/_assets/styles/global.css');
   eleventyConfig.addPassthroughCopy('./src/_assets/scripts/site.min.js');
   eleventyConfig.addPassthroughCopy('./src/_assets/images');
   eleventyConfig.addPassthroughCopy('./src/_assets/fonts');
   return {
      dir: {
         input: 'src',
         output: 'www',
         includes: '_includes',
         data: '_data'
      },
      templateFormats: ['liquid', 'md'],
      passthroughFileCopy: true
   };
};