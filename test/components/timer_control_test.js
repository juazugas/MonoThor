import {renderComponent, expect} from '../test_helper';
import TimerControl from '../../src/components/timer_control';

describe('TimerControl', () => {

  let component;
  let props;
  beforeEach(() => {
    props = {
      timer: '',
      startTimer: () => {},
      stopTimer: () => {}
    };
    component = renderComponent(TimerControl, props);
  });

  it('should have timer-control class', () => {
    expect(component).to.have.class('timer-control');
  });

  it('should have a pause button', () => {
    expect(component.find('button[title=Pause]')).to.exist;
  });

  it('should have a resume button disabled', () => {
    let button = component.find('button[title=Resume]');
    expect(button).to.exist;
    expect(button).to.be.diabled;
  });

});
