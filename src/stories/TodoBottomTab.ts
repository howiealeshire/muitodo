import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TodoBottomTabComponent } from 'src/app/todo-bottom-tab/todo-bottom-tab.component';

const Template: Story<TodoBottomTabComponent> = (args: TodoBottomTabComponent) => ({
    props: args,
  });

export default {
    title: 'Angular Material/TodoBottomTab',
    component: TodoBottomTabComponent,
    decorators: [
      moduleMetadata({   
      }),
    ],
  } as Meta;

  export const Default = Template.bind({});
  Default.args = {
  };