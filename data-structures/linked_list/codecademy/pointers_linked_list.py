def nth_last_node(linked_list, n):
    current = None
    tail_seeker = linked_list.head_node
    count = 1
    while tail_seeker:
    tail_seeker = tail_seeker.get_next_node()
    count += 1
    if count >= n + 1:
      if current is None:
        current = linked_list.head_node
      else:
        current = current.get_next_node()
    return current
