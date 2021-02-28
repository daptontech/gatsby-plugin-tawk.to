import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  var tawkId = pluginOptions.tawkId
  var source = "https://embed.tawk.to/" + tawkId

  return setPostBodyComponents([
    <script
      key="gatsby-plugin-tawk.to"
      src={source}
    />
  ]);
};
