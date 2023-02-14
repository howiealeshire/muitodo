import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';

const Template: Story<TodoListComponent> = (args: TodoListComponent) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoList',
    component: TodoListComponent,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Default = Template.bind({});
  Default.args = {
  };