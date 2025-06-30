import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";

const meta: Meta<AppComponent> = {
  component: AppComponent,
  title: 'AppComponent',
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {
    title: 'nx-angular-tailwind-storybook-repro',
  },
};
