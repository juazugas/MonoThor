import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should render main component', () => {
    expect(component).to.exist;
  });

  it('should contain title', () => {
    expect(component.find('h2')).to.exist;
  });

  it('should reder a search bar', () => {
    expect(component.find('.search-bar')).to.exist;
  });

  it('should reder a graph list', () => {
    expect(component.find('.graph-list')).to.exist;
  });
});
