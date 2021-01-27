import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';



afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First Test > verify that the component is rendering 
    it('renders', () => {
        render(<About />);
    });

    //Second Test > compare snapshot versions of the DOM node structure / "test case"
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })


})

