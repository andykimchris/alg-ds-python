class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def get_length(self):
        count = 0
        itr = self.head
        while itr:
            count+=1
            itr = itr.next

        return count

    def print(self):
        if self.head is None:
            print("Linked list is empty")
            return
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data)+' --> ' if itr.next else str(itr.data)
            itr = itr.next
        print(llstr)

    def insert_at_begining(self, data):
        node = Node(data, self.head)
        self.head = node


    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data, None)
            return

        itr = self.head
        while itr.next:
            itr = itr.next

        itr.next = Node(data, None)

    def insert_at(self, index, data):
        if index<0 or index>self.get_length():
            raise Exception("Invalid Index")

        if index==0:
            self.insert_at_begining(data)
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node
                break

            itr = itr.next
            count += 1


    def insert_values(self, data_list):
        self.head = None
        for data in data_list:
            self.insert_at_end(data)

    def remove_at(self, index):
        if index<0 or index>=self.get_length():
            raise Exception("Invalid Index")

        if index==0:
            self.head = self.head.next
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break

            itr = itr.next
            count+=1

    def remove_node_by_value(self, value_to_remove):
        current = self.head
        if current.data == value_to_remove:
          self.head = current.next
        else:
          while current:
            next_node = current.next
            if next_node.data == value_to_remove:
              current.next = current.next.next
              break
            else:
              current = next_node


if __name__ == '__main__':
    ll = LinkedList()
    ll.insert_values(["volvo","nissan","subaru","toyota","honda","ram"])
    print("Initial linked list")
    ll.print()

    ll.insert_at(1,"audi")
    ll.remove_at(2)
    print("Insert and remove")
    ll.print()

    ll.remove_node_by_value('toyota')
    print("Remove node by value: toyota")
    ll.print()

    print("Insert at end: kia")
    ll.insert_at_end('kia')
    ll.print()
