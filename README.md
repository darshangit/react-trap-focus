# React Focus Trap ![npm](https://img.shields.io/npm/v/react-trap-focus?color=lightgreen&label=react-trap-focus&logo=react)

A react component to trap your focus for keyboard events.

It is as simple as wrapping your component with the FocusTrap and rest will be be taken care of.

-----

## Installation

Using npm:

```
$ npm i react-trap-focus
```

Using yarn:

```
$ yarn add react-trap-focus
```
----
## Usage

There are 2 ways in which you can use it.

### <b>1) Wrapping any component in it.</b>


>The default query selector is `[role="button"]` but you can pass whatever your application sees fit.

```javascript
import { FocusTrap } from 'react-trap-focus'

<FocusTrap>
    <Modal.Body>
        // Do Something
    </Modal.Body>
</FocusTrap>
```

```javascript
import { FocusTrap } from 'react-trap-focus'

<FocusTrap querySelector={'div.highlighted > p'}>
 // Do something / wrap any component
</FocusTrap>
```


### <b>2) Directly calling the method on keyboard events.</b>

The package also exposes `focusTrap = (event: KeyboardEvent, elements: HTMLElement[])` function which can be used directly on keyboard events.

>Pass the event and the elements list you want to be focus trapped.

```javascript
import { focusTrap } from 'react-trap-focus'

  const allButtonEls = document.querySelectorAll('[role="button"]')
  const onKeyDown = event => focusTrap(event, allButtonEls)
  return (
    <div onKeyDown={onKeyDown}>
      // Do something
    </div>
  )
```

---------