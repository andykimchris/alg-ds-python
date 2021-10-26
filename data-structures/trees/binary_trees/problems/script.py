def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None

        root.left, root.right = root.right, root.left

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root

def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root1:
            return root2
        if not root2:
            return root1

        # Either merge root1 to root2 or vice-versa, both work
        root2.val += root1.val
        root2.left = self.mergeTrees(root1.left, root2.left)
        root2.right = self.mergeTrees(root1.right, root2.right)

        return root2

# NOTE: check trees are similar i.e structurally identical & nodes have same values
def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True

        if p and not q or q and not p:
            return False

        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

# QUESTION: given root of a BST, return the minimum absolute difference btwn the values of any two nodes in the tree
def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
    def dfsPostOrder(root):
        if not root:
            return None
        values = []

        if root.left:
            values += dfsPostOrder(root.left)
        if root.right:
            values += dfsPostOrder(root.right)

        values.append(root.val)
        return values

    res = dfsPostOrder(root)
    res.sort()

    minimum = None
    length = len(res)
    for i in range(length):
        if i == length - 1:
            break
        left = res[i]
        right = res[i + 1]
        diff = right - left

        if not minimum:
            minimum = diff
        if diff < minimum:
            minimum = diff

    return minimum


# QUESTION: given root of BT, return its maximum depth
def maxDepth(self, root: Optional[TreeNode]) -> int:
    # Iterative DFS
    if root is None:
        return 0
    stack = [[root, 1]]
    result = 0
    while stack:
        node, depth = stack.pop()
        # in case of null node
        if node:
            result = max(result, depth)
            stack.append([node.left, depth+1])
            stack.append([node.right, depth+1])

    return result

    # Recursive DFS
    if root is None:
        return 0
    left = self.maxDepth(root.left)
    right = self.maxDepth(root.right)

    return max(left, right) + 1
