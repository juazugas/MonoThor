import { expect } from '../test_helper';

import * as types from '../../src/actions/types';
import * as actions from '../../src/actions';

describe('Redux Actions', () => {

  describe('selectApp', () => {

    it('should have the correct type', () => {
      const action = actions.selectApp();
      expect(action.type).to.be.equal(types.SELECT_APP);
    });

    it('should have the correct payload', () => {
      const action = actions.selectApp('app');
      expect(action.payload).to.be.equal('app');
    });

  });

  describe('selectPool', () => {

    it('should have the correct type', () => {
      const action = actions.selectPool();
      expect(action.type).to.be.equal(types.SELECT_POOL);
    });

    it('should have the correct payload', () => {
      const action = actions.selectPool('pool');
      expect(action.payload).to.be.equal('pool');
    });

  });

  describe('selectInstance', () => {

    it('should have the correct type', () => {
      const action = actions.selectInstance();
      expect(action.type).to.be.equal(types.SELECT_INSTANCE);
    });

    it('should have the correct payload', () => {
      const action = actions.selectInstance('instance');
      expect(action.payload).to.be.equal('instance');
    });

  });

  describe('showGraphs', () => {

    it('should have the correct type', () => {
      const action = actions.showGraphs();
      expect(action.type).to.be.equal(types.SHOW_GRAPHS);
    });

    it('should have the correct payload', () => {
      const action = actions.showGraphs({ data: {}});
      expect(action.payload).to.be.eql({data:{}});
    });

  });

  describe('clearGraphs', () => {

    it('should have the correct type', () => {
      const action = actions.clearGraphs();
      expect(action.type).to.be.equal(types.CLEAR_GRAPHS);
    });

    it('should have the correct payload', () => {
      const action = actions.clearGraphs();
      expect(action.payload).to.be.undefined;
    });

  });

  describe('startTimer', () => {

    it('should have the correct type', () => {
      const action = actions.startTimer();
      expect(action.type).to.be.equal(types.START_TIMER);
    });

    it('should have the correct payload', () => {
      const action = actions.startTimer();
      expect(action.payload).to.be.undefined;
    });

  });

  describe('stopTimer', () => {

    it('should have the correct type', () => {
      const action = actions.stopTimer();
      expect(action.type).to.be.equal(types.STOP_TIMER);
    });

    it('should have the correct payload', () => {
      const action = actions.stopTimer();
      expect(action.payload).to.be.undefined;
    });

  });

});
