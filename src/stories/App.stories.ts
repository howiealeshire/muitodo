import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args,
  });

export default {
    title: 'Angular Material/Progressbar',
    component: AppComponent,
    decorators: [
      moduleMetadata({
        imports: [ BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatTableModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatListModule]      
      }),
    ],
    argTypes: {
      color: {
        options: ['primary', 'accent', 'warn'],
        control: { type: 'radio'},
      }
    },
  } as Meta;

  export const Determinate = Template.bind({});
  Determinate.args = {
  };