import React from 'react';
import { render } from '@testing-library/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';

describe('Carousel', () => {
  it('renders Carousel component', () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
    expect(container).toBeInTheDocument();
  });
});
