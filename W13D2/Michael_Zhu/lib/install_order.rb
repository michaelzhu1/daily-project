# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to
require 'graph'
require 'topological_sort'
require 'byebug'

def install_order(arr)
  arr_uniq = arr.flatten.uniq
  vertices = {}
  (1..arr_uniq.max).each do |vertex|
    vertices[vertex] = Vertex.new(vertex)
  end
  # byebug
  arr.each do |node|
    from_vertex = vertices[node[0]]
    to_vertex = vertices[node[1]]
    Edge.new(from_vertex,to_vertex)
  end
  topological_sort(vertices.values).reverse.map { |v| v.value}
end

# 
# def install_order(arr)
#   max = 0
#   vertices ={}
#   arr.each do |tuple|
#     vertices[tuple[0]] = Vertex.new(tuple[0]) unless vertices[tuple[0]]
#     vertices[tuple[1]] = Vertex.new(tuple[1]) unless vertices[tuple[1]]
#   end
# end
