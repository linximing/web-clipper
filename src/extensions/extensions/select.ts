import { TextExtension } from '@web-clipper/extensions';

export default new TextExtension(
  {
    name: 'Manual selection',
    icon: 'select',
    version: '0.0.1',
    description: 'Manual selection page element.',
    i18nManifest: {
      'zh-CN': { name: '手动选取' },
    },
  },
  {
    run: async context => {
      const { turndown, Highlighter, toggleClipper } = context;
      toggleClipper();
      try {
        const data = await new Highlighter().start();
        let container = document.createElement('div');
        container.appendChild(data);
        return turndown.turndown(container);
      } catch (error) {
        throw error;
      } finally {
        toggleClipper();
      }
    },
  }
);
