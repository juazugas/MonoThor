import {renderComponent, expect} from '../test_helper';

import { START_TIMER, STOP_TIMER } from '../../src/actions/types';
import GraphItem from '../../src/components/graph_item';

describe('GraphItem', () => {

  let component;
  let props;

  beforeEach(() => {
    props = {
      timer: STOP_TIMER,
      graph: {
        url: 'url',
        app: 'app', pool: 'pool',
        instance: 'instance', machine: 'machine'
      }
    };
    component = renderComponent(GraphItem, props);
  });

  it('should have graph-item class', () => {
    expect(component).to.have.class('graph-item');
  });

  it('should render image with src to graph url', () => {
    let image = component.find('img');
    expect(image).to.exist;
    expect(image).to.have.attr('src', props.graph.url);
  });

  it('should render a caption for the image', () => {
    expect(component.find('.caption')).to.exist;
  });

  it('should render a caption title', () => {
    let caption = component.find('.caption');
    let captionTitle = caption.find('h4');
    expect(captionTitle).to.exist;
    expect(captionTitle).to.have.text(`${props.graph.app}-${props.graph.instance}`);
  });

  it('should render a caption paragraph', () => {
    let captionParagraph = component.find('.caption').find('p');
    expect(captionParagraph).to.exist;
    expect(captionParagraph.find('a')).to.have.attr('href', props.graph.url);
    expect(captionParagraph.text()).to.contains(props.graph.machine);
    expect(captionParagraph.text()).to.contains(props.graph.pool);
  });

  it('should show error image on loading error', () => {
    let image = component.find('img');
    image.simulate('error');
    expect(image.attr('src')).to.startWith('data:image/gif;base64,');
  });

});
