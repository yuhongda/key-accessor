# key-accessor
> access a key of object safely

Install
-----

```javascript

npm i key-accessor --save

```


Usage
-----

```javascript
import keyAccessor from 'key-accessor'

const music = {
  rock: {
    band: 'G N\' R'
  },
  pop: {

  }
}

const obj = keyAccessor(music)

obj.rock.band() // output: G N' R
obj.pop.band() // output: undefined
obj.classical.band() // output: undefined

```

Note
-----

NOT support IE, since depending on Proxy object (ES6)

