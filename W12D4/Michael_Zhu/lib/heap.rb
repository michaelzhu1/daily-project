class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @prc = prc
    @store = []
  end

  def count
    @store.length
  end

  def extract
    @store[0], @store[-1] = @store[-1], @store[0]
    popped = @store.pop
    BinaryMinHeap.heapify_down(@store, 0, &@prc)
    popped
  end

  def peek
    @store.first
  end

  def push(val)
    @store.push(val)
    BinaryMinHeap.heapify_up(@store, @store.length - 1, &@prc)
  end

  # class methods

  def self.child_indices(len, parent_index)
    result = []
    if (parent_index * 2 + 1) < len
      result << (parent_index * 2 + 1)
    end
    if (parent_index * 2 + 2) < len
      result << (parent_index * 2 + 2)
    end
    result
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    return array if parent_idx.nil? || parent_idx + 1 >= len
    child_indices = BinaryMinHeap.child_indices(len, parent_idx)
      if child_indices.any? { |x| prc.call(array[x], array[parent_idx]) == -1 }
        if child_indices.length > 1
          to_swap = prc.call(array[child_indices[0]], array[child_indices[1]]) == 1 ? child_indices[1] : child_indices[0]
        else
          to_swap = child_indices[0]
        end
        array[parent_idx], array[to_swap] = array[to_swap], array[parent_idx]
      end
      BinaryMinHeap.heapify_down(array, to_swap, &prc)
      array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    return array if child_idx == 0

    prc ||= Proc.new { |x, y| x <=> y }
    parent_idx = BinaryMinHeap.parent_index(child_idx)

    until child_idx == 0 || prc.call(array[parent_idx], array[child_idx]) == -1
      array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
      child_idx = parent_idx
      unless child_idx == 0
        parent_idx = BinaryMinHeap.parent_index(child_idx)
      end
    end
    array
  end
end
