import type { Meta, StoryObj } from '@storybook/angular';
import { MaterialCardComponent } from './material-card.component';

const meta: Meta<MaterialCardComponent> = {
  component: MaterialCardComponent,
  title: 'Components/Material Card',
  parameters: {
    docs: {
      description: {
        component: 'A card component built with Angular Material components.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the card',
    },
    content: {
      control: 'text',
      description: 'The main content text',
    },
    imageUrl: {
      control: 'text',
      description: 'Optional image URL for the card header',
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show action buttons',
    },
  },
};

export default meta;
type Story = StoryObj<MaterialCardComponent>;

export const Default: Story = {
  args: {
    title: 'Material Card',
    subtitle: 'Built with Angular Material',
    content: 'This card showcases Angular Material components with a clean, Material Design aesthetic.',
    showActions: true,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    content: 'Discover the beauty of nature through this stunning landscape photograph.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    showActions: true,
  },
};

export const SimpleCard: Story = {
  args: {
    title: 'Simple Card',
    subtitle: 'No actions',
    content: 'This is a simple card without action buttons.',
    showActions: false,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    subtitle: 'Extended description',
    content: 'This card demonstrates how the component handles longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    showActions: true,
  },
};
