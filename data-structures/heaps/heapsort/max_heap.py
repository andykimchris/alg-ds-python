class MaxHeap:
  def __init__(self):
    self.heap_list = [None]
    self.count = 0

  # HEAP HELPER METHODS
  # DO NOT CHANGE!
  def parent_idx(self, idx):
    return idx // 2

  def left_child_idx(self, idx):
    return idx * 2

  def right_child_idx(self, idx):
    return idx * 2 + 1

  def child_present(self, idx):
    return self.left_child_idx(idx) <= self.count

  # END OF HEAP HELPER METHODS

  def add(self, element):
    self.count += 1
    print("Adding: {0} to {1}".format(element, self.heap_list))
    self.heap_list.append(element)
    self.heapify_up()

  def heapify_up(self):
    print("Heapifying up")
    idx = self.count
    while self.parent_idx(idx) > 0:
      child = self.heap_list[idx]
      parent = self.heap_list[self.parent_idx(idx)]
      if parent < child:
        print("swapping {0} with {1}".format(parent, child))
        self.heap_list[idx] = parent
        self.heap_list[self.parent_idx(idx)] = child
      idx = self.parent_idx(idx)
    print("Heap Restored {0}".format(self.heap_list))

  def retrieve_max(self):
    if self.count == 0:
      print("No items in heap")
      return None

    # get second value which is the MAX valye in heap list
    max_value = self.heap_list[1]
    print("Removing: {0} from {1}".format(max_value, self.heap_list))
    # swap last value in heap list to second value
    self.heap_list[1] = self.heap_list[self.count]
    self.count -= 1
    self.heap_list.pop()
    print("Last element moved to first: {0}".format(self.heap_list))
    self.heapify_down()
    return max_value

  def get_larger_child_idx(self, idx):
     # check if there is a right child
    if self.right_child_idx(idx) > self.count:
      print("There is only a left child")
      return self.left_child_idx(idx)
    else:
      # compare left & right child to find larger value
      left_child = self.heap_list[self.left_child_idx(idx)]
      right_child = self.heap_list[self.right_child_idx(idx)]
      if left_child > right_child:
        print("Left larger")
        return self.left_child_idx(idx)
      else:
        print("Right larger")
        return self.right_child_idx(idx)
