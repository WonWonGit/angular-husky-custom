import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { ButtonComponent, ButtonType } from '../atoms/button/button.component';
import { InputComponent, InputType } from '../atoms/input/input.component';
import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
  title: 'Page/Login',
  component: LoginFormComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      control: 'text',
      type: 'string',
      description: 'input label',
      table: {
        type: {
          summary: 'string',
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
        },
      },
      inputClassName: {
        control: 'select',
        options: [InputType.PRIMARY, InputType.LOADING, InputType.ERROR],
        description: 'Button types',
        table: {
          type: {
            summary: [InputType.PRIMARY, InputType.LOADING, InputType.ERROR],
          },
        },
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [LoginFormComponent, InputComponent, ButtonComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Primary: Story = {
  args: {
    buttonLabel: 'LOGIN',
    buttonType: ButtonType.PRIMARY,
    inputClassName: InputType.PRIMARY,
  },
};

export const Error: Story = {
  args: {
    buttonLabel: 'LOGIN',
    buttonType: ButtonType.ERROR,
    inputClassName: InputType.ERROR,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Input Reset', async () => {
      canvas.getByTestId('email').getElementsByTagName('input')[0].className =
        InputType.PRIMARY;
      canvas.getByRole('button').className = ButtonType.PRIMARY;
    });

    await step('Enter invalidate email', async () => {
      await userEvent.type(
        canvas.getByTestId('email').getElementsByTagName('input')[0],
        'anything',
        { delay: 150 }
      );
      canvas.getByTestId('email').getElementsByTagName('input')[0].className =
        InputType.ERROR;
    });

    await step('Enter invalidate password', async () => {
      await userEvent.type(
        canvas.getByTestId('password').getElementsByTagName('input')[0],
        'a',
        { delay: 150 }
      );
      canvas
        .getByTestId('password')
        .getElementsByTagName('input')[0].className = InputType.ERROR;
    });

    canvas.getByRole('button').className = ButtonType.ERROR;
  },
};

export const Loading: Story = {
  args: {
    buttonLabel: 'LOGIN',
    buttonType: ButtonType.LOADING,
    inputClassName: InputType.LOADING,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Input Reset', async () => {
      canvas.getByTestId('email').getElementsByTagName('input')[0].className =
        InputType.PRIMARY;
      canvas.getByTestId('email').getElementsByTagName('input')[0].className =
        InputType.PRIMARY;
      canvas.getByRole('button').className = ButtonType.PRIMARY;
    });

    await step('Enter user email', async () => {
      await userEvent.type(
        canvas.getByTestId('email').getElementsByTagName('input')[0],
        'email@provider.com',
        { delay: 150 }
      );
    });

    await step('Enter user password', async () => {
      await userEvent.type(
        canvas.getByTestId('password').getElementsByTagName('input')[0],
        'aabbccdd',
        { delay: 150 }
      );
    });

    await step('Click login button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    canvas
      .getByTestId('email')
      .getElementsByTagName('input')[0]
      .setAttribute('disabled', '');

    canvas
      .getByTestId('password')
      .getElementsByTagName('input')[0]
      .setAttribute('disabled', '');

    canvas.getByRole('button').className = ButtonType.LOADING;

    canvas.getByTestId('email').getElementsByTagName('input')[0].className =
      InputType.LOADING;

    canvas.getByTestId('password').getElementsByTagName('input')[0].className =
      InputType.LOADING;
  },
};
