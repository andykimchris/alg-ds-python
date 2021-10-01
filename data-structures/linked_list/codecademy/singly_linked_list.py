class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node

    def get_value(self):
        return self.value

    def get_next_node(self):
        return self.next_node

    def set_next_node(self, next_node):
        self.next_node = next_node

class LinkedList:
    def __init__(self, value=None):
        self.head_node = Node(value)

    def get_head_node(self):
        return self.head_node

    def insert_beginning(self, new_value):
        new_node = Node(new_value)
        new_node.set_next_node(self.head_node)
        self.head_node = new_node

    def remove_node(self, value_to_remove):
        current_node = self.get_head_node()
        if current_node.get_value() == value_to_remove:
          self.head_node = current_node.get_next_node()
        else:
          while current_node:
            next_node = current_node.get_next_node()
            if next_node.get_value() == value_to_remove:
              current_node.set_next_node(next_node.get_next_node())
              current_node = None
            else:
              current_node = next_node

    def stringify_list(self):
        string_list = ""
        current_node = self.get_head_node()
        while current_node:
            if current_node.get_value() != None:
                string_list += str(current_node.get_value()) + " --> "
                current_node = current_node.get_next_node()
            return string_list


    def print(self):
        current_node = self.get_head_node()
        if current_node is None:
            print("Linked list is empty")
            return
        itr = current_node
        llstr = ''
        while itr:
            llstr += str(itr.get_value())+' --> ' if itr.get_next_node() else str(itr.get_value())
            itr = itr.get_next_node()
        print(llstr)


def nth_last_node(linked_list, n):
    current = None
    tail_seeker = linked_list.head_node
    count = 0
    while tail_seeker:
        tail_seeker = tail_seeker.get_next_node()
        count += 1
        if count >= n:
          if current is None:
            current = linked_list.head_node
          else:
            current = current.get_next_node()
    return current


if __name__ == '__main__':
    ll = LinkedList()
    ll.insert_beginning("volvo",)
    ll.insert_beginning("nissan")
    ll.insert_beginning("subaru")
    ll.insert_beginning("toyota")
    ll.insert_beginning("ram")
    print("Initial linked list")
    ll.stringify_list()
    ll.print()

    ll.remove_node('toyota')
    print("Remove node by value: toyota")
    ll.stringify_list()
    ll.print()


    nth_last = nth_last_node(ll, 2)
    print(nth_last.get_value())
