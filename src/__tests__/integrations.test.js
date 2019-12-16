import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('can fetch a list of comments and display them', (done) => {
    wrapped.find('.fetch-comments').simulate('click');

    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(500);
        done();
    }, 1000)
    
});
