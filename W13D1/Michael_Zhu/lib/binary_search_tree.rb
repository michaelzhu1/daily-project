# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require 'byebug'

class BinarySearchTree
  attr_accessor :root
  def initialize
    @root = nil
  end

  def insert(value)
    if @root == nil
      @root = BSTNode.new(value)
      return
    end
    self.recur_insert!(@root, value)
  end

  def find(value, tree_node = @root)
    # byebug
    return tree_node if tree_node.value == value
    if value < tree_node.value
      return nil if tree_node.left.nil?
      self.find(value, tree_node.left)
    else
      return nil if tree_node.right.nil?
      self.find(value, tree_node.right)
    end
  end

  def delete(value)
    # byebug
    node = self.find(value)
    return nil unless node

    if value < node.value
      node.left = BinarySearchTree.delete!(node.left, value)
    elsif value > node.value
      node.right = BinarySearchTree.delete!(node.right, value)
    else
      return node.left unless node.right
      return node.right unless node.left
      t = node
      node = BinarySearchTree.min(t.right)
      node.right = BinarySearchTree.delete_min!(t.right)
      node.left = t.left
    end

    node
  end
  def self.max(node)
  return nil unless node
  return node unless node.right

  BinarySearchTree.max(node.right)
end

def self.min(node)
  return nil unless node
  return node unless node.left

  BinarySearchTree.min(node.left)
end

def self.delete_min!(node)
  return nil unless node
  return node.right unless node.left

  node.left = BinarySearchTree.delete_min!(node.left)
  node
end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node if tree_node.right.nil?
    return maximum(tree_node.right)
  end

  def depth(tree_node = @root)
    return -1 if tree_node.nil?
    1 + [self.depth(tree_node.left), self.depth(tree_node.right)].max
  end

  def is_balanced?(tree_node = @root)
    return true if tree_node.nil?
    left_tree = BinarySearchTree.new
    left_tree.root = tree_node.left
    right_tree = BinarySearchTree.new
    right_tree.root = tree_node.right
    diff_depth = left_tree.depth - right_tree.depth
    return false if diff_depth > 1 || diff_depth < -1
    is_balanced?(tree_node.left)
    is_balanced?(tree_node.right)
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return [] unless tree_node
    arr += in_order_traversal(tree_node.left)
    arr << tree_node.value
    arr += in_order_traversal(tree_node.right)
  end



  def recur_insert!(node, value)
    # byebug
    if node == nil
      return BSTNode.new(value)
    end
    if value <= node.value
      node.left = self.recur_insert!(node.left, value)
    else
      node.right = self.recur_insert!(node.right, value)
    end
    node
  end
end
