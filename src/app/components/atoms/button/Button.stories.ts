import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent, ButtonType } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atom/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      control: 'text',
      type: 'string',
      description: 'Button contents',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    buttonType: {
      control: 'select',
      options: [ButtonType.PRIMARY, ButtonType.LOADING],
      description: 'Button types',
      table: {
        type: {
          summary: [ButtonType.PRIMARY, ButtonType.LOADING],
        },
        defaultValue: { summary: ButtonType.PRIMARY },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    buttonType: ButtonType.PRIMARY,
    buttonLabel: 'Button',
    buttonDisable: true,
  },
};

export const Error: Story = {
  args: {
    buttonType: ButtonType.ERROR,
    buttonLabel: 'Button',
    buttonDisable: true,
  },
};

export const Loading: Story = {
  args: {
    buttonType: ButtonType.LOADING,
    buttonLabel: 'Button',
    buttonDisable: false,
  },
};
