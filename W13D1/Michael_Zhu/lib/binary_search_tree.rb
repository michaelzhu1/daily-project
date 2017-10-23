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
    @root = delete_tree_node(@root, value)
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

  def delete_node(node)
    if node.left.nil? && node.right.nil?
      node = nil
    elsif node.left && node.right.nil?
      node = node.left
    elsif node.left.nil? && node.right
      node = node.right
    else
      max_node = maximum(node.left)
      if max_node.left
        promote_child(node.left)
      end
      max_node.left = node.left
      max_node.right = node.right
      max_node
    end
  end

  def delete_tree_node(tree_node, value)
    if value == tree_node.value
      tree_node = delete_node(tree_node)
    elsif value <= tree_node.value
      tree_node.left = delete_tree_node(tree_node.left, value)
    else
      tree_node.right = delete_tree_node(tree_node.right, value)
    end
    tree_node
  end


  def promote_child(tree_node)
    if tree_node.right
      current_parent = tree_node
      new_max_node = maximum(tree_node.right)
    else
      return tree_node
    end
    current_parent.right = new_max_node.left
  end
end
