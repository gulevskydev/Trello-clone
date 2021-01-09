export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

export function makeDropHandler(onComplete) {
  let src = null;
  let trg = null;
  let payload = null;
  let element = null;

  function reset() {
    src = null;
    trg = null;
    payload = null;
    element = null;
  }

  return function onDrop(event, ...params) {
    if (this.onDrop) {
      this[onDrop](event, ...params);
    }

    if (event.removedIndex !== null) {
      src = new DragData(event.removedIndex, params);
    }
    if (event.addedIndex !== null) {
      trg = new DragData(event.addedIndex, params);
      payload = event.payload;
      element = event.droppedElement;
    }

    if (src && trg) {
      this[onComplete](src, trg, element, payload);
      reset();
    }
  };
}

function DragData(index, params) {
  this.index = index;
  this.params = params;
}

export function makeItem(title, description, date, id = null) {
  id = id || uuid();
  return { id, title, description, date };
}

export function makeList(title, items = []) {
  const id = uuid();
  return { id, title, items };
}

export function makeData() {
  return [
    makeList("One", [makeItem("1 1"), makeItem("1 2"), makeItem("1 3")]),
    makeList("Two", [makeItem("2 1"), makeItem("2 2"), makeItem("2 3")]),
    makeList("Three", [makeItem("3 1"), makeItem("3 2"), makeItem("3 3")]),
  ];
}
