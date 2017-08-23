class CatRentalRequest < ApplicationRecord

  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: {in: ["PENDING", "APPROVED", "DENIED"]}

  belongs_to :cat,
  primary_key: :id,
  foreign_key: :cat_id,
  class_name: :Cat


  def overlapping_requests
    # CatRentalRequest.where(cat_id: self.cat_id)
    #                 .where.not(id: self.id)
    #                 .where(start_date: self.start_date)
    #                 .where(end_date: self.end_date)
    #                 # .where.not('self.start_date > :end_date or end_date < :start_date', start_date: start_date, end_date: end_date)
    #

    CatRentalRequest.where.not(id: self.id)
                    .where(cat_id: self.cat_id)
                    .where.not('start_date > :end_date OR end_date < :start_date',
                    start_date: start_date, end_date: end_date)

  end

  def overlapping_approved_requests
    overlapping_requests.where(status: 'APPROVED')
  end

  def overlapping_pending_requests
    overlapping_requests.where(status: 'PENDING')
  end

  def does_not_overlap_approved_request
    overlapping_approved_requests.empty?
  end



end
