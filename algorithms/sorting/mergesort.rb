def merge_sort(arr)
    if arr.size <= 1
        return arr
    end
    size = arr.size
    middle = size / 2
   
    left = arr[0...middle]
    right = arr[middle...size]
    # OR 
    # left = arr.take(middle)
    # right = arr.drop(middle)

    left_sorted = merge_sort(left)
    right_sorted = merge_sort(right)

    return merge(left_sorted, right_sorted)
end

def merge(left, right)
    results = []
    while left.length > 0 && right.length > 0
        if left[0] < right[0]
            results << left.shift
        else
            results << right.shift
        end
    end

    results += left if left.length > 0
    results += right if right.length > 0
    results
end

arr = [9,7,3,4,1,8,2]
p merge_sort(arr)
