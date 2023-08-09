import { FormControl } from '@angular/forms';
import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent, InputType } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Atom/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      type: 'string',
      description: 'input label',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    inputType: {
      control: 'radio',
      type: 'string',
      options: ['email', 'number', 'text'],
      description: 'input type',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      type: 'string',
      description: 'input placeholder',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'enter something' },
      },
    },
    className: {
      control: 'select',
      options: [InputType.PRIMARY, InputType.LOADING],
      description: 'Input types',
      table: {
        type: {
          summary: [InputType.PRIMARY, InputType.LOADING],
        },
        defaultValue: { summary: InputType.PRIMARY },
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    label: 'input label',
    inputType: 'text',
    placeholder: 'enter anything',
    className: InputType.PRIMARY,
    control: new FormControl('hello'),
  },
};

export const Error: Story = {
  args: {
    label: 'input label',
    inputType: 'text',
    placeholder: 'enter anything',
    className: InputType.ERROR,
    control: new FormControl('hello'),
  },
};

export const Verify: Story = {
  args: {
    label: 'input label',
    inputType: 'text',
    placeholder: 'enter anything',
    className: InputType.LOADING,
    control: new FormControl('hello'),
  },
};
