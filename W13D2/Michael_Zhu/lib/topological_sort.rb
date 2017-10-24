require_relative 'graph'
require "byebug"
# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  in_edges_count = {}
  queue = []
  sorted = []
  vertices.each do |vertex|
    in_edges_count[vertex] = vertex.in_edges.count
    if vertex.in_edges.empty?
      queue.push(vertex)
    end
  end
  until queue.empty?
    current_vertex = queue.shift
    sorted << current_vertex
    current_vertex.out_edges.each do |edge|
      to_vertex = edge.to_vertex
      in_edges_count[to_vertex] -= 1
      queue.push(to_vertex) if in_edges_count[to_vertex] == 0
    end
  end
  in_edges_count.values.reduce(:+) == 0 ? sorted : []
end
