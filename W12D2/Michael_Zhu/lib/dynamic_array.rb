require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize(size = 8)
    @store = StaticArray.new(0)
    @length = 0
    @start_index = 0
    @capacity = size
  end

  # O(1)
  def [](index)
    if index >= self.length
      raise "index out of bounds"
    end
    @store[self.check_index(index)]
  end

  # O(1)
  def []=(index, value)
    @store[self.check_index(index)]=value
  end

  # O(1)
  def pop
    if @length == 0
      raise "index out of bounds"
    end
    @length -= 1
    @store[self.check_index(@length)]
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if @length == @capacity
      self.resize!
    end
    @store[self.check_index(@length)] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    if @length == 0
      raise "index out of bounds"
    end
    val = @store[@start_index]
    @start_index = (@start_index + 1) % @capacity
    @length -= 1
    val
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    if @length == @capacity
      self.resize!
    end
    @length += 1
    @start_index = (@start_index - 1) % @capacity
    @store[@start_index] = val
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    (@start_index + index) % @capacity
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_store = StaticArray.new(@capacity*2)
    i = 0
    while i < @length
      new_store[i] = @store[(@start_index + i) % @capacity]
      i += 1
    end
    @capacity *= 2
    @start_index = 0
    @store = new_store
  end
end
