import keyAccessor from '../lib/index.js'
import { expect } from 'chai';

const music = {
  rock: {
    band: 'G N\' R'
  },
  pop: {

  }
}

describe('对象深层访问测试(success)', function() {
  it('访问music.rock.band, 期待结果 G N\' R', function() {
    const obj = keyAccessor(music)
    expect(obj.rock.band()).to.be.equal('G N\' R');
  });
});


describe('对象深层访问测试(叶子节点undefined)', function() {
  it('访问music.pop.band, 期待结果 undefined', function() {
    const obj = keyAccessor(music)
    expect(obj.pop.band()).to.be.equal(undefined);
  });
});


describe('对象深层访问测试(中间节点undefined)', function() {
  it('访问music.classical.band(), 期待结果 undefined', function() {
    const obj = keyAccessor(music)
    expect(obj.classical.band()).to.be.equal(undefined);
  });
});

