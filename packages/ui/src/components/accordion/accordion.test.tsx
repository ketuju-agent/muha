import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

describe('Accordion', () => {
  it('renders Accordion component', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section Title</AccordionTrigger>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    await userEvent.click(screen.getByText('Section Title'));
    expect(screen.getByText('Accordion Content')).toBeInTheDocument();
  });
});
