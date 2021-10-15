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
