def bfs(graph, start_vertex, target_value):
  path = [start_vertex]
  vertex_and_path = [start_vertex, path]
  # add vertex and path to queue
  bfs_queue = [vertex_and_path]
  visited = set()

  while bfs_queue:
    # pop off current node from queue
    current_vertex, path = bfs_queue.pop(0)
    visited.add(current_vertex)
    # visit every neigh cu node
    for neighbor in graph[current_vertex]:
      if neighbor not in visited:
        if neighbor is target_value:
          return path + [neighbor]
        else:
          bfs_queue.append([neighbor, path + [neighbor]])

the_most_dangerous_graph = {
    'lava': set(['sharks', 'piranhas']),
    'sharks': set(['lava', 'bees', 'lasers']),
    'piranhas': set(['lava', 'crocodiles']),
    'bees': set(['sharks']),
    'lasers': set(['sharks', 'crocodiles']),
    'crocodiles': set(['piranhas', 'lasers'])
  }

print(bfs(some_hazardous_graph, 'sharks', 'bees'))
print(bfs(the_most_dangerous_graph, "crocodiles", "bees"))
