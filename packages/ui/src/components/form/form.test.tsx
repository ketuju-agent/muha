import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './form';
import { useForm } from 'react-hook-form';

function TestForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form>Form Content</form>
    </Form>
  );
}

describe('Form', () => {
  it('renders Form component', () => {
    const { container } = render(<TestForm />);
    expect(container).toBeInTheDocument();
  });
});
