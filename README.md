# Mixpanel middleware for Redux

## Installation
```bash
npm install --save redux-mixpanel
```

## Usage

### Apply middleware
```javascript
// import mixpanel client and redux-mixpanel middleware
import mixpanel from 'mixpanel-browser'
import MixpanelMiddleware from 'redux-mixpanel'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// init mixpanel and pass mixpanel client to middleware
mixpanel.init(token)
const mixpanelMiddleware = new MixpanelMiddleware(mixpanel)

// apply middleware
let todoApp = combineReducers(reducers)
let store = createStore(
  todoApp,
  applyMiddleware(mixpanelMiddleware)
)

```

### Actions
Add meta prop when you dispatch your actions, define what you want to send to mixpanel, event is the title of your event, props are optional data:
```javascript
dispatch({
  type: ADD_TO_CART,
  payload: item,
  meta: {
    mixpanel: {
      event: 'Add to cart',
      props: {
        id: item.id
        name: item.name,
        price: item.price
      }
    }
  }
})
```

## License

Copyright (c) 2016, Daniil Pokrovsky

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
