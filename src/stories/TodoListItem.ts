import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoItem } from 'src/app/todo-item-component/todo-item.component';

const Template: Story<TodoItem> = (args: TodoItem) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoListItem',
    component: TodoItem,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Default = Template.bind({});
  Default.args = {
  };