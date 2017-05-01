import {renderComponent, expect, sinon} from '../test_helper';

import { START_TIMER, STOP_TIMER } from '../../src/actions/types';
import TimerControl from '../../src/components/timer_control';

describe('TimerControl', () => {

  let component;
  let props;

  beforeEach(() => {
    props = {
      timer: START_TIMER,
      startTimer: sinon.spy(),
      stopTimer: sinon.spy()
    };
    component = renderComponent(TimerControl, props);
  });

  it('should have timer-control class', () => {
    expect(component).to.have.class('timer-control');
  });

  it('should have a pause button active', () => {
    let button = component.find('button[title=Pause]');
    expect(button).to.exist;
    expect(button).to.not.be.diabled;
  });

  it('should have a resume button disabled', () => {
    let button = component.find('button[title=Resume]');
    expect(button).to.exist;
    expect(button).to.be.diabled;
  });

  describe('pausing', () => {

    let pauseButton;
    beforeEach(() => {
      component.find('button[title=Pause]').simulate('click');
      props.timer = STOP_TIMER;
      component = renderComponent(TimerControl, props);
      pauseButton = component.find('button[title=Pause]');
    });

    it('should call stopTimer function', () => {
      expect(props.stopTimer.calledOnce).to.be.truthy;
    });

    it('should disable pause button when props.timer == STOP_TIMER', () => {
      expect(pauseButton).to.be.disabled;
    });

    it('should enable resume button when props.timer == STOP_TIMER', () => {
      expect(component.find('button[title=Resume]')).to.not.be.disabled;
    });

  });

  describe('resuming', () => {

    beforeEach(() => {
      component.find('button[title=Resume]').simulate('click');
    });

    it('should call startTimer function', () => {
      expect(props.startTimer.calledOnce).to.be.truthy;
    });

  });

});
