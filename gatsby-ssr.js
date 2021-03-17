/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const { WrapWithProvider } = require('./src/wrap-with-provider');

exports.wrapRootElement = ({ children }) => (
   <WrapWithProvider>{children}</WrapWithProvider>
);
