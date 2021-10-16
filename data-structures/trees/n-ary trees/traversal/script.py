def preorder(self, root: 'Node') -> List[int]:
        if not root:
            return None

        res = []
        res.append(root.val)

        for child in root.children:
            res += self.preorder(child)

        return res
