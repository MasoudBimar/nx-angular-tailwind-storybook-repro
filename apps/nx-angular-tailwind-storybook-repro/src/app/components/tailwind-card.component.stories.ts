import type { Meta, StoryObj } from '@storybook/angular';
import { TailwindCardComponent } from './tailwind-card.component';

const meta: Meta<TailwindCardComponent> = {
  component: TailwindCardComponent,
  title: 'Components/Tailwind Card',
  parameters: {
    docs: {
      description: {
        component: 'A modern card component styled with Tailwind CSS utility classes.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the card',
    },
    description: {
      control: 'text',
      description: 'The description text of the card',
    },
    imageUrl: {
      control: 'text',
      description: 'Optional image URL for the card header',
    },
    badges: {
      control: 'object',
      description: 'Array of badge labels',
    },
    showButton: {
      control: 'boolean',
      description: 'Whether to show the action button',
    },
    buttonText: {
      control: 'text',
      description: 'Text for the action button',
    },
  },
};

export default meta;
type Story = StoryObj<TailwindCardComponent>;

export const Default: Story = {
  args: {
    title: 'Tailwind Card',
    description: 'This card showcases beautiful styling with Tailwind CSS utility classes.',
    badges: ['CSS', 'Responsive', 'Modern'],
    showButton: true,
    buttonText: 'Learn More',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Mountain Adventure',
    description: 'Explore breathtaking mountain landscapes and outdoor adventures.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150f80349b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badges: ['Adventure', 'Nature', 'Photography'],
    showButton: true,
    buttonText: 'Explore Now',
  },
};

export const TechCard: Story = {
  args: {
    title: 'Modern Web Development',
    description: 'Build amazing user interfaces with modern frameworks and tools.',
    badges: ['React', 'Angular', 'Vue'],
    showButton: true,
    buttonText: 'Start Building',
  },
};

export const SimpleCard: Story = {
  args: {
    title: 'Simple Design',
    description: 'Sometimes less is more. This card demonstrates a clean, minimal approach.',
    badges: ['Minimal', 'Clean'],
    showButton: false,
  },
};

export const ProductCard: Story = {
  args: {
    title: 'Premium Product',
    description: 'High-quality product with excellent features and modern design.',
    badges: ['Premium', 'Quality', 'Design'],
    showButton: true,
    buttonText: 'Buy Now',
  },
};
