def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return None

        result = []
        if root.left:
            result = self.inorderTraversal(root.left)

        result.append(root.val)

        if root.right:
            result = result + self.inorderTraversal(root.right)

        return result
