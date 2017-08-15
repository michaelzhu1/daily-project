require_relative '../questions_database.rb'

class User

  attr_accessor :id, :f_name, :l_name

  def self.find_by_name(f_name, l_name)
    data = QuestionsDatabase.instance.execute(<<-SQL, f_name, l_name)
      SELECT
        *
      FROM
        users
      WHERE
        f_name = ?
      AND
        l_name = ?
    SQL
    User.new(data.first)
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    User.new(data.first)
  end

  def initialize(options)
    @f_name = options['f_name']
    @l_name = options['l_name']
    @id = options['id']
  end



end
