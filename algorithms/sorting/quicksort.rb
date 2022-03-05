def quicksort items, start, last
    return if start >= last

    pivot_idx = (start..last).to_a.sample
    pivot = items[pivot_idx]
    
    items[pivot_idx],items[last] = items[last],pivot

    less_than_pointer = start
    (start..last).each do |i|
        if items[i] < pivot
            items[less_than_pointer], items[i] = items[i], items[less_than_pointer]
            less_than_pointer += 1
        end
    end
    
    items[less_than_pointer], items[last] = items[last], items[less_than_pointer]
    quicksort(items, start, less_than_pointer-1)
    quicksort(items, less_than_pointer+1, last)
    
end

list = [3,5,4,4,678,99,32,2,7,67,12,44,9,1]
quicksort(list, 0, list.size - 1)
p "POST SORT: ", list
