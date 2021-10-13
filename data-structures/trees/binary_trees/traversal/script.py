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

def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return None

        result = []
        result.append(root.val)

        if root.left:
            result = result + self.preorderTraversal(root.left)
        if root.right:
            result = result + self.preorderTraversal(root.right)

        return result

def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return None

        result = []
        if root.left:
            result = self.postorderTraversal(root.left)

        if root.right:
            result = result + self.postorderTraversal(root.right)

        result.append(root.val)

        return result
