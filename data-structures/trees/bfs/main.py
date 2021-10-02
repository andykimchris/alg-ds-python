from tree import TreeNode
from bfs import bfs

sample_root_node = TreeNode("Home")
docs = TreeNode("Documents")
photos = TreeNode("Photos")
sample_root_node.children = [docs, photos]
my_wish = TreeNode("WishList.txt")
my_todo = TreeNode("TodoList.txt")
my_cat = TreeNode("Fluffy.jpg")
my_dog = TreeNode("Spot.jpg")
docs.children = [my_wish, my_todo]
photos.children = [my_cat, my_dog]

print("sample root node", sample_root_node)
# Change the 2nd argument below
goal_path = bfs(sample_root_node, "Spot.jpg")
if goal_path is None:
  print("No path found")
else:
  str = ""
  for node in goal_path:
    str += node.value 
    str += " | "
  print("\n")
  print("Path found", str)
