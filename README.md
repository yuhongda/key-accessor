# key-accessor
access a key of object safely

Install
-----

```javascript

npm i key-accessor --save

```


Usage
-----

```javascript

const music = {
  rock: {
    band: 'G N\' R'
  },
  pop: {

  }
}

music.rock.band() // output: G N' R
music.pop.band() // output: undefined
music.classical.band() // output: undefined

```

