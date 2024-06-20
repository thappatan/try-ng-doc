import {NgDocPage} from '@ng-doc/core';

import { ButtonComponent } from '../../design-ui/button/button.component';

const ButtonPage: NgDocPage = {
	title: `Button`,
	mdFile: './index.md',
  playgrounds: {
    ButtonPlayground: {
      target: ButtonComponent,
      template: `<my-button>Example Button</my-button>`,
    },
  },
};

export default ButtonPage;
