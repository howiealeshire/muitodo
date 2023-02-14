import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoInputComponent } from 'src/app/todo-input/todo-input.component';

const Template: Story<TodoInputComponent> = (args: TodoInputComponent) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoInput',
    component: TodoInputComponent,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Default = Template.bind({});
  Default.args = {
  };