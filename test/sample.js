export const sampleDocumnet = {
  attributes: {
    doctype: 'html',
  },
  nodes: [
    {
      type: 'element',
      tagName: 'head',
      attributes: {
        title: 'Page Title',
      },
      nodes: [
        { 
          type: 'element',
          tagName: 'meta',
          attributes: { charset: 'UTF-8' },
          nodes: [],
        },
        { 
          type: 'element',
          tagName: 'meta',
          attributes: { viewport: 'width=device-width, initial-scale=1.0' },
          nodes: [],
        },
        { 
          type: 'element',
          tagName: 'link',
          attributes: { rel: 'stylesheet', href: 'styles.css' },
          nodes: [],
        },
        { 
          type: 'element',
          tagName: 'link',
          attributes: { rel: 'icon', href: 'favicon.ico' },
          nodes: [],
        },
      ],
    },
    {
      type: 'element',
      tagName: 'body',
      attributes: {},
      nodes: [
        { 
          type: 'element',
          attributes: {},
          tagName: 'h1',
          nodes: [
            {
              type: 'text',
              value: 'Hello, World!',
            }
          ],
        },
        { 
          type: 'element', 
          attributes: {},
          tagName: 'p',
          nodes: [
            {
              type: 'text',
              value: 'This is an example HTML document.',
            },
            {
              type: 'text',
              value: 'Another paragraph line.',
            },
            { 
              type: 'element',
              attributes: {},
              tagName: 'div',
              nodes: [
                {
                  type: 'text',
                  value: 'Some text inside a div.',
                }
              ],
            },
          ],
        },
        {
          type: 'element',
          tagName: 'img',
          attributes: {
            src: 'image.jpg',
            alt: 'Sample Image',
          },
          nodes: [],
        },
      ],
    },
  ],
};