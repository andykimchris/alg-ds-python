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

 def find_middle(linked_list):
    fast = linked_list.head_node
    slow = linked_list.head_node
    while fast:
        fast = fast.get_next_node()
        if fast:
            fast = fast.get_next_node()
            slow = slow.get_next_node()
    return slow
