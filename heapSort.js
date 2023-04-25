function heapSort(array) {
    buildMaxHeap(array);
    for (let i = array.length - 1; i > 0; i--) {
      swap(array, 0, i);
      maxHeapify(array, 0, i);
    }
    return array;
  }
  
  function buildMaxHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      maxHeapify(array, i, array.length);
    }
  }
  
  function maxHeapify(array, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
  
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      swap(array, i, largest);
      maxHeapify(array, largest, heapSize);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  