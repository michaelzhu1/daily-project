require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize(size = 8)
    @length = 0
    @store = StaticArray.new(0)
    @start_idx = 0
    @capacity = size
    @last = 0
  end

  # O(1)
  def [](index)
    if index >= @length
      raise "index out of bounds"
    end
    @store[self.check_index(index)]
  end

  # O(1)
  def []=(index, val)
    @store[self.check_index(index)] = val
  end

  # O(1)
  def pop
    if @length == 0
      raise "index out of bounds"
    end
    @length -= 1
    @store[self.check_index(@length)]
  end

  # O(1) ammortized
  def push(val)
    if @length == @capacity
      self.resize!
    end
    @last = val
    @store[self.check_index(@length)] = val
    @length += 1
  end

  # O(1)
  def shift
    if @length == 0
      raise "index out of bounds"
    end
    val = @store[@start_idx]
    @start_idx = (@start_idx + 1) % @capacity
    @length -= 1
    val
  end

  # O(1) ammortized
  def unshift(val)
    if @length == @capacity
      self.resize!
    end
    @length += 1
    @start_idx = (@start_idx - 1) % @capacity
    @store[@start_idx] = val
  end

  def last
    @last
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    (@start_idx + index) % @capacity
  end

  def resize!
    new_store = StaticArray.new(@capacity*2)
    i = 0
    while i < @length
      new_store[i] = @store[(@start_idx + i)% @capacity]
      i += 1
    end
    @capacity *= 2
    @start_idx = 0
    @store = new_store
  end


end
