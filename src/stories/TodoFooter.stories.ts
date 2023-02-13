import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoFooter } from 'src/app/footer-component/todo-footer.component';

const Template: Story<TodoFooter> = (args: TodoFooter) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoFooter',
    component: TodoFooter,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Determinate = Template.bind({});
  Determinate.args = {
  };