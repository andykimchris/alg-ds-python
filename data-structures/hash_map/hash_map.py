class HashMap:
    def __init__(self, array_size):
        self.array_size = array_size
        self.array = [None for item in range(array_size)]

    def hash(self, key, count_collisions=0):
        key_bytes = key.encode()
        hash_code = sum(key_bytes)
        return hash_code + count_collisions

    def compressor(self, hash_code):
        return hash_code % self.array_size

    



# hash_map = HashMap(15)
# hash_map.assign('gabbro','igneous')
# hash_map.assign('sandstone','sedimentary')
# hash_map.assign('gneiss','metamorphic')

# print(hash_map.retrieve('gabbro'))
# print(hash_map.retrieve('sandstone'))
# print(hash_map.retrieve('gneiss'))