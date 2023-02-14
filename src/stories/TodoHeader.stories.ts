import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoHeader } from 'src/app/header-component/todo-header.component';

const Template: Story<TodoHeader> = (args: TodoHeader) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoHeader',
    component: TodoHeader,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Default = Template.bind({});
  Default.args = {
  };