# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

COLOR = %w(black white orange yellow grey)
SEX = ['M', 'F']

2.times do |i|
  Cat.create(name: Faker::Cat.name,
            color: COLOR.sample,
            sex: SEX.sample,
            birth_date: '2002/04/13',
            description: Faker::StarWars.quote)
end

2.times do |i|
  Cat.create(name: Faker::Cat.name,
            color: COLOR.sample,
            sex: SEX.sample,
            birth_date: '2012/07/09',
            description: Faker::StarWars.quote)
end


CatRentalRequest.create(cat_id: 1,
                        start_date: '2017/08/22',
                        end_date: '2017/08/25',
                        status: 'APPROVED')

CatRentalRequest.create(cat_id: 2,
                        start_date: '2017/08/22',
                        end_date: '2017/08/25',
                        status: 'DENIED')

CatRentalRequest.create(cat_id: 3,
                        start_date: '2017/08/22',
                        end_date: '2017/08/25')
