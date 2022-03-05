def merge_sort(items):
  if len(items) <= 1:
    return items

  middle_index = len(items) // 2
  left_split = items[:middle_index]
  right_split = items[middle_index:]

  left_sorted = merge_sort(left_split)
  right_sorted = merge_sort(right_split)

  return merge(left_sorted, right_sorted)

def merge(left, right):
  result = []
  print(left, right)
  while (left and right):
    if left[0] < right[0]:
      result.append(left.pop(0))
    else:
      result.append(right.pop(0))

  if left:
    result += left
  if right:
    result += right

  return result

# Time & Space
# time: O(n log n)
# space: O(n)

unordered_list = [356, 493, 746, 264, 569, 949, 895, 125]
ordered_list = merge_sort(unordered_list)
print('ordered_list', ordered_list)
