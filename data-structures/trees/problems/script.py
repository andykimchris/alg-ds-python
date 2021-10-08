def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if root is None:
        return None

    # swap left and right trees
    root.left, root.right = root.right, root.left

    # recursively call func on left & right trees
    self.invertTree(root.left)
    self.invertTree(root.right)

    return root
