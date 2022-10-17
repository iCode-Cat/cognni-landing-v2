import React from 'react';

const BlockContent = require('@sanity/block-content-to-react');
const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const RichContent = ({ content }: any) => {
  return <BlockContent blocks={content} serializers={serializers} />;
};

export default RichContent;
