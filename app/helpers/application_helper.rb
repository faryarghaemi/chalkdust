module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | Chalkdust"
    end
  end
end
