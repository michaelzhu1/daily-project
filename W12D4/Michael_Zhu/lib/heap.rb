require "byebug"

class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new
  end

  def count
  end

  def extract
  end

  def peek
  end

  def push(val)
  end

  public
  def self.child_indices(len, parent_index)
    first = parent_index * 2 + 1
    if parent_index * 2 + 2 < len
      return [first, parent_index * 2 + 2]
    else
      return [first]
    end
  end

  def self.parent_index(child_index)
    if child_index == 0
      raise "root has no parent"
    end
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new do |el1, el2|
      el1 <=> el2
    end
    children = BinaryMinHeap.child_indices(len, parent_idx)
    if @store[parent_idx] > children[0]
      swap!(parent_idx, children[0])
    elsif @store[parent_idx] > children[1]
      swap!(parent_idx, children[1])
    end

  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
  end

  def heapified?(parent_idx, child_idx1, child_idx2)
    if @store[parent_idx] >= @store[child_idx1] && @store[parent_idx] >= @store[child_idx2]
      return true
    end
    false
  end

  def swap!(parent_idx, child_idx1)
    @store[parent_idx], @store[child_idx1] = @store[child_idx1], @store[parent_idx]
  end
end
