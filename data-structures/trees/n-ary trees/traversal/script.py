def preorder(self, root: 'Node') -> List[int]:
        if not root:
            return None

        res = []
        res.append(root.val)

        for child in root.children:
            res += self.preorder(child)

        return res
        
def postorder(self, root: 'Node') -> List[int]:
        if root is None:
            return None

        res = []
        for child in root.children:
            res += self.postorder(child)

        res.append(root.val)
        return res
