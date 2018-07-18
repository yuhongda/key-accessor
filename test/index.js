import keyAccessor from '../lib/index.js'
import { expect } from 'chai';

const music = {
    rock: {
        band: 'G N\' R'
    },
    pop: {

    }
}

describe('对象深层访问测试', function() {
  it('访问music.rock.band, 期待结果 G N\' R', function() {
    const obj = keyAccessor(music)
    expect(music.rock.band).to.be.equal('G N\' R');
  });
});


describe('对象深层访问测试', function() {
    it('访问music.pop.band, 期待结果 undefined', function() {
        const obj = keyAccessor(music)
        expect(music.pop.band).to.be.equal(undefined);
    });
});