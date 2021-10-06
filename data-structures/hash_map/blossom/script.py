from linked_list import Node, LinkedList
from blossom_lib import flower_definitions 

class HashMap:
  def __init__(self, size):
    self.array_size = size
    self.array = [LinkedList() for i in range(self.array_size)]

  def hash(self, key):
    return sum(key.encode())

  def compressor(self, hash_code):
    return hash_code % self.array_size

  def assign(self, key, value):
    array_index = self.compressor(self.hash(key))
    list_at_array = self.array[array_index]
    payload = Node([key,value])

    for elem in list_at_array:
      if elem[0] == key:
        elem = [key, value]
        return

    list_at_array.insert(payload)

  def retrieve(self, key):
    array_index = self.compressor(self.hash(key))
    list_at_index = self.array[array_index]

    for elem in list_at_index:
      if elem[0] == key:
        return elem[1]
    return None

blossom = HashMap(len(flower_definitions))

for elem in flower_definitions:
  blossom.assign(elem[0], elem[1])

print(blossom.retrieve('daisy'))
print(blossom.retrieve('roses'))
print(blossom.retrieve('poppy'))

  